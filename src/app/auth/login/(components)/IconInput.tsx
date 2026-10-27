'use client';

import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

interface Props {
  id: string;
  type?: 'text' | 'email' | 'password';
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  icon: React.ReactNode;
  showToggle?: boolean;
  autoComplete?: string;
}

export default function IconInput({
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
  icon,
  showToggle,
  autoComplete,
}: Props) {
  const [visible, setVisible] = useState(false);
  const inputType = showToggle ? (visible ? 'text' : 'password') : type;

  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3 py-2.5 focus-within:border-[#D91E18] focus-within:ring-2 focus-within:ring-[#D91E18]/20 transition">
      <span className="shrink-0 text-slate-400">{icon}</span>
      <input
        id={id}
        type={inputType}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="min-w-0 flex-1 bg-transparent text-[13px] text-slate-800 outline-none placeholder-slate-300"
      />
      {showToggle && (
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="shrink-0 text-slate-400 hover:text-slate-600 transition"
          aria-label={
            visible ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'
          }
        >
          {visible ? <EyeOff size={15} /> : <Eye size={15} />}
        </button>
      )}
    </div>
  );
}
