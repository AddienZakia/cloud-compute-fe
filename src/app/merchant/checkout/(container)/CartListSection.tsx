import { ROUTES } from '@/lib/routes';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import CartItemCard from '../(components)/CartItemCard';
import StoreBanner from '../(components)/StoreBanner';
import { CheckoutItem } from '../(container)/data';

interface Props {
  items: CheckoutItem[];
  onQtyChange: (id: number, qty: number) => void;
  onRemove: (id: number) => void;
}

export default function CartListSection({
  items,
  onQtyChange,
  onRemove,
}: Props) {
  return (
    <section className="space-y-4">
      <StoreBanner />
      {items.length === 0 ? (
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-rose-200 bg-white py-16 text-center shadow-sm">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-rose-50 text-[#D91E18]">
            <ShoppingBag size={28} />
          </div>
          <div>
            <p className="font-extrabold text-slate-800">
              Keranjangmu masih kosong
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Yuk tambahkan menu favoritmu dari resto!
            </p>
          </div>
          <Link
            href={ROUTES.merchantDetail}
            className="rounded-xl bg-[#D91E18] px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-red-200 hover:bg-red-700"
          >
            Pilih Menu Sekarang
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <CartItemCard
              key={item.id}
              item={item}
              onQtyChange={onQtyChange}
              onRemove={onRemove}
            />
          ))}
        </div>
      )}
    </section>
  );
}
