export type RadioOption<T extends string = string> = {
  id: T;
  title: string;
  subtitle: string;
  badge?: string;
};

export const estimasiMasakOptions: RadioOption<'5-10' | '12-15' | '20-25'>[] = [
  {
    id: '5-10',
    title: '5 - 10 Menit',
    subtitle: 'Untuk menu siap saji & goreng cepat',
  },
  {
    id: '12-15',
    title: '12 - 15 Menit',
    badge: 'Rekomendasi',
    subtitle: 'Standar waktu masak optimal ayam & bebek',
  },
  {
    id: '20-25',
    title: '20 - 25 Menit',
    subtitle: 'Untuk masakan ungkep atau bakar lama',
  },
];

export const statusAwalOptions: RadioOption<
  'tersedia' | 'stok_terbatas' | 'habis_sementara'
>[] = [
  {
    id: 'tersedia',
    title: 'Tersedia & Siap Dipesan',
    subtitle: 'Menu langsung aktif & tampil di katalog pelanggan',
  },
  {
    id: 'stok_terbatas',
    title: 'Stok Terbatas Harian',
    subtitle: 'Tandai menu porsi terbatas hari ini',
  },
  {
    id: 'habis_sementara',
    title: 'Habis Sementara',
    subtitle: 'Sembunyikan sementara hingga stok tersedia',
  },
];

export const pricingText = {
  title: '2. Penetapan Harga & Manajemen Stok',
  subtitle: 'Atur harga jual konsumen, komisi platform, dan kesiapan dapur',
  badgeKomisi: 'Komisi Bungkusin 12%',
  labelHargaJual: 'Harga Jual Dasar (Final Konsumen)',
  helpHargaJual: 'Harga yang tampil dan dibayarkan oleh pelanggan di aplikasi.',
  labelHargaCoret: 'Harga Coret Promosi (Opsional)',
  helpHargaCoret: 'Tampilkan harga sebelum diskon untuk menarik minat beli.',
  legendEstimasi: 'Estimasi Waktu Masak & Persiapan Dapur',
  legendStatus: 'Status Ketersediaan Awal Menu',
} as const;
