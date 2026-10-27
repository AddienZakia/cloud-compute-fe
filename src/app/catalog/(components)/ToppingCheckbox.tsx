import { rp } from '../(container)/data';

interface Props {
  id: string;
  label: string;
  desc: string;
  extraPrice: number;
  checked: boolean;
  onChange: (id: string, checked: boolean) => void;
}

export default function ToppingCheckbox({
  id,
  label,
  desc,
  extraPrice,
  checked,
  onChange,
}: Props) {
  return (
    <label
      htmlFor={`topping-${id}`}
      className="flex cursor-pointer items-center gap-3 rounded-xl p-3 transition hover:bg-red-100/50"
    >
      <input
        id={`topping-${id}`}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(id, e.target.checked)}
        className="h-4 w-4 shrink-0 accent-[#D91E18] cursor-pointer"
      />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold text-slate-900">{label}</p>
        <p className="text-[11px] text-slate-500">{desc}</p>
      </div>
      <span className="shrink-0 text-xs font-bold text-[#D91E18]">
        +{rp(extraPrice)}
      </span>
    </label>
  );
}
