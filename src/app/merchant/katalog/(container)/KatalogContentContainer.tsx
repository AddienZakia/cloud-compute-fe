'use client';

import KatalogSummaryGrid from '../(component)/KatalogSummaryGrid';
import KatalogTable from '../(component)/KatalogTable';
import KatalogTableFooter from '../(component)/KatalogTableFooter';
import KatalogToolbar from '../(component)/KatalogToolbar';
import { useMenuCatalog } from './useMenuCatalog';

export default function KatalogContentContainer() {
  const {
    menus,
    search,
    setSearch,
    status,
    setStatus,
    category,
    setCategory,
    categoryCounts,
    statusCounts,
    paginatedMenus,
    selectedIds,
    isAllPageSelected,
    isSomePageSelected,
    toggleSelect,
    toggleSelectAllPage,
    toggleAvailability,
    currentPage,
    setCurrentPage,
    totalPages,
    startIndex,
    endIndex,
    totalItems,
  } = useMenuCatalog();

  const totalAktif = menus.filter((m) => m.status === 'tersedia').length;
  const totalHabis = menus.filter((m) => m.status === 'habis').length;

  return (
    <div className="flex flex-col gap-6">
      {/* 4 Kartu Ringkasan Atas — reaktif terhadap perubahan data menu */}
      <KatalogSummaryGrid items={menus} />

      {/* Toolbar Filter */}
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

      {/* Tabel Menu (6 menu per halaman) */}
      <div className="flex flex-col gap-3">
        <KatalogTable
          items={paginatedMenus}
          selectedIds={selectedIds}
          isAllSelected={isAllPageSelected}
          isSomeSelected={isSomePageSelected}
          onToggleSelect={toggleSelect}
          onToggleAll={toggleSelectAllPage}
          onToggleAvailability={toggleAvailability}
        />

        {/* Footer Tabel: Status Sinkronisasi Kafka + Pagination */}
        <KatalogTableFooter
          totalAktif={totalAktif}
          totalHabis={totalHabis}
          pagination={{
            currentPage,
            totalPages,
            onPageChange: setCurrentPage,
            startIndex,
            endIndex,
            totalItems,
          }}
        />
      </div>
    </div>
  );
}
