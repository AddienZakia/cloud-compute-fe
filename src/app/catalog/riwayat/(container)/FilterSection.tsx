'use client';

import OrderFilters from '../(components)/OrderFilters';
import OrderTabs from '../(components)/OrderTabs';
import { type OrderTab, tabsConfig } from './data';

type FilterSectionProps = {
  onTabChange: (tab: OrderTab) => void;
  onSearchChange: (val: string) => void;
  activeTab: OrderTab;
  searchValue: string;
};

export default function FilterSection({
  onTabChange,
  onSearchChange,
  activeTab,
  searchValue,
}: FilterSectionProps) {
  return (
    <div className="mb-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <OrderTabs
        tabs={tabsConfig}
        activeTab={activeTab}
        onTabChange={onTabChange}
      />
      <OrderFilters searchValue={searchValue} onSearchChange={onSearchChange} />
    </div>
  );
}
