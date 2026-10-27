'use client';

import { Info, NotepadText } from 'lucide-react';

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export default function OrderNoteBox({ value, onChange }: Props) {
  return (
    <div className="rounded-2xl border border-rose-100 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-rose-50 text-[#D91E18]">
            <NotepadText size={16} />
          </div>
          <p className="text-sm font-extrabold text-slate-900">
            Catatan Khusus untuk Merchant &amp; Driver
          </p>
        </div>
        <span className="text-[11px] text-slate-400">
          Opsional (Maks. 200 karakter)
        </span>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={200}
        rows={3}
        placeholder="Catatan umum untuk merchant... Contoh: Mohon bungkus rapi anti tumpah, sendok plastik 3 set, jangan dibunyikan klakson saat sampai rumah."
        className="w-full resize-none rounded-xl bg-[#FFF1EE] px-4 py-3 text-xs leading-relaxed text-slate-700 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-rose-200"
      />
      <p className="mt-2 flex items-center gap-1.5 text-[10px] text-slate-400">
        <Info size={11} />
        Catatan ini otomatis diteruskan ke sistem Kitchen Display &amp; aplikasi
        Driver.
      </p>
    </div>
  );
}
