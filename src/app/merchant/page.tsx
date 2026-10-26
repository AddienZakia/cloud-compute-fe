import StatCardsGrid from './(component)/StatCardsGrid';

export default function MerchantDashboardPage() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        {/* Kolom utama (kiri) */}
        <section className="xl:col-span-8 space-y-6">
          <StatCardsGrid />
        </section>

        {/* Kolom samping (kanan) */}
        <aside className="xl:col-span-4 space-y-6">
          {/* Slot untuk Aksi Cepat Restoran & Menu Terlaris di tahap berikutnya */}
        </aside>
      </div>
    </div>
  );
}
