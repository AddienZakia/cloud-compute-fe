export type DeliveryStatus = 'SELESAI' | 'DIBATALKAN';

export type HistoryFilterTab = 'ALL' | 'COMPLETED' | 'CANCELLED';

export interface DeliveryHistoryItem {
  id: string;
  time: string;
  restaurantName: string;
  customerName: string;
  customerLocation: string;
  status: DeliveryStatus;
  rating: number | null;
  tip: number | null;
  earning: number;
  earningNote: string;
  monthKey: string;
}

export interface DeliveryHistoryFilterState {
  activeTab: HistoryFilterTab;
  searchQuery: string;
  selectedMonth: string;
  currentPage: number;
}

export interface HistoryPaginationProps {
  currentPage: number;
  totalPages: number;
  totalMonthItems: number;
  paginatedCount: number;
  totalFiltered: number;
  onPageChange: (page: number) => void;
}
