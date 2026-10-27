'use client';

import * as React from 'react';
import OrderCard from '../(component)/OrderCard';
import RecentOrdersHeader from '../(component)/RecentOrdersHeader';
import { Order, OrderActionKey, initialOrders } from '../_data/orders';

export default function RecentOrdersContainer() {
  const [orders, setOrders] = React.useState<Order[]>(initialOrders);

  const updateOrder = (orderId: string, patch: Partial<Order>) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, ...patch } : o)),
    );
  };

  const handleAction = (orderId: string, actionKey: OrderActionKey) => {
    if (actionKey === 'REJECT') {
      setOrders((prev) => prev.filter((o) => o.id !== orderId));
    } else if (actionKey === 'CONFIRM') {
      updateOrder(orderId, {
        status: 'PREPARING',
        timeInfo: '00:01 menit berjalan',
        isTimer: true,
        isTotalPaymentPrimaryColor: false,
        customerNote: undefined,
        driverInfo: { message: 'Driver sedang dialokasikan menuju resto' },
        actions: [
          {
            key: 'READY',
            label: 'Tandai Siap Pickup (READY)',
            variant: 'primary',
          },
        ],
      });
    } else if (actionKey === 'READY') {
      updateOrder(orderId, {
        status: 'READY_FOR_PICKUP',
        timeInfo: 'Selesai Masak: Baru saja',
        isTimer: false,
        driverInfo: {
          driverName: 'Driver: Budi Santoso (Honda Vario • B 4920 SKJ)',
          estimatedArrival: 'Tiba di resto dalam perkiraan 2 menit',
        },
        actions: [
          {
            key: 'CALL_DRIVER',
            label: 'Panggil Driver',
            variant: 'ready-outlined',
          },
        ],
      });
    } else if (actionKey === 'CALL_DRIVER') {
      updateOrder(orderId, {
        driverInfo: {
          driverName: 'Driver: Budi Santoso (Honda Vario • B 4920 SKJ)',
          estimatedArrival: 'Panggilan terkirim ke driver!',
        },
        actions: [
          {
            key: 'CALL_DRIVER',
            label: 'Driver Dipanggil ✓',
            variant: 'ready-outlined',
          },
        ],
      });
    }
  };

  return (
    <section className="space-y-4">
      <RecentOrdersHeader />
      <div className="space-y-4">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} onAction={handleAction} />
        ))}
      </div>
    </section>
  );
}
