import { CartProvider } from './(container)/CartProvider';
import CategorySection from './(container)/CategorySection';
import FooterSection from './(container)/FooterSection';
import HeaderSection from './(container)/HeaderSection';
import HeroSection from './(container)/HeroSection';
import MerchantSection from './(container)/MerchantSection';
import PopularMenuSection from './(container)/PopularMenuSection';

export default function DashboardPage() {
  return (
    <CartProvider>
      <div className="min-h-screen" style={{ backgroundColor: '#FFF7F5' }}>
        <HeaderSection />
        <main className="pb-8">
          <HeroSection />
          <CategorySection />
          <MerchantSection />
          <PopularMenuSection />
        </main>
        <FooterSection />
      </div>
    </CartProvider>
  );
}
