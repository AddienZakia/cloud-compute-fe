import { ArrowRight, Clock, MapPin, Ticket, Zap } from 'lucide-react';
import Image from 'next/image';

export default function HeroBanner() {
  return (
    <div className="mx-auto mt-6 max-w-[1200px] px-6">
      <div
        className="relative flex flex-col overflow-hidden rounded-3xl lg:flex-row"
        style={{
          background:
            'linear-gradient(135deg, #7F1D1D 0%, #B91C1C 35%, #EF4444 65%, #F97316 100%)',
        }}
      >
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white opacity-5 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-yellow-300 opacity-10 blur-2xl" />
          <div className="absolute -right-8 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-orange-200 opacity-10 blur-3xl" />
        </div>

        {/* Left Content */}
        <div className="relative z-10 flex flex-1 flex-col justify-center p-8 lg:p-12">
          {/* Tech badge */}
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
            <Zap className="h-3 w-3 text-yellow-300" />
            <span className="text-[11px] font-semibold tracking-wide text-white/90">
              EVENT-DRIVEN LOGISTICS V2.4 • Latency &lt; 180ms
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-3 text-3xl font-extrabold leading-tight text-white lg:text-4xl xl:text-5xl">
            Diskon 40% <span className="text-yellow-300">VOUCHER KILAT</span>
          </h1>

          {/* Description */}
          <p className="mb-7 max-w-md text-sm leading-relaxed text-white/75">
            Kulineran hemat dengan pengantaran cepat via Event-Stream Bungkusin.
            Pantau proses dapur hingga motor driver seketika tanpa jeda.
          </p>

          {/* CTA Buttons */}
          <div className="mb-8 flex flex-wrap gap-3">
            <button
              className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold shadow-lg transition hover:bg-slate-50 hover:shadow-xl active:scale-95"
              style={{ color: '#B91C1C' }}
            >
              <Ticket className="h-4 w-4" />
              Klaim Voucher (BUNGKUSHEMAT)
            </button>
            <button
              className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90 active:scale-95"
              style={{ background: 'rgba(127,29,29,0.6)' }}
            >
              Pesan Sekarang
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Info items */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                <MapPin className="h-3.5 w-3.5 text-white" />
              </div>
              <span className="text-xs font-semibold text-white/85">
                100+ Resto Terverifikasi
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                <Clock className="h-3.5 w-3.5 text-white" />
              </div>
              <span className="text-xs font-semibold text-white/85">
                Estimasi Pengantaran 20 Mnt
              </span>
            </div>
          </div>
        </div>

        {/* Right: Food Card */}
        <div className="relative z-10 flex items-center justify-center p-8 lg:p-10">
          <div className="relative w-full max-w-xs overflow-hidden rounded-2xl shadow-2xl">
            {/* Food image */}
            <div className="relative h-64 w-full">
              <Image
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=400&fit=crop"
                alt="Flash Promo Food"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Live badge */}
            <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-red-600 px-2.5 py-1 text-[11px] font-bold text-white shadow-lg">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              Live Flash Promo
            </div>

            {/* Bottom overlay */}
            <div
              className="absolute inset-x-0 bottom-0 p-4"
              style={{
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
              }}
            >
              <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-orange-300">
                Spesial Hari Ini
              </p>
              <p className="mb-2 text-sm font-bold leading-tight text-white">
                Paket Ayam Berkah Spesial Dapur
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 line-through">
                  Rp 55.000
                </span>
                <span className="text-xl font-extrabold text-white">
                  Rp 33.000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
