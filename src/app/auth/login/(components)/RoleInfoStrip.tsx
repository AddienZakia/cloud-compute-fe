import { IdCard } from 'lucide-react';

interface Props {
  text: string;
}

export default function RoleInfoStrip({ text }: Props) {
  return (
    <div className="flex items-start gap-2 rounded-xl bg-[#FFF1EE] px-3 py-2.5">
      <IdCard size={14} className="mt-0.5 shrink-0 text-amber-700" />
      <p className="text-[11px] leading-relaxed text-amber-800">{text}</p>
    </div>
  );
}
