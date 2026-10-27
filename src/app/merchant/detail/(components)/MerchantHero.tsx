'use client';

import { ROUTES } from '@/lib/routes';
import { ArrowLeft, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Merchant } from '../(container)/data';

export default function MerchantHero({ merchant }: { merchant: Merchant }) {
  return (
    <div className="relative h-[240px] overflow-hidden rounded-2xl bg-slate-800 sm:h-[280px]">
      <Image
        src={merchant.banner}
        alt={merchant.name}
        fill
        priority
        sizes="1200px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

      <div className="absolute left-4 top-4 flex items-center">
        <Link
          href={ROUTES.dashboard}
          className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm transition hover:bg-slate-100"
        >
          <ArrowLeft size={13} />
          Kembali ke Beranda
        </Link>
      </div>

      <div className="absolute inset-x-4 bottom-4 flex items-end gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 border-white bg-white shadow-md sm:h-20 sm:w-20">
          <Image
            src={merchant.logo}
            alt="Logo resto"
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-2">
            <span className="flex items-center gap-1 rounded-md bg-amber-400 px-2 py-0.5 text-[11px] font-extrabold text-slate-900">
              <Star size={11} className="fill-slate-900" />
              {merchant.rating}
            </span>
            <span className="rounded-md bg-green-500 px-2 py-0.5 text-[11px] font-bold text-white">
              BUKA
            </span>
          </div>
          <h1 className="text-xl font-extrabold leading-tight text-white sm:text-2xl truncate">
            {merchant.name}
          </h1>
        </div>
      </div>
    </div>
  );
}
