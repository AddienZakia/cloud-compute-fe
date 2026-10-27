import { ROUTES } from '@/lib/routes';
import { ShoppingBag, Store } from 'lucide-react';
import Link from 'next/link';
import { CartItem, rp } from '../(container)/data';
import CartItemRow from './CartItemRow';

export interface CartTotals {
  count: number;
  subtotal: number;
  delivery: number;
  service: number;
  voucher: number;
  total: number;
  progress: number;
  remaining: number;
}

interface Props {
  items: CartItem[];
  totals: CartTotals;
  store: string;
  deliverTo: string;
  onQtyChange: (id: number, qty: number) => void;
}

export default function CartPanel({
  items,
  totals,
  store,
  onQtyChange,
}: Props) {
  const deliveryFee = items.length > 0 ? 12000 : 0;
  const grandTotal = totals.subtotal + deliveryFee;

  return (
    <aside className="rounded-2xl border border-rose-100 bg-white p-5 shadow-xs lg:sticky lg:top-24">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-base font-extrabold text-slate-900">
          <span className="h-4 w-1 rounded bg-[#D91E18]" />
          Keranjang Pesanan
        </h3>
        <span className="rounded-full bg-red-50 px-2.5 py-0.5 text-[11px] font-bold text-[#D91E18]">
          {totals.count} Item
        </span>
      </div>
      <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
        <Store size={12} /> {store}
      </p>

      <div className="mt-4 space-y-4 border-b border-slate-100 pb-4">
        {items.length === 0 && (
          <p className="py-6 text-center text-xs text-slate-400">
            Keranjang masih kosong. Pilih menu di sebelah kiri.
          </p>
        )}
        {items.map((it) => (
          <CartItemRow key={it.id} item={it} onQtyChange={onQtyChange} />
        ))}
      </div>

      <div className="mt-4 space-y-2 rounded-xl bg-[#FFF1EE] p-4 text-xs text-slate-600">
        <Row label="Subtotal Menu" value={rp(totals.subtotal)} />
        <Row
          label="Biaya Pengantaran"
          value={rp(deliveryFee)}
          valueClass="font-bold text-slate-700"
        />
        <div className="flex items-end justify-between border-t border-rose-200 pt-3">
          <span className="text-sm font-extrabold text-slate-900">
            Total Pembayaran
          </span>
          <span className="text-xl font-extrabold text-[#D91E18]">
            {rp(grandTotal)}
          </span>
        </div>
      </div>

      {items.length === 0 ? (
        <button
          type="button"
          disabled
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white transition cursor-not-allowed bg-slate-300"
        >
          <ShoppingBag size={16} /> Lanjut ke Checkout
        </button>
      ) : (
        <Link
          href={ROUTES.checkout}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#D91E18] py-3 text-sm font-bold text-white shadow-xs transition hover:bg-red-800"
        >
          <ShoppingBag size={16} /> Lanjut ke Checkout
        </Link>
      )}
    </aside>
  );
}

function Row({
  label,
  value,
  labelClass = '',
  valueClass = 'font-semibold text-slate-800',
}: {
  label: string;
  value: string;
  labelClass?: string;
  valueClass?: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className={labelClass}>{label}</span>
      <span className={valueClass}>{value}</span>
    </div>
  );
}
