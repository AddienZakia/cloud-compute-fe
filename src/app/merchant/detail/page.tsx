import { Suspense } from 'react';
import FooterSection from './(container)/FooterSection';
import HeaderSection from './(container)/HeaderSection';
import HeroSection from './(container)/HeroSection';
import InfoSection from './(container)/InfoSection';
import MenuCartLayout from './(container)/MenuCartLayout';

export default function DetailPage() {
  return (
    <main className="min-h-screen bg-[#FFF7F5]">
      <HeaderSection />
      <Suspense fallback={<div className="h-48 animate-pulse bg-rose-50" />}>
        <HeroSection />
        <InfoSection />
        <MenuCartLayout />
      </Suspense>
      <FooterSection />
    </main>
  );
}
