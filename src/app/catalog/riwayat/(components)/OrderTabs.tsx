import type { OrderTab, TabConfig } from '../(container)/data';

type OrderTabsProps = {
  tabs: TabConfig[];
  activeTab: OrderTab;
  onTabChange: (tab: OrderTab) => void;
};

export default function OrderTabs({
  tabs,
  activeTab,
  onTabChange,
}: OrderTabsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        const showDot = tab.id === 'berjalan';

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 active:scale-95 ${
              isActive
                ? 'border-[#D91E18] bg-[#D91E18] text-white shadow-md'
                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            {showDot && !isActive && (
              <span className="h-2 w-2 rounded-full bg-orange-400" />
            )}
            <span>{tab.label}</span>
            <span
              className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                isActive
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-100 text-slate-500'
              }`}
            >
              {tab.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
