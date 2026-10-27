'use client';

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
    // filteredMenus disiapkan untuk tahap 3 (tabel)
  } = useMenuFilter();

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

      {/* Tahap 3: Tabel menu akan dirender di sini menggunakan filteredMenus */}
    </div>
  );
}
