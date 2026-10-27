'use client';

import { type Dispatch, type SetStateAction, useCallback } from 'react';
import { offerToDelivery } from '../_lib/offer-to-delivery';
import type { DriverDashboardData } from '../_schema/driver-schema';

export function useDriverOperations(
  setData: Dispatch<SetStateAction<DriverDashboardData>>,
) {
  const arriveAtRestaurant = useCallback(
    (orderId: string) => {
      setData((prev) => ({
        ...prev,
        activeDeliveries: prev.activeDeliveries.map((item) =>
          item.id === orderId ? { ...item, status: 'TIBA_DI_RESTO' } : item,
        ),
      }));
    },
    [setData],
  );

  const acceptOffer = useCallback(
    (offerId: string): boolean => {
      let accepted = false;
      setData((prev) => {
        const offer = prev.newOffers.find((o) => o.id === offerId);
        if (!offer) return prev;

        const alreadyActive = prev.activeDeliveries.some(
          (d) => d.id === offerId || d.orderNumber === offer.orderNumber,
        );
        if (alreadyActive) return prev;

        accepted = true;
        const newDelivery = offerToDelivery(offer);
        return {
          ...prev,
          newOffers: prev.newOffers.filter((o) => o.id !== offerId),
          activeDeliveries: [...prev.activeDeliveries, newDelivery],
        };
      });
      return accepted;
    },
    [setData],
  );

  const dismissOffer = useCallback(
    (offerId: string) => {
      setData((prev) => ({
        ...prev,
        newOffers: prev.newOffers.filter((o) => o.id !== offerId),
      }));
    },
    [setData],
  );

  return {
    arriveAtRestaurant,
    acceptOffer,
    dismissOffer,
  };
}
