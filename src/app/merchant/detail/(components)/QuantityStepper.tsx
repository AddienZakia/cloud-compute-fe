import { Minus, Plus } from 'lucide-react';

interface Props {
  qty: number;
  onChange: (qty: number) => void;
}

export default function QuantityStepper({ qty, onChange }: Props) {
  return (
    <div className="inline-flex items-center rounded-lg border border-slate-200 bg-white">
      <button
        type="button"
        aria-label="Kurangi"
        onClick={() => onChange(qty - 1)}
        className="grid h-7 w-7 place-items-center text-slate-600 hover:text-[#D91E18]"
      >
        <Minus size={12} />
      </button>
      <span className="w-6 text-center text-xs font-bold text-slate-900">
        {qty}
      </span>
      <button
        type="button"
        aria-label="Tambah"
        onClick={() => onChange(qty + 1)}
        className="grid h-7 w-7 place-items-center text-slate-600 hover:text-[#D91E18]"
      >
        <Plus size={12} />
      </button>
    </div>
  );
}
