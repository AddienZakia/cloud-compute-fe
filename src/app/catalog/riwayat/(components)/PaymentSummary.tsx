import { ClipboardList, MapPin, Wallet } from 'lucide-react';

type PaymentSummaryProps = {
  paymentMethod: string;
  subtotal: number;
  shippingLabel: string;
  shippingCost: number | null;
  discountLabel: string;
  discount: number;
  total: number;
};

const fmt = (n: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(n);

export default function PaymentSummary({
  paymentMethod,
  subtotal,
  shippingLabel,
  shippingCost,
  discountLabel,
  discount,
  total,
}: PaymentSummaryProps) {
  return (
    <div
      className="flex h-full flex-col rounded-2xl p-5 space-y-4"
      style={{ background: '#FFF1EE' }}
    >
      {/* Payment method */}
      <div>
        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          Metode Pembayaran
        </p>
        <div className="flex items-center gap-2">
          <Wallet className="h-4 w-4 text-[#D91E18]" />
          <span className="text-sm font-bold text-slate-800">
            {paymentMethod}
          </span>
        </div>
      </div>

      {/* Cost rows */}
      <div className="space-y-2 text-sm">
        <div className="flex items-center justify-between text-slate-600">
          <span>Subtotal</span>
          <span className="font-semibold">{fmt(subtotal)}</span>
        </div>

        <div className="flex items-center justify-between text-slate-600">
          <span>{shippingLabel}</span>
          {shippingCost === null ? (
            <span className="font-bold text-emerald-600">Gratis (VIP)</span>
          ) : (
            <span className="font-semibold">{fmt(shippingCost)}</span>
          )}
        </div>

        <div className="flex items-center justify-between text-slate-600">
          <span>{discountLabel}</span>
          <span className="font-bold text-[#D91E18]">-{fmt(discount)}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-red-200" />

      {/* Total */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-slate-800">Total Bayar</span>
        <span className="text-xl font-extrabold text-[#D91E18]">
          {fmt(total)}
        </span>
      </div>

      {/* CTA buttons */}
      <div className="space-y-2 pt-1">
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#D91E18] py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-red-700 active:scale-95">
          <MapPin className="h-4 w-4" />
          Lacak Pesanan Realtime
        </button>
        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50 active:scale-95">
          <ClipboardList className="h-4 w-4" />
          Rincian Pesanan
        </button>
      </div>
    </div>
  );
}
