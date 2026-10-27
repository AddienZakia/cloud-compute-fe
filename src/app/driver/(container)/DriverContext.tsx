'use client';

import { useGetProfile } from '@/hooks/auth';
import { useGetAllOrders } from '@/hooks/order';
import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { initialDriverData } from '../_data/driver-data';
import type {
  ActiveDelivery,
  DriverDashboardData,
} from '../_schema/driver-schema';
import { useDriverOperations } from './useDriverOperations';

type DriverContextType = {
  data: DriverDashboardData;
  isOnline: boolean;
  isOpen: boolean;
  toggleOnline: () => void;
  toggleOpen: () => void;
  arriveAtRestaurant: (orderId: string) => void;
  acceptOffer: (offerId: string) => boolean;
  dismissOffer: (offerId: string) => void;
};

const DriverContext = createContext<DriverContextType | undefined>(undefined);

export function DriverProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<DriverDashboardData>(initialDriverData);

  // Ambil profil driver yang sedang login
  const { user } = useGetProfile();
  // Ambil pesanan live yang dialokasikan ke driver
  const { orders } = useGetAllOrders({ take: 10, sort: 'desc' });

  useEffect(() => {
    if (user) {
      setData((prev) => ({
        ...prev,
        profile: {
          ...prev.profile,
          name: user.name || prev.profile.name,
          badge: user.role === 'ADMIN' ? 'MASTER ARMADA' : prev.profile.badge,
        },
      }));
    }
  }, [user]);

  useEffect(() => {
    if (orders && orders.length > 0) {
      const liveDeliveries: ActiveDelivery[] = orders
        .filter((o) => o.status === 'waiting' || o.status === 'picked')
        .map((o) => ({
          id: o.id,
          orderNumber: `#ORD-${o.id.slice(0, 5).toUpperCase()}`,
          trackingSyncId: `SYNC-${o.id.slice(0, 8)}`,
          customerName: o.user?.name || 'Pelanggan',
          paymentMethod: 'CASHLESS / AUTO-DEBIT',
          status: o.status === 'picked' ? 'MENGANTAR' : 'MENJEMPUT',
          etaResto: '10-15 Menit',
          sealStatus: 'Segel Terpasang Sesuai SOP',
          deliveryFee: 14000,
          pickupPoint: {
            pointNumber: 1,
            title: 'TITIK JEMPUT (RESTO)',
            label: 'Titik Jemput Resto',
            name: o.merchant?.title || 'Restoran Mitra',
            address: o.merchant?.address || 'Jl. Raya Kampus',
            notes: 'Ambil di counter kasir / pickup station',
            primaryActionLabel: 'Sudah Tiba di Resto',
            secondaryActionLabel: 'Hubungi Resto',
          },
          dropoffPoint: {
            pointNumber: 2,
            title: 'TITIK ANTAR (KONSUMEN)',
            label: 'Titik Antar Konsumen',
            name: o.user?.name || 'Konsumen',
            address: o.deliveryAddress,
            notes: o.user?.phoneNumber
              ? `Telp: ${o.user.phoneNumber}`
              : undefined,
            primaryActionLabel: 'Konfirmasi Pesanan Terantar',
            secondaryActionLabel: 'Chat Pembeli',
          },
          items: (o.orderItems || []).map((item) => ({
            id: item.id,
            name: item.catalog?.title || 'Menu Pilihan',
            qty: item.quantity,
          })),
        }));

      if (liveDeliveries.length > 0) {
        setData((prev) => ({
          ...prev,
          activeDeliveries: liveDeliveries,
        }));
      }
    }
  }, [orders]);

  const toggleOnline = useCallback(() => {
    setData((prev) => ({
      ...prev,
      status: { ...prev.status, isOnline: !prev.status.isOnline },
    }));
  }, []);

  const toggleOpen = useCallback(() => {
    setData((prev) => ({
      ...prev,
      status: { ...prev.status, isOpen: !prev.status.isOpen },
    }));
  }, []);

  const operations = useDriverOperations(setData);

  const value: DriverContextType = {
    data,
    isOnline: data.status.isOnline,
    isOpen: data.status.isOpen,
    toggleOnline,
    toggleOpen,
    ...operations,
  };

  return (
    <DriverContext.Provider value={value}>{children}</DriverContext.Provider>
  );
}

export function useDriverContext(): DriverContextType {
  const context = useContext(DriverContext);
  if (!context) {
    throw new Error('useDriverContext must be used within a DriverProvider');
  }
  return context;
}
