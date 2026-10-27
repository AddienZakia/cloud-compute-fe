'use client';

import * as React from 'react';
import { QueueColumnConfig } from '../_data/columns-data';
import { Order, OrderStatus } from '../_schema/order-schema';

export type QueueTabFilter = 'ALL' | OrderStatus;

export type QueueCounts = {
  all: number;
  pending: number;
  preparing: number;
  pickup: number;
};

export type QueueContextType = {
  orders: Order[];
  activeTab: QueueTabFilter;
  setActiveTab: (tab: QueueTabFilter) => void;
  counts: QueueCounts;
  visibleColumns: QueueColumnConfig[];
  acceptOrder: (orderId: string) => void;
  rejectOrder: (orderId: string) => void;
  markReady: (orderId: string) => void;
  handoverOrder: (orderId: string) => void;
};

const QueueContext = React.createContext<QueueContextType | null>(null);

export function QueueProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: QueueContextType;
}) {
  return (
    <QueueContext.Provider value={value}>{children}</QueueContext.Provider>
  );
}

export function useQueueContext(): QueueContextType {
  const context = React.useContext(QueueContext);
  if (!context) {
    throw new Error('useQueueContext must be used within a QueueProvider');
  }
  return context;
}
