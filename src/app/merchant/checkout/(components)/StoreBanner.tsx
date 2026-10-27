import { ROUTES } from '@/lib/routes';
import { BadgeCheck, RefreshCw, Store } from 'lucide-react';
import Link from 'next/link';

export default function StoreBanner() {
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl border-l-4 border-orange-400 bg-[#FFF1EE] p-4">
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-orange-500 text-white">
          <Store size={18} />
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-extrabold text-slate-900">
              Pesanan dari: Ayam Goreng Berkah Pak Mul - Tebet
            </p>
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[9px] font-bold text-amber-700">
              <BadgeCheck size={10} />
              RESTO TERVERIFIKASI
            </span>
          </div>
          <p className="mt-1 max-w-md text-[11px] leading-relaxed text-slate-500">
            Semua item dalam keranjang ini berasal dari merchant yang sama untuk
            efisiensi pengiriman armada driver &amp; konsistensi estimasi saji.
          </p>
        </div>
      </div>
      <Link
        href={ROUTES.dashboard}
        className="flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm transition hover:bg-slate-50"
      >
        <RefreshCw size={12} />
        Ganti Restoran?
      </Link>
    </div>
  );
}
