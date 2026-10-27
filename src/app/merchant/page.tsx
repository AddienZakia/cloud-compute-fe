import type { CSSProperties } from 'react';
import StatCardsGrid from './(component)/StatCardsGrid';
import MerchantRightColumn from './(container)/MerchantRightColumn';
import RecentOrdersContainer from './(container)/RecentOrdersContainer';
import SalesChartContainer from './(container)/SalesChartContainer';

export default function MerchantDashboardPage() {
  return (
    <div
      className="font-nunitoSans min-h-full bg-[#fff8f6] p-6 text-[#5b4138]"
      style={
        {
          '--color-merchant-primary': '#b50303',
          '--color-merchant-primary-hover': '#8f0202',
          '--color-merchant-primary-surface': '#fbf2f0',
          '--color-merchant-primary-border': '#f0e5e3',
          '--color-danger-main': '#b50303',
          '--color-danger-hover': '#8f0202',
          '--color-danger-surface': '#fff3f2',
          '--color-danger-border': '#f0c5c0',
          '--color-neutral-20': '#f5ecea',
          '--color-neutral-30': '#eadfdd',
          '--color-neutral-60': '#8a756e',
          '--color-neutral-70': '#715b53',
          '--color-neutral-80': '#5f483f',
          '--color-neutral-100': '#2d211d',
        } as CSSProperties
      }
    >
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        {/* Kolom utama (kiri) */}
        <div className="xl:col-span-8 space-y-6">
          <StatCardsGrid />
          <RecentOrdersContainer />
          <SalesChartContainer />
        </div>

        {/* Kolom samping (kanan) */}
        <aside className="xl:col-span-4 space-y-6">
          <MerchantRightColumn />
        </aside>
      </div>
    </div>
  );
}
