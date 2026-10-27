import { CheckCircle2, Tag } from 'lucide-react';
import { COUPON_CODE } from '../(container)/data';

interface Props {
  active: boolean;
  onRemove: () => void;
}

export default function CouponCard({ active, onRemove }: Props) {
  return (
    <div className="rounded-2xl border border-rose-100 bg-white p-5 shadow-sm">
      <p className="mb-3 text-sm font-extrabold text-slate-900">
        Kupon &amp; Promo Hemat
      </p>
      {active ? (
        <>
          <div className="flex items-center justify-between rounded-xl bg-[#FFF1EE] px-3 py-2.5">
            <div className="flex items-center gap-2">
              <Tag size={14} className="text-[#D91E18]" />
              <span className="text-sm font-extrabold text-slate-900">
                {COUPON_CODE}
              </span>
            </div>
            <button
              type="button"
              onClick={onRemove}
              className="text-xs font-bold text-[#D91E18] hover:underline"
            >
              Hapus
            </button>
          </div>
          <p className="mt-2.5 flex items-center gap-1.5 text-[11px] font-semibold text-green-600">
            <CheckCircle2 size={13} />
            Promo &quot;{COUPON_CODE}&quot; terpasang! Hemat Rp 15.000
          </p>
        </>
      ) : (
        <div className="rounded-xl bg-slate-50 px-3 py-2.5 text-[11px] text-slate-400">
          Belum ada kupon terpasang
        </div>
      )}
    </div>
  );
}
