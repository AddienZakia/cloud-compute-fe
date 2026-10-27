'use client';

import { useDeliveryHistory } from '../(container)/useDeliveryHistory';
import { HistoryPagination } from './HistoryPagination';
import { HistoryTable } from './HistoryTable';
import { HistoryToolbar } from './HistoryToolbar';

export function HistorySection() {
  const {
    activeTab,
    searchQuery,
    selectedMonth,
    currentPage,
    totalPages,
    allCount,
    completedCount,
    cancelledCount,
    totalFiltered,
    paginatedData,
    handleTabChange,
    handleSearchChange,
    handleMonthChange,
    setCurrentPage,
  } = useDeliveryHistory();

  return (
    <section
      aria-label="Tabel Riwayat Pengantaran"
      className="rounded-2xl border border-driver-border bg-driver-card p-5 shadow-xs space-y-4"
    >
      <HistoryToolbar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        allCount={allCount}
        completedCount={completedCount}
        cancelledCount={cancelledCount}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        selectedMonth={selectedMonth}
        onMonthChange={handleMonthChange}
      />

      <HistoryTable items={paginatedData} />

      <HistoryPagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalMonthItems={allCount}
        paginatedCount={paginatedData.length}
        totalFiltered={totalFiltered}
        onPageChange={setCurrentPage}
      />
    </section>
  );
}
