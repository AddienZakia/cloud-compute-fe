'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import KatalogTable from '../(component)/KatalogTable';
import KatalogToolbar from '../(component)/KatalogToolbar';
import { useMenuFilter } from './useMenuFilter';

export default function KatalogContentContainer() {
  const {
    search,
    setSearch,
    status,
    setStatus,
    category,
    setCategory,
    categoryCounts,
    statusCounts,
    filteredMenus,
  } = useMenuFilter();

  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [items, setItems] = useState(filteredMenus);

  // Perbarui items jika filteredMenus berubah
  const displayedItems = filteredMenus.map((fm) => {
    const override = items.find((it) => it.id === fm.id);
    return override ? { ...fm, status: override.status } : fm;
  });

  const handleToggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleToggleAll = () => {
    const allIds = displayedItems.map((m) => m.id);
    const isAll =
      allIds.length > 0 && allIds.every((id) => selectedIds.includes(id));
    setSelectedIds(isAll ? [] : allIds);
  };

  const handleToggleAvailability = (
    id: string,
    newStatus: 'tersedia' | 'habis',
  ) => {
    setItems((prev) => {
      const exists = prev.some((it) => it.id === id);
      if (exists) {
        return prev.map((it) =>
          it.id === id ? { ...it, status: newStatus } : it,
        );
      }
      return [
        ...prev,
        { ...filteredMenus.find((m) => m.id === id)!, status: newStatus },
      ];
    });
    toast.success(`Status menu berhasil diubah menjadi ${newStatus}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <KatalogToolbar
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
        statusCounts={statusCounts}
        selectedCategory={category}
        onCategoryChange={setCategory}
        categoryCounts={categoryCounts}
      />

      <KatalogTable
        items={displayedItems}
        selectedIds={selectedIds}
        onToggleSelect={handleToggleSelect}
        onToggleAll={handleToggleAll}
        onToggleAvailability={handleToggleAvailability}
      />
    </div>
  );
}
