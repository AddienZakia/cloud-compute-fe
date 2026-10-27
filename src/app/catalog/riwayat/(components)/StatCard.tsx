import type { ReactNode } from 'react';

type StatCardProps = {
  label: string;
  value: string;
  icon: ReactNode;
  iconBg: string; // tailwind bg color class like 'bg-red-100'
};

export default function StatCard({
  label,
  value,
  icon,
  iconBg,
}: StatCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-sm">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconBg}`}
      >
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
          {label}
        </p>
        <p className="text-base font-extrabold text-slate-900">{value}</p>
      </div>
    </div>
  );
}
