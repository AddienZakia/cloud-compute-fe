'use client';

import { useGetAllMerchants } from '@/hooks/merchant';
import { ArrowRight, Store } from 'lucide-react';
import MerchantCard from '../(components)/MerchantCard';
import SectionHeader from '../(components)/SectionHeader';

export default function MerchantSection() {
  const { merchants: apiMerchants, isLoading } = useGetAllMerchants({
    take: 8,
    sort: 'desc',
    sort_by: 'createdAt',
  });

  const displayMerchants =
    apiMerchants?.map((m) => ({
      id: m.id,
      name: m.title,
      category: 'Aneka Masakan',
      rating: String(m.rating || '5'),
      address: m.address,
      reviewCount: '100+',
      distance: '1.2 km',
      deliveryTime: '20-30 mnt',
      priceRange: '15rb - 45rb',
      imageUrl:
        m.imageUrl ||
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80',
      isOpen: m.status ?? true,
      openTime: '08:00',
    })) || [];

  return (
    <section className="mx-auto mt-10 max-w-[1200px] px-6">
      <SectionHeader
        title="Merchant Unggulan Sekitarmu"
        subtitle={
          isLoading
            ? 'Memuat data resto mitra...'
            : 'Dapur pilihan dengan rating tinggi dan servis super cepat'
        }
        accentColor="#D91E18"
        rightSlot={
          <a
            href="#"
            className="flex items-center gap-1 text-sm font-semibold text-[#D91E18] transition hover:underline"
          >
            Lihat Semua Resto
            <ArrowRight className="h-4 w-4" />
          </a>
        }
      />

      {isLoading ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div
              key={idx}
              className="h-64 animate-pulse rounded-2xl bg-slate-100"
            />
          ))}
        </div>
      ) : displayMerchants.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {displayMerchants.map((merchant) => (
            <MerchantCard key={merchant.id} merchant={merchant} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center">
          <Store className="mb-2 h-8 w-8 text-slate-300" />
          <p className="text-sm font-semibold text-slate-600">
            Belum ada resto mitra yang terdaftar dari backend.
          </p>
        </div>
      )}
    </section>
  );
}
