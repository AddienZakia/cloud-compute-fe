'use client';

import { useState } from 'react';
import { MenuItem } from '../_data/menu-items';

export function useMenuSelection(paginatedMenus: MenuItem[]) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

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

  const cleanHiddenSelections = (visibleIds: Set<string>) => {
    setSelectedIds((prev) => prev.filter((id) => visibleIds.has(id)));
  };

  return {
    selectedIds,
    isAllPageSelected,
    isSomePageSelected,
    toggleSelect,
    toggleSelectAllPage,
    cleanHiddenSelections,
  };
}
