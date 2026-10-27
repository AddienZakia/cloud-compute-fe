'use client';

import { ArrowUpDown } from 'lucide-react';
import { useMemo, useState } from 'react';
import MenuCategoryTabs from '../(components)/MenuCategoryTabs';
import MenuItemCard from '../(components)/MenuItemCard';
import { MenuCategory, MenuItem, categories, menuItems } from './data';

interface Props {
  onAdd: (item: MenuItem) => void;
}

export default function MenuSection({ onAdd }: Props) {
  const [category, setCategory] = useState<MenuCategory>('Semua Menu');
  const [query, setQuery] = useState('');

  const items = useMemo(
    () =>
      menuItems.filter(
        (m) =>
          (category === 'Semua Menu' || m.category === category) &&
          m.name.toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [category, query],
  );

  return (
    <section className="space-y-5">
      <MenuCategoryTabs
        categories={categories}
        active={category}
        query={query}
        placeholder="Cari menu di Ayam Goreng..."
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
      {items.length === 0 ? (
        <p className="rounded-2xl bg-white p-8 text-center text-sm text-slate-400">
          Menu tidak ditemukan
        </p>
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
