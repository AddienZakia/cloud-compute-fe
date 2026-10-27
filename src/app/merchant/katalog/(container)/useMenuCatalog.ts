'use client';

import { useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';
import { MenuItem, menuItems } from '../_data/menu-items';
import { useMenuFilter } from './useMenuFilter';

const PAGE_SIZE = 6;

export function useMenuCatalog() {
  const [menus, setMenus] = useState<MenuItem[]>(menuItems);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // Panggil useMenuFilter tanpa duplikasi logika
  const filter = useMenuFilter(menus);
  const { filteredMenus, search, status, category } = filter;

  // Ganti filter/search/kategori: reset halaman ke 1 & bersihkan seleksi yang tidak terlihat
  useEffect(() => {
    setCurrentPage(1);
    const visibleIds = new Set(filteredMenus.map((m) => m.id));
    setSelectedIds((prev) => prev.filter((id) => visibleIds.has(id)));
  }, [search, status, category, filteredMenus]);

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

  const isAllPageSelected =
    paginatedMenus.length > 0 &&
    paginatedMenus.every((m) => selectedIds.includes(m.id));
  const isSomePageSelected =
    paginatedMenus.some((m) => selectedIds.includes(m.id)) &&
    !isAllPageSelected;

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const toggleSelectAllPage = () => {
    const pageIds = paginatedMenus.map((m) => m.id);
    if (isAllPageSelected) {
      setSelectedIds((prev) => prev.filter((id) => !pageIds.includes(id)));
    } else {
      setSelectedIds((prev) => Array.from(new Set([...prev, ...pageIds])));
    }
  };

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
    selectedIds,
    isAllPageSelected,
    isSomePageSelected,
    toggleSelect,
    toggleSelectAllPage,
    toggleAvailability,
  };
}
