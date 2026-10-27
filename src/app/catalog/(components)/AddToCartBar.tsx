import QuantityStepper from '@/app/merchant/detail/(components)/QuantityStepper';
import { ShoppingCart } from 'lucide-react';
import { rp } from '../(container)/data';

interface Props {
  qty: number;
  totalPrice: number;
  soldOut?: boolean;
  onQtyChange: (qty: number) => void;
  onAddToCart: () => void;
}

export default function AddToCartBar({
  qty,
  totalPrice,
  soldOut,
  onQtyChange,
  onAddToCart,
}: Props) {
  return (
    <div className="sticky bottom-0 z-40 rounded-2xl bg-white p-4 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-slate-700">
            Kuantitas:
          </span>
          <QuantityStepper
            qty={qty}
            onChange={(n) => onQtyChange(Math.max(1, n))}
          />
        </div>
        <button
          type="button"
          disabled={!!soldOut}
          onClick={onAddToCart}
          className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-extrabold transition ${
            soldOut
              ? 'cursor-not-allowed bg-slate-200 text-slate-400'
              : 'bg-[#D91E18] text-white hover:bg-red-700 active:scale-95'
          }`}
        >
          <ShoppingCart size={16} />
          {soldOut ? 'Stok Habis' : `Tambah ke Keranjang • ${rp(totalPrice)}`}
        </button>
      </div>
    </div>
  );
}
