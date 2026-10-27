import { ChevronDown, MapPin, Search } from 'lucide-react';

export default function LocationBar() {
  return (
    <div className="mx-auto mt-4 max-w-[1200px] px-6">
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-md sm:flex-row">
        {/* Left: Location */}
        <div className="flex min-w-0 shrink-0 items-center gap-3">
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
            style={{ background: '#FEF2F2' }}
          >
            <MapPin className="h-4.5 w-4.5 text-[#D91E18]" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Lokasi Pengantaran
            </p>
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-800 transition hover:text-[#D91E18]">
              <span className="truncate">
                Jl. Kemang Raya No. 12, Jakarta Selatan
              </span>
              <ChevronDown className="h-3.5 w-3.5 shrink-0" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden h-8 w-px shrink-0 bg-slate-200 sm:block" />

        {/* Middle: Search */}
        <div className="relative min-w-0 flex-1">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Cari menu favorit, resto terdekat, atau kuliner malam..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-24 text-sm text-slate-700 transition placeholder:text-slate-400 focus:border-red-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-100"
          />
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-mono font-semibold text-slate-400 shadow-sm">
            ⌘K
          </span>
        </div>

        {/* Right: Filter Pills */}
        <div className="flex shrink-0 items-center gap-2">
          <button className="flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700 transition hover:bg-green-100">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Buka Sekarang
          </button>
          <button className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-100">
            Semua Resto
          </button>
        </div>
      </div>
    </div>
  );
}
