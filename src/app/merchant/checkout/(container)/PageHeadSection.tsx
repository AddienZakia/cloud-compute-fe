import { ROUTES } from '@/lib/routes';
import { ChevronRight, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

interface Props {
  itemCount: number;
}

export default function PageHeadSection({ itemCount }: Props) {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 pt-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <nav className="flex items-center gap-1.5 text-[11px] text-slate-500">
          <Link href={ROUTES.dashboard} className="hover:text-[#D91E18]">
            Beranda
          </Link>
          <ChevronRight size={11} />
          <Link href={ROUTES.merchantDetail} className="hover:text-[#D91E18]">
            Ayam Goreng Berkah Pak Mul
          </Link>
          <ChevronRight size={11} />
          <span className="font-bold text-slate-800">Keranjang Belanja</span>
        </nav>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1 text-[10px] font-medium text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
          STREAM: cart-partition-04 [sync: 14:38:09 WIB]
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#D91E18]">
          Checkout Pipeline Step 1
        </p>
        <Link
          href={ROUTES.merchantDetail}
          className="flex items-center gap-1 text-xs font-bold text-[#D91E18] hover:underline"
        >
          ← Tambah Menu Lain
        </Link>
      </div>

      <div className="mt-2 flex items-center gap-3">
        <ShoppingCart size={22} className="text-[#D91E18]" />
        <h1 className="text-2xl font-extrabold text-slate-900">
          Keranjang Belanja Kamu{' '}
          <span className="text-[#D91E18]">({itemCount} Item)</span>
        </h1>
      </div>
    </section>
  );
}
