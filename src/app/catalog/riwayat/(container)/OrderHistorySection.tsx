'use client';

import { useState } from 'react';
import OrderHistoryItem from '../(components)/OrderHistoryItem';
import Pagination from '../(components)/Pagination';
import FilterSection from './FilterSection';
import { type OrderTab, orderHistory } from './data';

const ITEMS_PER_PAGE = 4;

export default function OrderHistorySection() {
  const [activeTab, setActiveTab] = useState<OrderTab>('semua');
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter by tab
  const tabFiltered = orderHistory.filter((order) => {
    if (activeTab === 'semua') return true;
    if (activeTab === 'berjalan') return false; // active orders shown in ActiveOrderSection
    if (activeTab === 'selesai') return order.status === 'COMPLETED';
    if (activeTab === 'dibatalkan') return order.status === 'CANCELLED';
    return true;
  });

  // Filter by search
  const filtered = tabFiltered.filter((order) => {
    if (!searchValue.trim()) return true;
    const q = searchValue.toLowerCase();
    return (
      order.merchantName.toLowerCase().includes(q) ||
      order.id.toLowerCase().includes(q)
    );
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const paged = filtered.slice(
    (safePage - 1) * ITEMS_PER_PAGE,
    safePage * ITEMS_PER_PAGE,
  );

  const handleTabChange = (tab: OrderTab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearchValue(val);
    setCurrentPage(1);
  };

  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-6">
      {/* Shared filter bar (owns state, passes it down) */}
      <FilterSection
        activeTab={activeTab}
        searchValue={searchValue}
        onTabChange={handleTabChange}
        onSearchChange={handleSearchChange}
      />

      {/* History header row */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2
          className="text-base font-bold text-slate-900"
          style={{ fontFamily: 'var(--font-plusJakarta)' }}
        >
          Riwayat Pesanan Terdahulu
        </h2>
        <span className="text-sm text-slate-400">
          Menampilkan {paged.length} pesanan terbaru dari {filtered.length}{' '}
          catatan
        </span>
      </div>

      {/* List */}
      {paged.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white py-16 text-center shadow-sm">
          <p className="text-base font-bold text-slate-400">
            Tidak ada pesanan ditemukan
          </p>
          <p className="mt-1 text-sm text-slate-300">
            Coba ubah filter atau kata kunci pencarian
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {paged.map((order) => (
            <OrderHistoryItem
              key={order.id}
              order={order}
              onReorder={() => {
                // TODO: Implement reorder functionality.
              }}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="mt-6">
        <Pagination
          currentPage={safePage}
          totalPages={totalPages}
          totalItems={filtered.length}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
}
