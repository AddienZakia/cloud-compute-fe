import { Package, ReceiptText } from 'lucide-react';
import StatCard from '../(components)/StatCard';

export default function PageHeaderSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-6 pt-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left: pills + heading + subtitle */}
        <div className="max-w-xl space-y-3">
          {/* Pills row */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#D91E18] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
              Pelanggan Bungkusin
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-3xl font-extrabold leading-tight text-slate-900"
            style={{ fontFamily: 'var(--font-plusJakarta)' }}
          >
            Riwayat Pesanan Saya
          </h1>

          {/* Subtitle */}
          <p className="text-sm leading-relaxed text-slate-500">
            Pantau status pesanan yang sedang berjalan dan arsip kuliner favorit
            Anda secara seketika melalui alur data terdesentralisasi.
          </p>
        </div>

        {/* Right: stat cards */}
        <div className="flex flex-shrink-0 flex-wrap gap-3 lg:justify-end">
          <StatCard
            label="Sedang Aktif"
            value="1 Pesanan"
            icon={<Package className="h-5 w-5 text-[#D91E18]" />}
            iconBg="bg-red-100"
          />
          <StatCard
            label="Total Transaksi"
            value="12 Order"
            icon={<ReceiptText className="h-5 w-5 text-orange-500" />}
            iconBg="bg-orange-100"
          />
        </div>
      </div>
    </section>
  );
}
