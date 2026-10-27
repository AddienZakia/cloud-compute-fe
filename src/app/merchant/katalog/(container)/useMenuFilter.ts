'use client';

import { useMemo, useState } from 'react';
import { MenuItem, menuItems } from '../_data/menu-items';

export const CATEGORIES = [
  'Semua Kategori',
  'Paket Nasi & Ayam',
  'Aneka Bebek',
  'Lauk Tambahan',
  'Minuman Segar',
] as const;

export function useMenuFilter() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<string>('all');
  const [category, setCategory] = useState<string>('Semua Kategori');

  // Jumlah dihitung dari seluruh menuItems, bukan filteredMenus
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      'Semua Kategori': menuItems.length,
    };
    for (const cat of CATEGORIES.slice(1)) {
      counts[cat] = menuItems.filter((item) => item.kategori === cat).length;
    }
    return counts;
  }, []);

  const statusCounts = useMemo(
    () => ({
      all: menuItems.length,
      tersedia: menuItems.filter((m) => m.status === 'tersedia').length,
      habis: menuItems.filter((m) => m.status === 'habis').length,
    }),
    [],
  );

  const filteredMenus: MenuItem[] = useMemo(() => {
    return menuItems.filter((item) => {
      const matchSearch =
        search.trim() === '' ||
        item.nama.toLowerCase().includes(search.toLowerCase()) ||
        item.sku.toLowerCase().includes(search.toLowerCase());

      const matchStatus = status === 'all' || item.status === status;

      const matchCategory =
        category === 'Semua Kategori' || item.kategori === category;

      return matchSearch && matchStatus && matchCategory;
    });
  }, [search, status, category]);

  return {
    search,
    setSearch,
    status,
    setStatus,
    category,
    setCategory,
    categoryCounts,
    statusCounts,
    filteredMenus,
  };
}
