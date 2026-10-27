'use client';

import { CheckCircle2 } from 'lucide-react';

interface Props {
  visible: boolean;
  message: string;
}

export default function Toast({ visible, message }: Props) {
  return (
    <div
      className={`fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-xl transition-all duration-300 ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <CheckCircle2 size={16} className="text-green-400 shrink-0" />
      {message}
    </div>
  );
}
