import { MapPin, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Merchant } from '../(container)/data';

type MerchantCardProps = {
  merchant: Merchant;
};

export default function MerchantCard({ merchant }: MerchantCardProps) {
  const isClosed = !merchant.isOpen;
  const detailUrl = `/merchant/detail?id=${merchant.id}`;

  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xs transition-all duration-300 ${
        isClosed ? 'opacity-75' : 'hover:-translate-y-1 hover:shadow-md'
      }`}
    >
      {/* Photo */}
      <Link
        href={detailUrl}
        className="relative h-44 w-full overflow-hidden block"
      >
        <Image
          src={merchant.imageUrl}
          alt={merchant.name}
          fill
          className={`object-cover transition-transform duration-500 ${
            isClosed ? 'grayscale' : 'group-hover:scale-105'
          }`}
          unoptimized
        />

        {/* Status badge */}
        <div
          className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow ${
            isClosed ? 'bg-slate-600' : 'bg-green-600'
          }`}
        >
          {isClosed ? 'TUTUP' : 'BUKA'}
        </div>

        {/* Rating badge */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-1 text-[11px] font-bold text-white shadow backdrop-blur-xs">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          {merchant.rating}
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <Link href={detailUrl}>
          <h3 className="mb-1.5 font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#D91E18]">
            {merchant.name}
          </h3>
        </Link>
        <p className="mb-4 flex items-center gap-1 text-xs text-slate-500 line-clamp-1">
          <MapPin size={12} className="shrink-0 text-[#D91E18]" />
          {merchant.address || 'Alamat mitra terverifikasi'}
        </p>

        {/* Footer row */}
        <div className="mt-auto flex items-center justify-end">
          {isClosed ? (
            <button
              disabled
              className="rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold text-slate-400 cursor-not-allowed"
            >
              Resto Tutup
            </button>
          ) : (
            <Link
              href={detailUrl}
              className="rounded-full bg-[#D91E18] px-4 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-red-800 active:scale-95"
            >
              Lihat Menu
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
