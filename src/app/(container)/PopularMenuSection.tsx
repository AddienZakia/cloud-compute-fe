'use client';

import { useGetAllCatalogs } from '@/hooks/catalog';
import { Flame, UtensilsCrossed } from 'lucide-react';
import MenuCard from '../(components)/MenuCard';
import SectionHeader from '../(components)/SectionHeader';
import { useCart } from './CartProvider';

export default function PopularMenuSection() {
  const { addToCart } = useCart();
  const { catalogs, isLoading } = useGetAllCatalogs({
    take: 8,
    sort: 'desc',
    sort_by: 'createdAt',
  });

  const displayItems =
    catalogs?.map((cat) => ({
      id: cat.id,
      name: cat.title,
      merchantName: cat.merchant?.title || 'Dapur Mitra Terverifikasi',
      category: cat.category || 'Makanan',
      price: cat.price,
      imageUrl:
        cat.imageUrl ||
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80',
      description: `${cat.category || 'Menu'} istimewa olahan dapur ${cat.merchant?.title || 'mitra'}. Siap saji & higienis.`,
      badge: 'TERLARIS',
      badgeVariant: 'red' as const,
      likePercent: 98,
    })) || [];

  return (
    <section className="mx-auto mt-10 max-w-[1200px] px-6">
      <SectionHeader
        title="Menu Terlaris Hari Ini"
        subtitle={
          isLoading
            ? 'Memuat menu terlaris terkini...'
            : 'Paling sering dipesan dalam 24 jam terakhir'
        }
        accentColor="#F97316"
        rightSlot={
          <div className="flex items-center gap-1.5 rounded-full bg-red-50 px-3.5 py-1.5 text-xs font-bold text-[#D91E18]">
            <Flame className="h-3.5 w-3.5" />
            Pesanan Aktif Meningkat
          </div>
        }
      />

      {isLoading ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div
              key={idx}
              className="h-72 animate-pulse rounded-2xl bg-slate-100"
            />
          ))}
        </div>
      ) : displayItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {displayItems.map((item) => (
            <MenuCard key={item.id} item={item} onAddToCart={addToCart} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center">
          <UtensilsCrossed className="mb-2 h-8 w-8 text-slate-300" />
          <p className="text-sm font-semibold text-slate-600">
            Belum ada menu yang tersedia dari backend.
          </p>
        </div>
      )}
    </section>
  );
}
