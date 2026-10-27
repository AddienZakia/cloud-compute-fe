import { notFound } from 'next/navigation';
import FooterSection from '../(container)/FooterSection';
import HeaderSection from '../(container)/HeaderSection';
import MenuDetailLayout from '../(container)/MenuDetailLayout';
import PairingSection from '../(container)/PairingSection';
import TopStripSection from '../(container)/TopStripSection';
import { getMenuDetail, menuDetails } from '../(container)/data';

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return menuDetails.map((m) => ({ id: String(m.id) }));
}

export default async function DetailMenuPage({ params }: Props) {
  const { id } = await params;
  const menu = getMenuDetail(Number(id));
  if (!menu) notFound();

  return (
    <main className="min-h-screen bg-[#FFF7F5]">
      <HeaderSection />
      <TopStripSection menu={menu} />
      <MenuDetailLayout menu={menu} />
      <PairingSection menu={menu} />
      <FooterSection />
    </main>
  );
}
