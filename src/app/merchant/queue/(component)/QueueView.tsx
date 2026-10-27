'use client';

import { useQueueContext } from '../(container)/QueueContext';
import FilterTabs from './FilterTabs';
import QueueColumn from './QueueColumn';
import QueueHeader from './QueueHeader';

export default function QueueView() {
  const { visibleColumns, orders } = useQueueContext();

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-12">
      <QueueHeader />
      <FilterTabs />

      {/* Grid Kolom Antrean (1 kolom di mobile/tablet, 3 kolom di desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {visibleColumns.map((config) => (
          <QueueColumn key={config.status} config={config} orders={orders} />
        ))}
      </div>
    </div>
  );
}
