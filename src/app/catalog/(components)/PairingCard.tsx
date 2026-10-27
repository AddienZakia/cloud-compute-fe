'use client';

import { ROUTES } from '@/lib/routes';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function rp(n: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(n);
}

interface PairingItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  badge: string;
  badgeColor: string;
}

interface Props {
  item: PairingItem;
  onAdd: () => void;
}

export default function PairingCard({ item, onAdd }: Props) {
  return (
    <article className="flex flex-col rounded-2xl bg-white shadow-sm overflow-hidden transition hover:shadow-md">
      <Link
        href={ROUTES.menu(item.id)}
        className="relative block h-40 w-full bg-slate-100 shrink-0"
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width:640px) 100vw, 33vw"
          className="object-cover"
        />
        <span
          className="absolute left-2 top-2 rounded-full px-2.5 py-1 text-[10px] font-bold text-white"
          style={{ backgroundColor: item.badgeColor }}
        >
          {item.badge}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-3">
        <Link href={ROUTES.menu(item.id)}>
          <h4 className="text-sm font-extrabold text-slate-900 leading-snug hover:text-[#D91E18] transition">
            {item.name}
          </h4>
        </Link>
        <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-slate-500">
          {item.description}
        </p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <span className="text-sm font-extrabold text-[#D91E18]">
            {rp(item.price)}
          </span>
          <button
            type="button"
            onClick={onAdd}
            className="flex items-center gap-1 rounded-lg border-2 border-[#D91E18] px-3 py-1.5 text-xs font-bold text-[#D91E18] transition hover:bg-red-50 active:scale-95"
          >
            <Plus size={12} />
            Tambah
          </button>
        </div>
      </div>
    </article>
  );
}

export type { PairingItem };
