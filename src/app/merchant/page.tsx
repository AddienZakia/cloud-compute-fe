import StatCardsGrid from './(component)/StatCardsGrid';
import MerchantRightColumn from './(container)/MerchantRightColumn';
import RecentOrdersContainer from './(container)/RecentOrdersContainer';
import SalesChartContainer from './(container)/SalesChartContainer';

export default function MerchantDashboardPage() {
  return (
    <div className="p-6">
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
