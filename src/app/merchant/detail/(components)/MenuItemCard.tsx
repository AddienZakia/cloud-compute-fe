import { ROUTES } from '@/lib/routes';
import { Ban, ChefHat, Flame, Plus, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { MenuItem, rp } from '../(container)/data';

interface Props {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
}

const noteIcons = {
  like: <ThumbsUp size={12} className="text-amber-500" />,
  chef: <ChefHat size={12} className="text-[#D91E18]" />,
  flame: <Flame size={12} className="text-orange-500" />,
  soldout: <Ban size={12} className="text-[#D91E18]" />,
  none: null,
};

export default function MenuItemCard({ item, onAdd }: Props) {
  const out = item.soldOut;
  return (
    <article className="flex gap-4 rounded-2xl border border-rose-100 bg-white p-3 shadow-sm transition hover:shadow-md">
      {out ? (
        <div className="relative h-[120px] w-[120px] shrink-0 overflow-hidden rounded-xl bg-slate-100">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="120px"
            className="object-cover grayscale"
          />
          <span className="absolute inset-0 grid place-items-center bg-slate-900/40 text-xs font-extrabold text-white">
            Habis
          </span>
        </div>
      ) : (
        <Link
          href={ROUTES.menu(item.id)}
          className="relative h-[120px] w-[120px] shrink-0 overflow-hidden rounded-xl bg-slate-100 block"
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="120px"
            className="object-cover"
          />
          {item.badge && (
            <span
              className={`absolute left-1.5 top-1.5 rounded-md px-1.5 py-0.5 text-[9px] font-bold text-white ${
                item.badgeTone === 'orange' ? 'bg-orange-500' : 'bg-[#D91E18]'
              }`}
            >
              {item.badge}
            </span>
          )}
        </Link>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        {out ? (
          <h4 className="text-sm font-extrabold leading-snug text-slate-400 line-through">
            {item.name}
          </h4>
        ) : (
          <Link href={ROUTES.menu(item.id)}>
            <h4 className="text-sm font-extrabold leading-snug text-slate-900 hover:text-[#D91E18] transition">
              {item.name}
            </h4>
          </Link>
        )}
        <p
          className={`mt-1 line-clamp-2 text-[11px] leading-relaxed ${out ? 'text-slate-300' : 'text-slate-500'}`}
        >
          {item.description}
        </p>
        <div className="mt-1.5 flex items-baseline gap-2">
          <span
            className={`text-base font-extrabold ${out ? 'text-slate-400' : 'text-slate-900'}`}
          >
            {rp(item.price)}
          </span>
          {item.originalPrice && (
            <span className="text-[11px] text-slate-400 line-through">
              {rp(item.originalPrice)}
            </span>
          )}
        </div>
        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <span
            className={`flex items-center gap-1 text-[11px] font-semibold ${
              out ? 'text-[#D91E18]' : 'text-slate-500'
            }`}
          >
            {noteIcons[item.noteIcon]}
            {item.note}
          </span>
          <button
            type="button"
            disabled={out}
            onClick={() => onAdd(item)}
            className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
              out
                ? 'cursor-not-allowed bg-slate-200 text-slate-400'
                : 'bg-[#D91E18] text-white hover:bg-red-700'
            }`}
          >
            {!out && <Plus size={12} />}
            {out ? 'Stok Habis' : 'Tambah'}
          </button>
        </div>
      </div>
    </article>
  );
}
