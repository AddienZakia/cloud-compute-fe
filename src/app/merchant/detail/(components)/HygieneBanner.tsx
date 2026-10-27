import { ShieldCheck } from 'lucide-react';

export default function HygieneBanner({ licenseNo }: { licenseNo: string }) {
  return (
    <div className="flex flex-col items-start justify-between gap-3 rounded-2xl border border-rose-100 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
      <div className="flex items-center gap-4">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-red-50 text-[#D91E18]">
          <ShieldCheck size={22} />
        </div>
        <div>
          <p className="text-sm font-extrabold text-slate-900">
            Restoran Bersertifikat Higienis & Halal
          </p>
          <p className="text-xs text-slate-500">
            Dipantau secara berkala melalui standar operasional Bungkusin Food
            Safety Hub.
          </p>
        </div>
      </div>
      <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-[11px] font-semibold text-slate-500">
        No. Izin: {licenseNo}
      </span>
    </div>
  );
}
