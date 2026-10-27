import FooterSection from '../(container)/FooterSection';
import HeaderSection from '../(container)/HeaderSection';
import MenuDetailLayout from '../(container)/MenuDetailLayout';
import TopStripSection from '../(container)/TopStripSection';
import { MenuDetail, getMenuDetail, menuDetails } from '../(container)/data';

interface Props {
  params: Promise<{ id: string }>;
}

async function fetchCatalogFromApi(id: string) {
  try {
    const apiBase =
      process.env.NEXT_PUBLIC_RUN_MODE === 'development'
        ? process.env.NEXT_PUBLIC_API_URL_DEV || 'http://localhost:5000/api/v1'
        : process.env.NEXT_PUBLIC_API_URL_PROD ||
          'http://localhost:5000/api/v1';

    const res = await fetch(`${apiBase}/catalogs/${id}`, {
      cache: 'no-store',
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data;
  } catch {
    return null;
  }
}

export default async function DetailMenuPage({ params }: Props) {
  const { id } = await params;

  let menu: MenuDetail | undefined;
  const apiCatalog = await fetchCatalogFromApi(id);

  if (apiCatalog) {
    menu = {
      id: Number(id) || 1,
      name: apiCatalog.title,
      price: apiCatalog.price,
      description: `Pilihan menu ${apiCatalog.category || 'hidangan'} lezat dan higienis dari ${apiCatalog.merchant?.title || 'dapur mitra'}.`,
      image:
        apiCatalog.imageUrl ||
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80',
      badges: ['TERSEDIA'],
      satisfaction: 100,
      cookTime: '',
      halalCert: '',
      packaging: '',
      chips: [apiCatalog.category || 'Makanan'],
      review: {
        text: '',
        author: '',
        time: '',
      },
      optionGroups: [],
      soldOut: !apiCatalog.status,
      pairingIds: [],
    };
  } else {
    menu = getMenuDetail(Number(id)) || menuDetails[0];
  }

  return (
    <main className="min-h-screen bg-[#FFF7F5]">
      <HeaderSection />
      <TopStripSection menu={menu} />
      <MenuDetailLayout menu={menu} />
      <FooterSection />
    </main>
  );
}
