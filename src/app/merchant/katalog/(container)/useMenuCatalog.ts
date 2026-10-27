'use client';

import { useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';
import { MenuItem, menuItems } from '../_data/menu-items';
import { useMenuFilter } from './useMenuFilter';
import { useMenuSelection } from './useMenuSelection';

const PAGE_SIZE = 6;

export function useMenuCatalog() {
  const [menus, setMenus] = useState<MenuItem[]>(menuItems);
  const [currentPage, setCurrentPage] = useState(1);

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
