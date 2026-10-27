'use client';

import { useGetAllOrders } from '@/hooks/order';
import { useMemo, useState } from 'react';
import OrderHistoryItem from '../(components)/OrderHistoryItem';
import Pagination from '../(components)/Pagination';
import FilterSection from './FilterSection';
import { HistoryOrder, type OrderTab, orderHistory } from './data';

const ITEMS_PER_PAGE = 4;

export default function OrderHistorySection() {
  const [activeTab, setActiveTab] = useState<OrderTab>('semua');
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const { orders: apiOrders } = useGetAllOrders({ take: 30, sort: 'desc' });

  const convertedOrders: HistoryOrder[] = useMemo(() => {
    if (apiOrders && apiOrders.length > 0) {
      return apiOrders.map((o) => {
        const isCancelled = o.status === 'cancelled';
        const total =
          o.transaction?.grossAmount ||
          (o.orderItems || []).reduce(
            (acc, item) => acc + item.priceSnapshot * item.quantity,
            0,
          );

        const summary = (o.orderItems || [])
          .map((i) => `${i.quantity}x ${i.catalog?.title || 'Menu'}`)
          .join(', ');

        return {
          id: `#BKS-${o.id.slice(0, 8).toUpperCase()}`,
          status: isCancelled ? 'CANCELLED' : 'COMPLETED',
          orderedAt: new Date(o.createdAt).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          }),
          merchantName: o.merchant?.title || 'Resto Mitra',
          itemSummary: summary || 'Paket Makanan',
          totalAmount: total,
          paymentMethod: 'GoPay / Auto-debit',
          imageUrl:
            o.merchant?.imageUrl ||
            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80',
          cancelReason: isCancelled
            ? 'Dibatalkan oleh sistem atau pelanggan'
            : undefined,
          isRefunded: isCancelled,
        };
      });
    }
    return orderHistory;
  }, [apiOrders]);

  // Filter by tab
  const tabFiltered = convertedOrders.filter((order) => {
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
      <FilterSection
        activeTab={activeTab}
        searchValue={searchValue}
        onTabChange={handleTabChange}
        onSearchChange={handleSearchChange}
      />

      <div className="flex flex-col gap-3">
        {paged.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-white py-12 text-center text-sm text-slate-400">
            Tidak ada riwayat pesanan yang cocok dengan filter.
          </div>
        ) : (
          paged.map((order) => (
            <OrderHistoryItem
              key={order.id}
              order={order}
              onReorder={() => {
                //
              }}
            />
          ))
        )}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
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
