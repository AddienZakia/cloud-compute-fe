import { MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { DELIVERY_ADDRESS } from '../(container)/data';

export default function DeliveryCard() {
  return (
    <div className="rounded-2xl border border-rose-100 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-extrabold text-slate-900">
          Tujuan Pengiriman
        </p>
        <Link
          href="#"
          className="text-xs font-bold text-[#D91E18] hover:underline"
        >
          Ubah Lokasi
        </Link>
      </div>

      <div className="relative h-[120px] overflow-hidden rounded-xl bg-slate-200">
        <Image
          src={DELIVERY_ADDRESS.mapImage}
          alt="Peta lokasi pengiriman"
          fill
          sizes="400px"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute bottom-2 left-2">
          <span className="flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold text-slate-800 shadow">
            <MapPin size={10} className="text-[#D91E18]" />
            {DELIVERY_ADDRESS.label}
          </span>
        </div>
      </div>

      <p className="mt-3 flex items-start gap-1.5 text-xs text-slate-500">
        <MapPin size={13} className="mt-0.5 shrink-0 text-[#D91E18]" />
        {DELIVERY_ADDRESS.full}
      </p>
    </div>
  );
}
