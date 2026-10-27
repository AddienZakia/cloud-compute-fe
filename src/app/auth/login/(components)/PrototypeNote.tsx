import { Info } from 'lucide-react';

export default function PrototypeNote() {
  return (
    <div className="flex gap-2.5 rounded-xl border border-red-100 bg-white/60 p-3">
      <Info size={15} className="mt-0.5 shrink-0 text-[#D91E18]" />
      <div>
        <p className="text-[11px] font-bold text-slate-800">
          Catatan Prototipe Terdistribusi
        </p>
        <p className="mt-0.5 text-[11px] leading-relaxed text-slate-500">
          Autentikasi disimulasikan untuk pengujian alur antarmuka pengguna.
        </p>
      </div>
    </div>
  );
}
