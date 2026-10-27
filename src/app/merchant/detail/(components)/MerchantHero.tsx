'use client';

import { ROUTES } from '@/lib/routes';
import { ArrowLeft, Heart, Share2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Merchant } from '../(container)/data';

export default function MerchantHero({ merchant }: { merchant: Merchant }) {
  const [fav, setFav] = useState(false);

  return (
    <div className="relative h-[300px] overflow-hidden rounded-2xl bg-slate-800 sm:h-[340px]">
      <Image
        src={merchant.banner}
        alt={merchant.name}
        fill
        priority
        sizes="1200px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

      <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-2">
        <Link
          href={ROUTES.dashboard}
          className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] text-slate-600 shadow"
        >
          <ArrowLeft size={12} />
          {merchant.breadcrumb} /
          <b className="text-slate-900">{merchant.shortName}</b>
        </Link>
        <span className="flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
          {merchant.kitchen}
        </span>
      </div>

      <div className="absolute inset-x-4 bottom-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div className="flex items-end gap-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 border-white bg-white shadow-lg sm:h-20 sm:w-20">
            <Image
              src={merchant.logo}
              alt="Logo merchant"
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <div>
            <div className="mb-2 flex gap-2">
              <span className="rounded bg-slate-900/80 px-2 py-0.5 text-[9px] font-bold tracking-wide text-white">
                MERCHANT PILIHAN
              </span>
              <span className="rounded bg-green-500 px-2 py-0.5 text-[9px] font-bold tracking-wide text-white">
                BUKA SEKARANG
              </span>
            </div>
            <h1 className="text-xl font-extrabold leading-tight text-white sm:text-3xl">
              {merchant.name}
            </h1>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setFav((f) => !f)}
            className="flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-xs font-bold text-slate-800 shadow hover:bg-rose-50"
          >
            <Heart
              size={14}
              className="text-[#D91E18]"
              fill={fav ? '#D91E18' : 'none'}
            />
            Favoritkan
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-xs font-bold text-slate-800 shadow hover:bg-rose-50"
          >
            <Share2 size={14} /> Bagikan
          </button>
        </div>
      </div>
    </div>
  );
}
