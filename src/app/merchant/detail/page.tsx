import FooterSection from './(container)/FooterSection';
import HeaderSection from './(container)/HeaderSection';
import HeroSection from './(container)/HeroSection';
import HygieneSection from './(container)/HygieneSection';
import InfoSection from './(container)/InfoSection';
import MenuCartLayout from './(container)/MenuCartLayout';

export default function DetailPage() {
  return (
    <main className="min-h-screen bg-[#FFF7F5]">
      <HeaderSection />
      <HeroSection />
      <InfoSection />
      <MenuCartLayout />
      <HygieneSection />
      <FooterSection />
    </main>
  );
}
