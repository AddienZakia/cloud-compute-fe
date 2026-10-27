'use client';

import { useQueueContext } from '../(container)/QueueContext';
import FilterTabs from './FilterTabs';
import QueueColumn from './QueueColumn';
import QueueHeader from './QueueHeader';

export default function QueueView() {
  const { visibleColumns, orders } = useQueueContext();

  return (
    <div className="min-h-full w-full bg-[#fff8f6] pb-12">
      <div className="flex w-full max-w-7xl flex-col gap-7 px-4 pt-6 sm:px-6 lg:px-8">
        <QueueHeader />
        <FilterTabs />

        {/* Grid Kolom Antrean (1 kolom di mobile/tablet, 3 kolom di desktop) */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          {visibleColumns.map((config) => (
            <QueueColumn key={config.status} config={config} orders={orders} />
          ))}
        </div>
      </div>
    </div>
  );
}
