import { ROUTES } from '@/lib/routes';
import { BadgeCheck, Store } from 'lucide-react';
import Link from 'next/link';

export default function MerchantRow() {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#D91E18] to-[#F97316]">
          <Store size={20} className="text-white" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-extrabold text-slate-900">
              Ayam Goreng Berkah Pak Mul - Tebet
            </span>
            <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-bold text-green-600">
              <BadgeCheck size={10} />
              Terverifikasi
            </span>
          </div>
          <p className="text-[11px] text-slate-400 mt-0.5">
            ★ 4.8 (1.4rb+ rating) • 1.8 km (Tebet Timur)
          </p>
        </div>
        <Link
          href={ROUTES.merchantDetail}
          className="shrink-0 text-[12px] font-bold text-[#D91E18] hover:underline whitespace-nowrap"
        >
          Kunjungi Resto →
        </Link>
      </div>
    </div>
  );
}
