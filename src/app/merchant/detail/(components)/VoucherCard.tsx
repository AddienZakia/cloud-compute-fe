'use client';

import { Percent } from 'lucide-react';
import { useState } from 'react';

interface Props {
  code: string;
  title: string;
  hint: string;
}

export default function VoucherCard({ code, title, hint }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy voucher code:', error);
    }
  };

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50 to-orange-100 p-4 shadow-sm">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange-500 text-white">
        <Percent size={20} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center gap-1.5">
          <span className="rounded bg-orange-500 px-1.5 py-0.5 text-[8px] font-bold text-white">
            VOUCHER RESTO
          </span>
          <span className="text-[10px] font-bold text-orange-700">{code}</span>
        </div>
        <p className="text-sm font-extrabold leading-snug text-slate-900">
          {title}
        </p>
        <p className="text-[10px] text-slate-500">{hint}</p>
      </div>
      <button
        type="button"
        onClick={copy}
        className="shrink-0 rounded-lg bg-white px-4 py-2 text-xs font-bold text-slate-800 shadow-sm hover:bg-orange-50"
      >
        {copied ? 'Tersalin' : 'Salin'}
      </button>
    </div>
  );
}
