'use client';

import { Flame, Plus } from 'lucide-react';
import Image from 'next/image';
import type { MenuItem } from '../(container)/data';

type MenuCardProps = {
  item: MenuItem;
  onAddToCart: () => void;
};

const badgeStyles: Record<MenuItem['badgeVariant'], string> = {
  red: 'bg-[#D91E18] text-white',
  dark: 'bg-slate-800 text-white',
  orange: 'bg-orange-500 text-white',
  green: 'bg-emerald-600 text-white',
};

export default function MenuCard({ item, onAddToCart }: MenuCardProps) {
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(item.price);

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Photo */}
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
        {/* Badge */}
        <div
          className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-[10px] font-bold shadow ${badgeStyles[item.badgeVariant]}`}
        >
          {item.badge}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Restaurant + Like */}
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[11px] font-semibold text-slate-400 truncate mr-2">
            {item.merchantName}
          </span>
          <div className="flex shrink-0 items-center gap-1 text-[11px] font-bold text-orange-500">
            <Flame className="h-3 w-3" />
            {item.likePercent}%
          </div>
        </div>

        {/* Menu name */}
        <h3 className="mb-1.5 font-bold leading-snug text-slate-900 line-clamp-2">
          {item.name}
        </h3>

        {/* Description */}
        <p className="mb-3 text-xs leading-relaxed text-slate-400 line-clamp-2">
          {item.description}
        </p>

        {/* Price + CTA */}
        <div className="mt-auto flex items-end justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Harga
            </p>
            <p className="text-base font-extrabold text-[#D91E18]">
              {formattedPrice}
            </p>
          </div>

          <button
            onClick={onAddToCart}
            className="flex items-center gap-1.5 rounded-full bg-[#D91E18] px-3.5 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-red-700 active:scale-95"
          >
            <Plus className="h-3.5 w-3.5" />
            Tambah
          </button>
        </div>
      </div>
    </div>
  );
}
