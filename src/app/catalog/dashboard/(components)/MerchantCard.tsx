import { ROUTES } from '@/lib/routes';
import { Clock, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Merchant } from '../(container)/data';

type MerchantCardProps = {
  merchant: Merchant;
};

export default function MerchantCard({ merchant }: MerchantCardProps) {
  const isClosed = !merchant.isOpen;

  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 ${
        isClosed ? 'opacity-80' : 'hover:-translate-y-1 hover:shadow-lg'
      }`}
    >
      {/* Photo */}
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={merchant.imageUrl}
          alt={merchant.name}
          fill
          className={`object-cover transition-transform duration-500 ${
            isClosed ? 'grayscale' : 'group-hover:scale-105'
          }`}
          unoptimized
        />

        {/* Open/Closed badge */}
        {isClosed ? (
          <div className="absolute left-3 top-3 rounded-full bg-slate-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow">
            TUTUP
          </div>
        ) : (
          <div className="absolute left-3 top-3 rounded-full bg-green-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow">
            BUKA
          </div>
        )}

        {/* Rating badge */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-1 text-[11px] font-bold text-white shadow backdrop-blur-sm">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          {merchant.rating} ({merchant.reviewCount})
        </div>

        {/* Closed overlay */}
        {isClosed && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50">
            <span className="rounded-xl bg-slate-800/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              Buka pk {merchant.openTime}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-[#D91E18]">
          {merchant.category} • {merchant.distance}
        </p>
        <h3 className="mb-1 font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#D91E18]">
          {merchant.name}
        </h3>
        <p className="mb-3 text-xs text-slate-400">
          Kisaran {merchant.priceRange}
        </p>

        {/* Footer row */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <Clock className="h-3.5 w-3.5" />
            {isClosed ? (
              <span className="font-semibold text-slate-400">Buka Sore</span>
            ) : (
              <span>{merchant.deliveryTime}</span>
            )}
          </div>

          {isClosed ? (
            <button
              disabled
              className="rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold text-slate-400 cursor-not-allowed"
            >
              Resto Tutup
            </button>
          ) : (
            <Link
              href={ROUTES.merchantDetail}
              className="rounded-full bg-[#D91E18] px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-red-700 active:scale-95"
            >
              Lihat Menu
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
