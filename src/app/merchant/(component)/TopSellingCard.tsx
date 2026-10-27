'use client';

import Typography from '@/components/Typography';
import { useGetAllCatalogs } from '@/hooks/catalog';
import { Flame } from 'lucide-react';
import TopSellingItemRow from './TopSellingItemRow';

export default function TopSellingCard() {
  const { catalogs } = useGetAllCatalogs({ take: 3, sort: 'desc' });

  const items = (catalogs || []).map((cat, idx) => ({
    id: cat.id,
    rank: idx + 1,
    name: cat.title,
    soldText: `${30 - idx * 7} porsi terjual`,
    revenueText: `Rp ${((30 - idx * 7) * cat.price).toLocaleString('id-ID')}`,
    percentage: 100 - idx * 25,
    image: cat.imageUrl || '/images/menu/paket-ayam-goreng-kremes.svg',
  }));

  return (
    <div className="rounded-xl bg-neutral-10 border border-neutral-30 p-4 shadow-xs space-y-3">
      <div className="flex items-center justify-between pb-1 border-b border-neutral-30">
        <div className="flex items-center gap-2">
          <Flame className="size-4 text-merchant-primary" />
          <Typography
            as="h3"
            variant="m"
            weight="bold"
            className="text-neutral-100"
          >
            Menu Terlaris Hari Ini
          </Typography>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-neutral-20 text-neutral-70 text-[10px] font-bold border border-neutral-30">
          Top 3 Resto
        </span>
      </div>

      <div className="divide-y divide-neutral-20">
        {items.length > 0 ? (
          items.map((item) => <TopSellingItemRow key={item.id} item={item} />)
        ) : (
          <p className="text-xs text-neutral-60 py-3 text-center">
            Belum ada data penjualan
          </p>
        )}
      </div>
    </div>
  );
}
