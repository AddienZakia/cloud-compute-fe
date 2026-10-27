'use client';

import { useGetAllOrders, useUpdateOrderStatus } from '@/hooks/order';
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

  const { orders: apiOrders } = useGetAllOrders({ take: 10, sort: 'desc' });
  const { mutate: updateStatusApi } = useUpdateOrderStatus('');

  React.useEffect(() => {
    if (apiOrders && apiOrders.length > 0) {
      const liveConverted: Order[] = apiOrders.map((o) => {
        let status: Order['status'] = 'PENDING';
        if (o.status === 'picked') status = 'PREPARING';
        else if (o.status === 'delivered') status = 'READY_FOR_PICKUP';
        else if (o.status === 'cancelled') status = 'REJECTED';

        return {
          id: o.id,
          customerName: o.user?.name || 'Pelanggan Baru',
          timeWib: '12:00 WIB',
          timeAgo: 'Baru saja',
          isVip: false,
          payment: {
            method: 'CASHLESS',
            status: 'LUNAS',
          },
          items: (o.orderItems || []).map((item) => ({
            id: item.id,
            qty: item.quantity,
            name: item.catalog?.title || 'Menu Pilihan',
            price: item.priceSnapshot,
          })),
          status,
          buyerNote: o.deliveryAddress
            ? `Alamat: ${o.deliveryAddress}`
            : undefined,
          courier: o.driver
            ? {
                name: o.driver.name,
                plateNumber: 'B 4920 SKJ',
                isArrived: true,
              }
            : undefined,
        };
      });

      setOrders(liveConverted);
    }
  }, [apiOrders]);

  const acceptOrder = React.useCallback(
    (orderId: string) => {
      if (orderId.length > 10) {
        updateStatusApi({ status: 'picked' });
      }
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
    },
    [updateStatusApi],
  );

  const rejectOrder = React.useCallback(
    (orderId: string) => {
      if (orderId.length > 10) {
        updateStatusApi({ status: 'cancelled' });
      }
      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? { ...o, status: 'REJECTED' } : o)),
      );
    },
    [updateStatusApi],
  );

  const markReady = React.useCallback(
    (orderId: string) => {
      if (orderId.length > 10) {
        updateStatusApi({ status: 'delivered' });
      }
      setOrders((prev) =>
        prev.map((o) =>
          o.id === orderId ? { ...o, status: 'READY_FOR_PICKUP' } : o,
        ),
      );
    },
    [updateStatusApi],
  );

  const handoverOrder = React.useCallback(
    (orderId: string) => {
      if (orderId.length > 10) {
        updateStatusApi({ status: 'delivered' });
      }
      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? { ...o, status: 'COMPLETED' } : o)),
      );
    },
    [updateStatusApi],
  );

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
