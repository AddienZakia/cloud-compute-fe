'use client';

import { useGetAllOrders } from '@/hooks/order';
import { useMemo, useState } from 'react';
import { deliveryHistoryData } from '../../_data/delivery-history-data';
import type {
  DeliveryHistoryItem,
  HistoryFilterTab,
} from '../../_schema/history-schema';

const PAGE_SIZE = 10;

export function useDeliveryHistory() {
  const [activeTab, setActiveTab] = useState<HistoryFilterTab>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('2025-10');
  const [currentPage, setCurrentPage] = useState(1);

  const { orders: apiOrders } = useGetAllOrders({ take: 50, sort: 'desc' });

  // Data gabungan live API orders dan data lokal
  const sourceData: DeliveryHistoryItem[] = useMemo(() => {
    if (apiOrders && apiOrders.length > 0) {
      return apiOrders.map((o) => {
        // const _isDone = o.status === 'delivered';
        const isCancel = o.status === 'cancelled';

        return {
          id: `#ORD-${o.id.slice(0, 5).toUpperCase()}`,
          time: new Date(o.createdAt).toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
          }),
          restaurantName: o.merchant?.title || 'Resto Mitra',
          customerName: o.user?.name || 'Pelanggan',
          customerLocation: o.deliveryAddress,
          status: isCancel ? 'DIBATALKAN' : 'SELESAI',
          rating: 5,
          tip: 2000,
          earning: 16000,
          earningNote: 'Ongkir + Tip Digital',
          monthKey: selectedMonth,
        };
      });
    }
    return deliveryHistoryData;
  }, [apiOrders, selectedMonth]);

  // Data bulan terpilih sebagai basis hitungan tab dan footer
  const monthData = useMemo(() => {
    return sourceData.filter((item) => item.monthKey === selectedMonth);
  }, [sourceData, selectedMonth]);

  const allCount = monthData.length;
  const completedCount = monthData.filter((i) => i.status === 'SELESAI').length;
  const cancelledCount = monthData.filter(
    (i) => i.status === 'DIBATALKAN',
  ).length;

  const filteredData = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return monthData.filter((item) => {
      if (activeTab === 'COMPLETED' && item.status !== 'SELESAI') return false;
      if (activeTab === 'CANCELLED' && item.status !== 'DIBATALKAN')
        return false;
      if (!q) return true;
      return (
        item.id.toLowerCase().includes(q) ||
        item.restaurantName.toLowerCase().includes(q)
      );
    });
  }, [monthData, activeTab, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);

  const paginatedData = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE;
    return filteredData.slice(start, start + PAGE_SIZE);
  }, [filteredData, safePage]);

  const handleTabChange = (tab: HistoryFilterTab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };
  const handleMonthChange = (month: string) => {
    setSelectedMonth(month);
    setCurrentPage(1);
  };

  return {
    activeTab,
    searchQuery,
    selectedMonth,
    currentPage: safePage,
    totalPages,
    allCount,
    completedCount,
    cancelledCount,
    totalFiltered: filteredData.length,
    paginatedData,
    handleTabChange,
    handleSearchChange,
    handleMonthChange,
    setCurrentPage,
  };
}
