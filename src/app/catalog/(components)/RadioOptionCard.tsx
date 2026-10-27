interface Props {
  id: string;
  label: string;
  desc: string;
  selected: boolean;
  onSelect: (id: string) => void;
}

export default function RadioOptionCard({
  id,
  label,
  desc,
  selected,
  onSelect,
}: Props) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      className={`flex w-full items-center gap-3 rounded-xl border-2 p-3 text-left transition ${
        selected
          ? 'border-[#D91E18] bg-red-50'
          : 'border-slate-200 bg-white hover:border-slate-300'
      }`}
    >
      <span
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${
          selected ? 'border-[#D91E18]' : 'border-slate-300'
        }`}
      >
        {selected && <span className="h-2 w-2 rounded-full bg-[#D91E18]" />}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-bold text-slate-900">{label}</span>
        <span className="block text-[11px] text-slate-500">{desc}</span>
      </span>
    </button>
  );
}
