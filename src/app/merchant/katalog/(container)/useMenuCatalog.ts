'use client';

import { useEditCatalog, useGetAllCatalogs } from '@/hooks/catalog';
import { useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';
import { MenuItem, menuItems } from '../_data/menu-items';
import { useMenuFilter } from './useMenuFilter';
import { useMenuSelection } from './useMenuSelection';

const PAGE_SIZE = 6;

export function useMenuCatalog() {
  const { catalogs: apiCatalogs } = useGetAllCatalogs({
    take: 50,
    sort: 'desc',
    sort_by: 'createdAt',
  });
  const { mutate: editCatalogApi } = useEditCatalog('');

  const [menus, setMenus] = useState<MenuItem[]>(menuItems);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (apiCatalogs && apiCatalogs.length > 0) {
      const converted: MenuItem[] = apiCatalogs.map((cat, idx) => ({
        id: cat.id,
        nama: cat.title,
        deskripsi: `Pilihan hidangan ${cat.category || 'menu'} istimewa dengan bahan baku berkualitas dan cita rasa terbaik.`,
        sku: `SKU-${cat.id.slice(0, 5).toUpperCase()}`,
        kategori: cat.category || 'Paket Nasi & Ayam',
        harga: cat.price,
        margin: 35,
        rating: 4.8,
        jumlahUlasan: 100 + idx * 15,
        status: cat.status ? 'tersedia' : 'habis',
        badge: idx === 0 ? 'FAVORIT' : undefined,
        sisaPorsi: null,
        foto:
          cat.imageUrl ||
          menuItems[idx % menuItems.length]?.foto ||
          '/images/menu/paket-ayam-goreng-kremes.svg',
      }));

      setMenus(converted);
    }
  }, [apiCatalogs]);

  const filter = useMenuFilter(menus);
  const { filteredMenus, search, status, category } = filter;

  const totalPages = Math.max(1, Math.ceil(filteredMenus.length / PAGE_SIZE));
  const startIndex =
    filteredMenus.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const endIndex = Math.min(currentPage * PAGE_SIZE, filteredMenus.length);

  const paginatedMenus = useMemo(() => {
    return filteredMenus.slice(
      (currentPage - 1) * PAGE_SIZE,
      currentPage * PAGE_SIZE,
    );
  }, [filteredMenus, currentPage]);

  const selection = useMenuSelection(paginatedMenus);

  // Ganti filter/search/kategori: reset halaman ke 1 & bersihkan seleksi yang tidak terlihat
  useEffect(() => {
    setCurrentPage(1);
    selection.cleanHiddenSelections(new Set(filteredMenus.map((m) => m.id)));
  }, [search, status, category, filteredMenus]);

  const toggleAvailability = (id: string, newStatus: 'tersedia' | 'habis') => {
    if (id && id.length > 5) {
      editCatalogApi({ id, status: newStatus === 'tersedia' });
    }

    setMenus((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: newStatus,
              jamHabis: item.jamHabis ?? 'pkl 13:40',
            }
          : item,
      ),
    );
    toast.success(`Status menu berhasil diubah menjadi ${newStatus}`);
  };

  return {
    menus,
    ...filter,
    currentPage,
    setCurrentPage,
    totalPages,
    startIndex,
    endIndex,
    totalItems: filteredMenus.length,
    paginatedMenus,
    ...selection,
    toggleAvailability,
  };
}
