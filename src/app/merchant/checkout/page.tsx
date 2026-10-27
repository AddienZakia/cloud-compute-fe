import CheckoutLayout from './(container)/CheckoutLayout';
import FooterSection from './(container)/FooterSection';
import HeaderSection from './(container)/HeaderSection';

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#FFF7F5]">
      <HeaderSection />
      <CheckoutLayout />
      <FooterSection />
    </main>
  );
}
