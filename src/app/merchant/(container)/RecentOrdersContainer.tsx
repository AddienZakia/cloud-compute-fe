'use client';

import { useGetAllOrders, useUpdateOrderStatus } from '@/hooks/order';
import * as React from 'react';
import OrderCard from '../(component)/OrderCard';
import RecentOrdersHeader from '../(component)/RecentOrdersHeader';
import { Order, OrderActionKey, initialOrders } from '../_data/orders';

export default function RecentOrdersContainer() {
  const [orders, setOrders] = React.useState<Order[]>(initialOrders);
  const { orders: apiOrders } = useGetAllOrders({ take: 10, sort: 'desc' });
  const { mutate: updateStatusApi } = useUpdateOrderStatus('');

  React.useEffect(() => {
    if (apiOrders && apiOrders.length > 0) {
      const converted: Order[] = apiOrders.map((o) => {
        let status: Order['status'] = 'WAITING_CONFIRMATION';
        if (o.status === 'picked') status = 'READY_FOR_PICKUP';
        else if (o.status === 'delivered') status = 'READY_FOR_PICKUP';

        const total = (o.orderItems || []).reduce(
          (acc, item) => acc + item.quantity * item.priceSnapshot,
          0,
        );

        return {
          id: o.id,
          orderNumber: `#ORD-${o.id.slice(0, 5).toUpperCase()}`,
          status,
          timeInfo: 'Baru saja',
          totalPayment: `Rp ${total.toLocaleString('id-ID')}`,
          customer: {
            name: o.user?.name || 'Pelanggan',
            rightBadgeText: 'LIVE ORDER',
            isRightBadgeSuccess: true,
          },
          items: (o.orderItems || []).map((it) => ({
            id: it.id,
            quantity: it.quantity,
            name: it.catalog?.title || 'Menu Pilihan',
            price: `Rp ${it.priceSnapshot.toLocaleString('id-ID')}`,
          })),
          driverInfo: o.driver
            ? { driverName: `Driver: ${o.driver.name}` }
            : { message: 'Menunggu alokasi armada kurir' },
          actions: [
            {
              key: 'CONFIRM',
              label: 'Terima Pesanan',
              variant: 'primary',
            },
            {
              key: 'REJECT',
              label: 'Tolak',
              variant: 'danger-outlined',
            },
          ],
        };
      });

      setOrders(converted);
    }
  }, [apiOrders]);

  const updateOrder = (orderId: string, patch: Partial<Order>) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, ...patch } : o)),
    );
  };

  const handleAction = (orderId: string, actionKey: OrderActionKey) => {
    if (actionKey === 'REJECT') {
      if (orderId.length > 10) {
        updateStatusApi({ id: orderId, status: 'cancelled' });
      }
      setOrders((prev) => prev.filter((o) => o.id !== orderId));
    } else if (actionKey === 'CONFIRM') {
      if (orderId.length > 10) {
        updateStatusApi({ id: orderId, status: 'picked' });
      }
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
      if (orderId.length > 10) {
        updateStatusApi({ id: orderId, status: 'delivered' });
      }
      updateOrder(orderId, {
        status: 'READY_FOR_PICKUP',
        timeInfo: 'Selesai Masak: Baru saja',
        isTimer: false,
        driverInfo: {
          driverName: 'Driver: Mitra Kurir',
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
          driverName: 'Driver: Mitra Kurir',
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
