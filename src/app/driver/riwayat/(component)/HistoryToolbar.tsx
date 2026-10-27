import type { HistoryFilterTab } from '../../_schema/history-schema';
import { HistorySearchFilter } from './HistorySearchFilter';

interface HistoryToolbarProps {
  activeTab: HistoryFilterTab;
  onTabChange: (tab: HistoryFilterTab) => void;
  allCount: number;
  completedCount: number;
  cancelledCount: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedMonth: string;
  onMonthChange: (month: string) => void;
}

export function HistoryToolbar({
  activeTab,
  onTabChange,
  allCount,
  completedCount,
  cancelledCount,
  searchQuery,
  onSearchChange,
  selectedMonth,
  onMonthChange,
}: HistoryToolbarProps) {
  const tabs: { key: HistoryFilterTab; label: string; count: number }[] = [
    { key: 'ALL', label: 'Semua Riwayat', count: allCount },
    { key: 'COMPLETED', label: 'Selesai', count: completedCount },
    {
      key: 'CANCELLED',
      label: 'Dibatalkan Konsumen/Resto',
      count: cancelledCount,
    },
  ];

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div
        role="tablist"
        aria-label="Filter status riwayat"
        className="flex items-center rounded-xl bg-neutral-20 p-1 border border-driver-border/80"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onTabChange(tab.key)}
              className={`rounded-lg px-3 py-1.5 text-xs transition-all ${
                isActive
                  ? 'bg-neutral-10 font-bold text-neutral-100 shadow-xs'
                  : 'font-medium text-neutral-70 hover:text-neutral-90'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          );
        })}
      </div>

      <HistorySearchFilter
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        selectedMonth={selectedMonth}
        onMonthChange={onMonthChange}
      />
    </div>
  );
}
