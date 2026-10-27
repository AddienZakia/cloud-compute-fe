import { Star, Store } from 'lucide-react';
import { Merchant } from '../(container)/data';

export default function InfoBar({ merchant }: { merchant: Merchant }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-rose-100 bg-white px-5 py-3.5 shadow-xs">
      <div className="flex items-center gap-2">
        <Store size={16} className="text-[#D91E18]" />
        <span className="text-sm font-bold text-slate-800">
          {merchant.name}
        </span>
      </div>
      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
        <Star size={14} className="fill-amber-400 text-amber-400" />
        <span>Rating Mitra: {merchant.rating} / 5.0</span>
      </div>
    </div>
  );
}
