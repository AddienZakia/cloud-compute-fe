import { CartItem, rp } from '../(container)/data';
import QuantityStepper from './QuantityStepper';

interface Props {
  item: CartItem;
  onQtyChange: (id: number, qty: number) => void;
}

export default function CartItemRow({ item, onQtyChange }: Props) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0">
        <p className="text-sm font-bold leading-snug text-slate-900">
          {item.name}
        </p>
        {item.option && (
          <p className="text-[11px] text-slate-400">{item.option}</p>
        )}
        <p className="mt-1 text-sm font-extrabold text-slate-900">
          {rp(item.price * item.qty)}
        </p>
      </div>
      <QuantityStepper
        qty={item.qty}
        onChange={(q) => onQtyChange(item.id, q)}
      />
    </div>
  );
}
