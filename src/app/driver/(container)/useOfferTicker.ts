'use client';

import { useEffect, useRef, useState } from 'react';
import type { NewOfferItem } from '../_schema/driver-schema';

export function useOfferTicker(offers: NewOfferItem[]) {
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
    const activeOfferIds = new Set(offers.map((offer) => offer.id));
    for (const offerId of expiryMapRef.current.keys()) {
      if (!activeOfferIds.has(offerId)) expiryMapRef.current.delete(offerId);
    }

    for (const offer of offers) {
      if (!expiryMapRef.current.has(offer.id)) {
        // Calculate expiresAt strictly on client mount
        expiryMapRef.current.set(offer.id, now + offer.initialSeconds * 1000);
      }
    }

    const intervalId = setInterval(() => {
      const currentNow = Date.now();
      const updated: Record<string, number> = {};
      for (const offer of offers) {
        const expiresAt =
          expiryMapRef.current.get(offer.id) ??
          currentNow + offer.initialSeconds * 1000;
        const diff = Math.max(0, Math.ceil((expiresAt - currentNow) / 1000));
        updated[offer.id] = diff;
      }

      setRemainingSeconds(updated);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [offers]);

  return remainingSeconds;
}
