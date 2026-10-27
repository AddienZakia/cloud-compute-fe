'use client';

import { cn } from '@/lib/utils';
import { QueueTabFilter, useQueueContext } from '../(container)/QueueContext';
import CountPill from './CountPill';

type TabItem = {
  id: QueueTabFilter;
  label: string;
  getCount: (counts: {
    all: number;
    pending: number;
    preparing: number;
    pickup: number;
  }) => number | string;
};

const TABS: TabItem[] = [
  {
    id: 'ALL',
    label: 'Semua Antrean Aktif',
    getCount: (c) => c.all,
  },
  {
    id: 'PENDING',
    label: 'Pesanan Baru (PENDING)',
    getCount: (c) => (c.pending > 0 ? `${c.pending} Baru` : c.pending),
  },
  {
    id: 'PREPARING',
    label: 'Sedang Dimasak (PREPARING)',
    getCount: (c) => c.preparing,
  },
  {
    id: 'READY_FOR_PICKUP',
    label: 'Siap Diambil Driver (PICKUP)',
    getCount: (c) => c.pickup,
  },
];

export default function FilterTabs() {
  const { activeTab, setActiveTab, counts } = useQueueContext();

  return (
    <div
      role="group"
      aria-label="Filter status antrean pesanan"
      className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none"
    >
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        const count = tab.getCount(counts);

        return (
          <button
            key={tab.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer border',
              isActive
                ? 'bg-danger-main text-neutral-10 border-danger-main shadow-xs'
                : 'bg-neutral-10 text-neutral-80 border-neutral-30 hover:bg-neutral-20 hover:border-neutral-40',
            )}
          >
            <span>{tab.label}</span>
            <CountPill count={count} variant="tab" isActiveTab={isActive} />
          </button>
        );
      })}
    </div>
  );
}
