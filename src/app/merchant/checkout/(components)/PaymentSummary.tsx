import { ROUTES } from '@/lib/routes';
import { ChevronRight, HelpCircle, Lock } from 'lucide-react';
import Link from 'next/link';
import { rp } from '../(container)/data';

interface Props {
  itemCount: number;
  subtotal: number;
  delivery: number;
  service: number;
  voucher: number;
  total: number;
  cartEmpty: boolean;
  onCheckout?: () => void;
  isSubmitting?: boolean;
}

function Row({
  label,
  value,
  valueClass = 'font-semibold text-slate-800',
  labelExtra,
}: {
  label: string;
  value: string;
  valueClass?: string;
  labelExtra?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between text-xs text-slate-600">
      <span className="flex items-center gap-1">
        {label}
        {labelExtra}
      </span>
      <span className={valueClass}>{value}</span>
    </div>
  );
}

export default function PaymentSummary({
  itemCount,
  subtotal,
  delivery,
  service,
  voucher,
  total,
  cartEmpty,
  onCheckout,
  isSubmitting,
}: Props) {
  return (
    <div className="rounded-2xl border border-rose-100 bg-white p-5 shadow-sm">
      <p className="mb-4 text-sm font-extrabold text-slate-900">
        Ringkasan Pembayaran
      </p>
      <div className="space-y-2.5">
        <Row
          label={`Subtotal Makanan (${itemCount} item)`}
          value={rp(subtotal)}
        />
        <Row label={`Biaya Pengantaran (1.8 km)`} value={rp(delivery)} />
        <Row
          label="Biaya Layanan & Pengemasan"
          value={rp(service)}
          labelExtra={<HelpCircle size={11} className="text-slate-400" />}
        />
        {voucher > 0 && (
          <Row
            label="Potongan Promo Voucher"
            value={`-${rp(voucher)}`}
            valueClass="font-bold text-green-600"
            labelExtra={null}
          />
        )}
      </div>

      <div className="my-4 border-t border-slate-100" />

      <div className="flex items-end justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Total Pembayaran
          </p>
          <p className="text-2xl font-extrabold text-[#D91E18]">{rp(total)}</p>
        </div>
        <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-500">
          Termasuk PPN
        </span>
      </div>

      <div className="mt-4 space-y-2.5">
        <button
          type="button"
          disabled={cartEmpty || isSubmitting}
          onClick={onCheckout}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#D91E18] py-3.5 text-sm font-bold text-white shadow-md shadow-red-200 transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
        >
          {isSubmitting
            ? 'Memproses Pesanan...'
            : 'Lanjutkan ke Pembayaran (Checkout)'}
          <ChevronRight size={16} />
        </button>
        <Link
          href={ROUTES.merchantDetail}
          className="flex w-full items-center justify-center rounded-xl bg-[#FFF1EE] py-3 text-sm font-bold text-[#D91E18] transition hover:bg-rose-100"
        >
          Tambah Menu Lain dari Resto Ini
        </Link>
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-xl bg-[#FFF1EE] p-3 text-[10px] leading-relaxed text-slate-600">
        <Lock size={12} className="mt-0.5 shrink-0 text-[#D91E18]" />
        <p>
          Pembayaran diamankan secara enkripsi. Order langsung didispatch ke
          sistem dapur <strong>Pak Mul</strong> via Kafka Event Stream setelah
          konfirmasi.
        </p>
      </div>
    </div>
  );
}
