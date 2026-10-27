'use client';

import { TrendingUp } from 'lucide-react';
import { useCallback, useState } from 'react';
import PairingCard from '../(components)/PairingCard';
import Toast from '../(components)/Toast';
import { MenuDetail, menuDetails } from './data';

interface Props {
  menu: MenuDetail;
}

const pairingDescriptions: Record<number, string> = {
  1: 'Ayam kampung empuk dengan taburan kremes renyah dan nasi uduk harum.',
  2: 'Bebek gurih empuk tidak amis dengan sambal korek rawit pedas mantap.',
  3: 'Perasan jeruk manis dipadu dengan serutan kelapa muda segar pelepas dahaga.',
  4: 'Dibakar dengan bumbu madu dan rempah wangi khas resep keluarga Pak Mul.',
  5: '2 potong tahu dan 2 potong tempe bumbu bacem gula kelapa asli, gurih meresap rapat.',
  6: 'Kuah asam segar bersama jagung manis, kacang tanah, dan daun melinjo empuk.',
};

const pairingBadges: Record<number, { label: string; color: string }> = {
  1: { label: 'Paket Hemat', color: '#D91E18' },
  2: { label: 'Ayam & Bebek', color: '#D91E18' },
  3: { label: 'Minuman Segar', color: '#F97316' },
  4: { label: 'Rekomendasi', color: '#D91E18' },
  5: { label: 'Lauk Tambahan', color: '#166534' },
  6: { label: 'Kuah Segar', color: '#D91E18' },
};

export default function PairingSection({ menu }: Props) {
  const [toast, setToast] = useState(false);

  const showToast = useCallback(() => {
    setToast(true);
    setTimeout(() => setToast(false), 2500);
  }, []);

  const pairings = menu.pairingIds
    .map((id) => menuDetails.find((m) => m.id === id))
    .filter((m): m is MenuDetail => !!m)
    .map((m) => ({
      id: m.id,
      name: m.name,
      price: m.price,
      image: m.image,
      description: pairingDescriptions[m.id] ?? m.description,
      badge: pairingBadges[m.id]?.label ?? 'Pendamping',
      badgeColor: pairingBadges[m.id]?.color ?? '#D91E18',
    }));

  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-10">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-extrabold text-slate-900">
            Menu Pendamping Pilihan
          </h2>
          <p className="mt-0.5 text-[13px] text-slate-500">
            Sempurnakan sajian ayam goreng kremes Anda dengan hidangan segar ini
          </p>
        </div>
        <button className="flex shrink-0 items-center gap-1.5 text-[13px] font-bold text-[#F97316] hover:underline">
          <TrendingUp size={14} />
          Sering Dipesan Bersama
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pairings.map((item) => (
          <PairingCard key={item.id} item={item} onAdd={showToast} />
        ))}
      </div>

      <Toast visible={toast} message="Ditambahkan ke keranjang" />
    </section>
  );
}
