import { StickyNote, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { CheckoutItem, rp } from '../(container)/data';
import QuantityStepper from '../../detail/(components)/QuantityStepper';

interface Props {
  item: CheckoutItem;
  onQtyChange: (id: number, qty: number) => void;
  onRemove: (id: number) => void;
}

const badgeClass: Record<CheckoutItem['badgeTone'], string> = {
  red: 'bg-red-50 text-[#D91E18]',
  orange: 'bg-orange-50 text-orange-600',
  gray: 'bg-slate-100 text-slate-500',
};

export default function CartItemCard({ item, onQtyChange, onRemove }: Props) {
  return (
    <div className="flex gap-4 rounded-2xl border border-rose-100 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="relative h-[88px] w-[88px] shrink-0 overflow-hidden rounded-xl bg-slate-100">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="88px"
          className="object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex items-center gap-2">
          <span
            className={`rounded-md px-2 py-0.5 text-[9px] font-bold ${badgeClass[item.badgeTone]}`}
          >
            {item.badge}
          </span>
          <span className="text-[10px] text-slate-400">{item.sku}</span>
        </div>
        <p className="text-sm font-extrabold leading-snug text-slate-900">
          {item.name}
        </p>
        <p className="text-sm font-bold text-[#D91E18]">
          {rp(item.price)} / {item.unit}
        </p>
        {item.note && (
          <span className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-[#FFF1EE] px-2.5 py-1 text-[10px] italic text-slate-500">
            <StickyNote size={10} className="shrink-0 text-rose-300" />
            &quot;{item.note}&quot;
          </span>
        )}
      </div>

      <div className="flex shrink-0 flex-col items-end justify-between">
        <div className="flex items-center gap-2">
          <p className="text-sm font-extrabold text-slate-900">
            {rp(item.price * item.qty)}
          </p>
          <button
            type="button"
            aria-label="Hapus item"
            onClick={() => onRemove(item.id)}
            className="grid h-7 w-7 place-items-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-[#D91E18]"
          >
            <Trash2 size={14} />
          </button>
        </div>
        <QuantityStepper
          qty={item.qty}
          onChange={(q) => onQtyChange(item.id, q)}
        />
      </div>
    </div>
  );
}
