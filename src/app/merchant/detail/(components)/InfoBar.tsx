import { CalendarDays, Clock, MapPin, Navigation, Star } from 'lucide-react';
import { Merchant } from '../(container)/data';

export default function InfoBar({ merchant }: { merchant: Merchant }) {
  return (
    <div className="space-y-3 rounded-2xl border border-rose-100 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
        <span className="flex items-center gap-1.5">
          <Star size={15} className="fill-amber-400 text-amber-400" />
          <b className="text-base text-slate-900">{merchant.rating}</b>{' '}
          {merchant.ratingCount}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock size={14} className="text-orange-500" />
          <b className="text-slate-900">{merchant.eta}</b> estimasi
        </span>
        <span className="flex items-center gap-1.5">
          <Navigation size={14} className="text-[#D91E18]" />
          <b className="text-slate-900">{merchant.distance}</b> dari lokasi
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-100 pt-3 text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5">
          <CalendarDays size={13} /> {merchant.hours}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin size={13} /> {merchant.address}
        </span>
      </div>
    </div>
  );
}
