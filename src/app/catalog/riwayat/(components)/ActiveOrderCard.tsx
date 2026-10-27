import { Star } from 'lucide-react';
import Image from 'next/image';
import type { ActiveOrder } from '../(container)/data';
import DriverInfo from './DriverInfo';
import OrderProgress from './OrderProgress';
import PaymentSummary from './PaymentSummary';
import StatusBadge from './StatusBadge';

const fmt = (n: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(n);

type ActiveOrderCardProps = {
  order: ActiveOrder;
};

export default function ActiveOrderCard({ order }: ActiveOrderCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md">
      {/* Gradient top stripe */}
      <div
        className="h-1 w-full"
        style={{
          background: 'linear-gradient(90deg, #D91E18, #EF4444, #F97316)',
        }}
      />

      <div className="grid grid-cols-1 gap-0 lg:grid-cols-3">
        {/* ── Left Column: Photo ───────────────────────────────────── */}
        <div className="relative min-h-[260px] overflow-hidden lg:min-h-0">
          <Image
            src={order.imageUrl}
            alt={order.merchantName}
            fill
            className="object-cover"
            unoptimized
          />
          {/* Bottom overlay */}
          <div
            className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)',
            }}
          >
            <p className="text-sm font-bold text-white">{order.merchantName}</p>
            <div className="flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 backdrop-blur-sm">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-bold text-white">
                {order.rating}
              </span>
            </div>
          </div>
        </div>

        {/* ── Middle Column: Details ────────────────────────────────── */}
        <div className="flex flex-col gap-4 p-5">
          {/* Status + ID */}
          <div className="space-y-1.5">
            <StatusBadge status={order.status} />
            <p className="text-xs font-mono text-slate-400">{order.id}</p>
          </div>

          {/* Title + date */}
          <div>
            <h3 className="text-base font-extrabold leading-snug text-slate-900">
              {order.merchantSubtitle}
            </h3>
            <p className="mt-1 text-xs text-slate-400">{order.orderedAt}</p>
          </div>

          {/* Items list */}
          <div
            className="rounded-xl p-3 space-y-1.5"
            style={{ background: '#FFF1EE' }}
          >
            {order.items.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between"
              >
                <span className="text-xs font-semibold text-slate-700">
                  {item.name}
                </span>
                <span className="text-xs font-bold text-slate-800">
                  {fmt(item.price)}
                </span>
              </div>
            ))}
            {/* Extra items */}
            <div className="flex items-start justify-between pt-1">
              <span className="text-[11px] italic text-slate-400 flex-1 pr-2">
                {order.extraItemsNote}
              </span>
              <span className="text-xs font-bold text-slate-700 shrink-0">
                {fmt(order.extraItemsPrice)}
              </span>
            </div>
          </div>

          {/* Progress */}
          <OrderProgress
            estimatedArrival={order.estimatedArrival}
            estimatedMinutes={order.estimatedMinutes}
            progressPercent={order.progressPercent}
          />

          {/* Driver */}
          <DriverInfo
            name={order.driverName}
            vehicle={order.driverVehicle}
            plate={order.driverPlate}
            imageUrl={order.driverImageUrl}
          />
        </div>

        {/* ── Right Column: Payment ─────────────────────────────────── */}
        <div className="p-4 lg:p-5">
          <PaymentSummary
            paymentMethod={order.paymentMethod}
            subtotal={order.subtotal}
            shippingLabel={order.shippingLabel}
            shippingCost={order.shippingCost}
            discountLabel={order.discountLabel}
            discount={order.discount}
            total={order.total}
          />
        </div>
      </div>
    </div>
  );
}
