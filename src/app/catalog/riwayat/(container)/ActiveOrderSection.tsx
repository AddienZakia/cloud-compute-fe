'use client';

import { useGetAllOrders } from '@/hooks/order';
import { Crosshair } from 'lucide-react';
import ActiveOrderCard from '../(components)/ActiveOrderCard';
import { ActiveOrder, activeOrder } from './data';

export default function ActiveOrderSection() {
  const { orders } = useGetAllOrders({ take: 10, sort: 'desc' });

  const liveActiveOrder = orders?.find(
    (o) => o.status === 'waiting' || o.status === 'picked',
  );

  const displayOrder: ActiveOrder = liveActiveOrder
    ? {
        id: `#BKS-${liveActiveOrder.id.slice(0, 8).toUpperCase()}`,
        status: 'OUT_FOR_DELIVERY',
        merchantName:
          liveActiveOrder.merchant?.title || 'Resto Mitra Bungkusin',
        merchantSubtitle:
          liveActiveOrder.merchant?.address || 'Jl. Gebang Wetan',
        rating: '4.9',
        orderedAt: new Date(liveActiveOrder.createdAt).toLocaleTimeString(
          'id-ID',
          { hour: '2-digit', minute: '2-digit' },
        ),
        imageUrl:
          liveActiveOrder.merchant?.imageUrl ||
          'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80',
        items: (liveActiveOrder.orderItems || []).map((it) => ({
          name: it.catalog?.title || 'Menu Pilihan',
          price: it.priceSnapshot,
          qty: it.quantity,
        })),
        extraItemsNote: 'Biaya Layanan & Segel',
        extraItemsPrice: 3000,
        estimatedArrival: '15 Menit',
        estimatedMinutes: 15,
        progressPercent: liveActiveOrder.status === 'picked' ? 70 : 35,
        driverName:
          liveActiveOrder.driver?.name || 'Driver Sedang Menuju Resto',
        driverVehicle: 'Honda Vario 160',
        driverPlate: 'B 4920 SKJ',
        driverImageUrl:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
        paymentMethod: 'GoPay / Cashless',
        subtotal: (liveActiveOrder.orderItems || []).reduce(
          (acc, it) => acc + it.priceSnapshot * it.quantity,
          0,
        ),
        shippingLabel: 'Ongkir Promo',
        shippingCost: null,
        discountLabel: 'Voucher Pelanggan',
        discount: 0,
        total:
          liveActiveOrder.transaction?.grossAmount ||
          (liveActiveOrder.orderItems || []).reduce(
            (acc, it) => acc + it.priceSnapshot * it.quantity,
            0,
          ),
      }
    : activeOrder;

  if (!liveActiveOrder) {
    return null;
  }

  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="relative flex h-5 w-5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" />
            <Crosshair className="relative h-4 w-4 text-orange-500" />
          </div>
          <h2
            className="text-base font-bold text-slate-900"
            style={{ fontFamily: 'var(--font-plusJakarta)' }}
          >
            Pesanan Sedang Berjalan
          </h2>
        </div>
      </div>

      <ActiveOrderCard order={displayOrder} />
    </section>
  );
}
