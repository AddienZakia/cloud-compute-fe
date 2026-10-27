import StatCardsGrid from './(component)/StatCardsGrid';
import MerchantRightColumn from './(container)/MerchantRightColumn';
import RecentOrdersContainer from './(container)/RecentOrdersContainer';
import SalesChartContainer from './(container)/SalesChartContainer';

export default function MerchantDashboardPage() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-12">
        {/* Kolom utama (kiri) */}
        <div className="space-y-6 xl:col-span-8">
          <StatCardsGrid />
          <RecentOrdersContainer />
          <SalesChartContainer />
        </div>

        {/* Kolom samping (kanan) */}
        <aside className="space-y-6 xl:col-span-4">
          <MerchantRightColumn />
        </aside>
      </div>
    </div>
  );
}
