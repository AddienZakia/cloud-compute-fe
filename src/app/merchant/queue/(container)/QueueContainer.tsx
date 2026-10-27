'use client';

import * as React from 'react';
import QueueView from '../(component)/QueueView';
import { QUEUE_COLUMNS } from '../_data/columns-data';
import { INITIAL_ORDERS } from '../_data/queue-data';
import { Order } from '../_schema/order-schema';
import {
  QueueContextType,
  QueueProvider,
  QueueTabFilter,
} from './QueueContext';

export default function QueueContainer() {
  const [orders, setOrders] = React.useState<Order[]>(INITIAL_ORDERS);
  const [activeTab, setActiveTab] = React.useState<QueueTabFilter>('ALL');

  const acceptOrder = React.useCallback((orderId: string) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === orderId
          ? {
              ...o,
              status: 'PREPARING',
              cookingProgress: {
                elapsed: '00:00',
                estimate: 'Est 15:00 Mnt',
                percent: 0,
              },
            }
          : o,
      ),
    );
  }, []);

  const rejectOrder = React.useCallback((orderId: string) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: 'REJECTED' } : o)),
    );
  }, []);

  const markReady = React.useCallback((orderId: string) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === orderId ? { ...o, status: 'READY_FOR_PICKUP' } : o,
      ),
    );
  }, []);

  const handoverOrder = React.useCallback((orderId: string) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: 'COMPLETED' } : o)),
    );
  }, []);

  const counts = React.useMemo(() => {
    const pending = orders.filter((o) => o.status === 'PENDING').length;
    const preparing = orders.filter((o) => o.status === 'PREPARING').length;
    const pickup = orders.filter((o) => o.status === 'READY_FOR_PICKUP').length;
    return { all: pending + preparing + pickup, pending, preparing, pickup };
  }, [orders]);

  const visibleColumns = React.useMemo(() => {
    return activeTab === 'ALL'
      ? QUEUE_COLUMNS
      : QUEUE_COLUMNS.filter((col) => col.status === activeTab);
  }, [activeTab]);

  const contextValue: QueueContextType = {
    orders,
    activeTab,
    setActiveTab,
    counts,
    visibleColumns,
    acceptOrder,
    rejectOrder,
    markReady,
    handoverOrder,
  };

  return (
    <QueueProvider value={contextValue}>
      <QueueView />
    </QueueProvider>
  );
}
