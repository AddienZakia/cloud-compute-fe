import { Crosshair } from 'lucide-react';
import ActiveOrderCard from '../(components)/ActiveOrderCard';
import { activeOrder } from './data';

export default function ActiveOrderSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-6">
      {/* Section header */}
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
            Pesanan Sedang Diproses
          </h2>
        </div>
        <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 font-mono text-[11px] font-semibold text-orange-600">
          Live Event: order.delivery.dispatched
        </span>
      </div>

      <ActiveOrderCard order={activeOrder} />
    </section>
  );
}
