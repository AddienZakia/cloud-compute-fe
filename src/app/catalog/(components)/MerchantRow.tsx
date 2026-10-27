'use client';

import { useGetAllMerchants } from '@/hooks/merchant';
import { ROUTES } from '@/lib/routes';
import { BadgeCheck, Store } from 'lucide-react';
import Link from 'next/link';

export default function MerchantRow() {
  const { merchants } = useGetAllMerchants();
  const merchant = merchants?.[0];

  const title = merchant?.title || 'Ayam Goreng Berkah Pak Mul - Tebet';
  const rating = merchant?.rating || '4.8';
  const address = merchant?.address || 'Tebet Timur';

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#D91E18] to-[#F97316]">
          <Store size={20} className="text-white" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-extrabold text-slate-900">
              {title}
            </span>
            <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-bold text-green-600">
              <BadgeCheck size={10} />
              Terverifikasi
            </span>
          </div>
          <p className="text-[11px] text-slate-400 mt-0.5">
            ★ {rating} • {address}
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
