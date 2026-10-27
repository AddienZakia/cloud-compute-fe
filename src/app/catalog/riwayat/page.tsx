import ActiveOrderSection from './(container)/ActiveOrderSection';
import FooterSection from './(container)/FooterSection';
import HeaderSection from './(container)/HeaderSection';
import OrderHistorySection from './(container)/OrderHistorySection';
import PageHeaderSection from './(container)/PageHeaderSection';
import StateStoreSection from './(container)/StateStoreSection';

export const metadata = {
  title: 'Riwayat Pesanan – Bungkusin',
  description:
    'Pantau status pesanan aktif dan arsip riwayat kuliner Anda di Bungkusin Food Delivery.',
};

export default function RiwayatPage() {
  return (
    <main
      className="min-h-screen"
      style={{
        background:
          'linear-gradient(180deg, #FFE8E5 0%, #FFF7F5 120px) no-repeat, #FFF7F5',
        fontFamily: 'var(--font-plusJakarta)',
      }}
    >
      <HeaderSection />
      <PageHeaderSection />
      <ActiveOrderSection />
      <OrderHistorySection />
      <StateStoreSection />
      <FooterSection />
    </main>
  );
}
