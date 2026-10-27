import { Phone } from 'lucide-react';
import Image from 'next/image';

type DriverInfoProps = {
  name: string;
  vehicle: string;
  plate: string;
  imageUrl: string;
};

export default function DriverInfo({
  name,
  vehicle,
  plate,
  imageUrl,
}: DriverInfoProps) {
  return (
    <div
      className="flex items-center gap-3 rounded-xl p-3"
      style={{ background: '#FFF1EE' }}
    >
      {/* Driver photo */}
      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-white shadow">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold text-slate-800">
          {name}{' '}
          <span className="font-semibold text-slate-500">(Driver Motor)</span>
        </p>
        <p className="text-xs text-slate-400">
          {vehicle} • {plate}
        </p>
      </div>

      {/* Call button */}
      <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:bg-red-50 active:scale-95">
        <Phone className="h-4 w-4 text-[#D91E18]" />
      </button>
    </div>
  );
}
