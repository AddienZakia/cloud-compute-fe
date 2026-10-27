'use client';

import { useEffect, useRef, useState } from 'react';
import type { NewOfferItem } from '../_schema/driver-schema';

export function useOfferTicker(
  offers: NewOfferItem[],
  expireOffer: (offerId: string) => void,
) {
  const expiryMapRef = useRef<Map<string, number>>(new Map());

  // Initialize remaining time using initialSeconds to avoid hydration mismatch
  const [remainingSeconds, setRemainingSeconds] = useState<
    Record<string, number>
  >(() => {
    const initial: Record<string, number> = {};
    for (const offer of offers) {
      initial[offer.id] = offer.initialSeconds;
    }
    return initial;
  });

  useEffect(() => {
    const now = Date.now();
    for (const offer of offers) {
      if (!expiryMapRef.current.has(offer.id)) {
        // Calculate expiresAt strictly on client mount
        expiryMapRef.current.set(offer.id, now + offer.initialSeconds * 1000);
      }
    }

    const intervalId = setInterval(() => {
      const currentNow = Date.now();
      const updated: Record<string, number> = {};
      const expiredIds: string[] = [];

      for (const offer of offers) {
        const expiresAt =
          expiryMapRef.current.get(offer.id) ??
          currentNow + offer.initialSeconds * 1000;
        const diff = Math.max(0, Math.ceil((expiresAt - currentNow) / 1000));
        updated[offer.id] = diff;

        if (diff <= 0) {
          expiredIds.push(offer.id);
        }
      }

      setRemainingSeconds(updated);

      for (const id of expiredIds) {
        expiryMapRef.current.delete(id);
        expireOffer(id);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [offers, expireOffer]);

  return remainingSeconds;
}
