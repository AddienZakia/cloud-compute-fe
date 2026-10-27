import { Zap } from 'lucide-react';
import Image from 'next/image';

export default function TelemetryCard() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md">
      <div className="relative h-44 w-full bg-slate-200">
        <Image
          src="https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80"
          alt="Kurir makanan menyerahkan pesanan"
          fill
          sizes="(max-width:768px) 100vw, 40vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
          <Zap size={13} className="text-yellow-300 fill-yellow-300" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-white">
            Sinkronisasi Sub-Detik
          </span>
        </div>
      </div>
      <div className="bg-[#FFF1EE] px-3 py-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-extrabold uppercase tracking-wide text-[#D91E18]">
            Live Stream Telemetry
          </span>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange-400" />
            </span>
            <span className="text-[10px] font-bold text-orange-500">
              ACK: 2ms
            </span>
          </div>
        </div>
        <p className="mt-1.5 font-mono text-[10px] leading-relaxed text-slate-600">
          {'> emit '}
          <span className="font-bold text-slate-900">
            [UserAuthenticatedEvent]
          </span>
          {' payload: role_hash_sha256'}
        </p>
      </div>
    </div>
  );
}
