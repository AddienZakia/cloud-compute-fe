interface Props {
  icon: string;
  title: string;
  sub: string;
}

export default function FeatureBadge({ icon, title, sub }: Props) {
  return (
    <div className="flex flex-1 flex-col items-center gap-2 rounded-2xl border border-rose-100 bg-white p-4 text-center shadow-sm">
      <div className="grid h-10 w-10 place-items-center rounded-full bg-red-50 text-xl">
        {icon}
      </div>
      <p className="text-xs font-extrabold text-slate-900">{title}</p>
      <p className="text-[10px] leading-snug text-slate-500">{sub}</p>
    </div>
  );
}
