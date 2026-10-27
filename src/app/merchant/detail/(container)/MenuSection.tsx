'use client';

import { useGetAllCatalogs } from '@/hooks/catalog';
import { ArrowUpDown, UtensilsCrossed } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import MenuCategoryTabs from '../(components)/MenuCategoryTabs';
import MenuItemCard from '../(components)/MenuItemCard';
import { MenuItem } from './data';

interface Props {
  onAdd: (item: MenuItem) => void;
}

export default function MenuSection({ onAdd }: Props) {
  const searchParams = useSearchParams();
  const merchantId = searchParams.get('id') || undefined;

  const [category, setCategory] = useState<string>('Semua Menu');
  const [query, setQuery] = useState('');

  const { catalogs: apiCatalogs, isLoading } = useGetAllCatalogs({
    take: 50,
    sort: 'desc',
    sort_by: 'createdAt',
    ...(merchantId ? { merchantId } : {}),
  });

  const availableCategories = useMemo(() => {
    if (!apiCatalogs || apiCatalogs.length === 0) {
      return ['Semua Menu'];
    }
    const cats = Array.from(
      new Set(apiCatalogs.map((c) => c.category).filter(Boolean)),
    );
    return ['Semua Menu', ...cats];
  }, [apiCatalogs]);

  const baseItems: MenuItem[] = useMemo(() => {
    if (!apiCatalogs || apiCatalogs.length === 0) {
      return [];
    }

    return apiCatalogs.map((c, idx) => ({
      id: Number(idx + 1),
      catalogId: c.id,
      name: c.title,
      price: c.price,
      description: `Pilihan hidangan ${c.category || 'menu'} lezat dari dapur kami, higienis, fresh dan nikmat.`,
      image:
        c.imageUrl ||
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80',
      category: c.category || 'Lainnya',
      note: 'Menu Pilihan Mitra',
      noteIcon: 'like' as const,
      defaultOption: 'Porsi Reguler',
      soldOut: !c.status,
    }));
  }, [apiCatalogs]);

  const items = useMemo(
    () =>
      baseItems.filter(
        (m) =>
          (category === 'Semua Menu' || m.category === category) &&
          m.name.toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [baseItems, category, query],
  );

  return (
    <section className="space-y-5">
      <MenuCategoryTabs
        categories={availableCategories}
        active={category}
        query={query}
        placeholder="Cari menu lezat pilihan..."
        onSelect={setCategory}
        onQuery={setQuery}
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="h-5 w-1 rounded bg-[#D91E18]" />
          <h2 className="text-lg font-extrabold text-slate-900">
            Daftar Menu Pilihan
          </h2>
          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold text-slate-500">
            {items.length} Menu Tersedia
          </span>
        </div>
        <span className="flex items-center gap-1.5 text-xs text-slate-500">
          <ArrowUpDown size={13} /> Urutkan: Terlaris
        </span>
      </div>

      {isLoading ? (
        <div className="grid gap-4 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div
              key={idx}
              className="h-32 animate-pulse rounded-2xl bg-white shadow-xs"
            />
          ))}
        </div>
      ) : items.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center text-sm text-slate-400">
          <UtensilsCrossed className="mb-2 h-7 w-7 text-slate-300" />
          <p>Belum ada menu yang cocok atau tersedia di dapur resto ini.</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((m) => (
            <MenuItemCard key={m.id} item={m} onAdd={onAdd} />
          ))}
        </div>
      )}
    </section>
  );
}
