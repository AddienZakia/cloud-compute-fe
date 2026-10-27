'use client';

import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';
import { initialDriverData } from '../_data/driver-data';
import type { DriverDashboardData } from '../_schema/driver-schema';
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
