import { ArrowRight } from 'lucide-react';
import MerchantCard from '../(components)/MerchantCard';
import SectionHeader from '../(components)/SectionHeader';
import { merchants } from './data';

export default function MerchantSection() {
  return (
    <section className="mx-auto mt-10 max-w-[1200px] px-6">
      <SectionHeader
        title="Merchant Unggulan Sekitarmu"
        subtitle="Dapur pilihan dengan rating tinggi dan servis super cepat"
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

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {merchants.map((merchant) => (
          <MerchantCard key={merchant.id} merchant={merchant} />
        ))}
      </div>
    </section>
  );
}
