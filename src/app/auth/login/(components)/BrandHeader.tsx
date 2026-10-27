import { UtensilsCrossed } from 'lucide-react';

export default function BrandHeader() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D91E18] shadow-lg">
          <UtensilsCrossed size={24} className="text-white" />
        </div>
        <div>
          <p className="text-xl font-extrabold leading-none text-[#D91E18]">
            Bungkusin
          </p>
          <p className="text-[9px] font-bold uppercase tracking-widest text-slate-700 mt-0.5">
            Sistem Logistik Pangan
          </p>
        </div>
      </div>
      <p className="text-[12px] leading-relaxed text-slate-500">
        Platform Pesan Antar Kuliner Cepat Terintegrasi Event-Driven
        Architecture Apache Kafka. Menghubungkan ekosistem konsumen, resto, dan
        kurir berkecepatan tinggi.
      </p>
    </div>
  );
}
