import { ROUTES } from '@/lib/routes';
import { CloudUpload, MapPin, Store } from 'lucide-react';
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
  deliverTo,
  onQtyChange,
}: Props) {
  const active = totals.remaining === 0;
  return (
    <aside className="rounded-2xl border border-rose-100 bg-white p-5 shadow-sm lg:sticky lg:top-24">
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
          <p className="py-4 text-center text-xs text-slate-400">
            Keranjang masih kosong
          </p>
        )}
        {items.map((it) => (
          <CartItemRow key={it.id} item={it} onQtyChange={onQtyChange} />
        ))}
      </div>

      <div className="mt-4 space-y-2 rounded-xl bg-[#FFF1EE] p-4 text-xs text-slate-600">
        <Row label="Subtotal Menu" value={rp(totals.subtotal)} />
        <Row
          label="Biaya Pengantaran (1.8 km)"
          value={rp(totals.delivery)}
          valueClass="font-bold text-green-600"
        />
        <Row label="Biaya Layanan & Pengemasan" value={rp(totals.service)} />
        <Row
          label="Potongan Voucher Toko"
          labelClass="font-semibold text-orange-600"
          value={totals.voucher ? `- ${rp(totals.voucher)}` : '- Rp 0'}
        />
        <div className="flex items-end justify-between border-t border-rose-200 pt-3">
          <span className="text-sm font-extrabold text-slate-900">
            Total Pembayaran
          </span>
          <span className="text-xl font-extrabold text-[#D91E18]">
            {rp(totals.total)}
          </span>
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-orange-200 bg-orange-50 p-3">
        <div className="flex items-center justify-between gap-2 text-[11px] font-semibold text-orange-700">
          <span>
            {active
              ? 'Voucher aktif: diskon 25% terpasang!'
              : `Tambah ${rp(totals.remaining)} lagi untuk diskon 25%!`}
          </span>
          <span>{totals.progress}%</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-orange-100">
          <div
            className="h-full rounded-full bg-orange-500 transition-all"
            style={{ width: `${totals.progress}%` }}
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs">
        <span className="flex items-center gap-1.5 text-slate-500">
          <MapPin size={13} className="text-[#D91E18]" />
          Kirim ke: <b className="text-slate-900">{deliverTo}</b>
        </span>
        <button
          type="button"
          className="font-bold text-[#D91E18] hover:underline"
        >
          Ubah
        </button>
      </div>

      {items.length === 0 ? (
        <button
          type="button"
          disabled
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white shadow-md shadow-red-200 transition cursor-not-allowed bg-slate-300 shadow-none"
        >
          <CloudUpload size={16} /> Lanjut ke Keranjang / Checkout
        </button>
      ) : (
        <Link
          href={ROUTES.checkout}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#D91E18] py-3 text-sm font-bold text-white shadow-md shadow-red-200 transition hover:bg-red-700"
        >
          <CloudUpload size={16} /> Lanjut ke Keranjang / Checkout
        </Link>
      )}
      <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
        Pesanan diproses instan via Bungkusin Event Stream
      </p>
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
