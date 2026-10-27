import { CreateMenuFormValues } from './menu-form-schema';

export const defaultMenuFormValues: CreateMenuFormValues = {
  nama: 'Ayam Goreng Sambal Ijo Spesial',
  sku: 'AGB-18',
  kategori: 'Paket Nasi & Ayam',
  tags: ['Pedas Gurih', 'Best Seller'],
  deskripsi:
    'Ayam goreng kremes renyah dengan ulekan cabai rawit hijau segar dan minyak kelapa panas, disajikan hangat dengan lalapan timun dan kemangi.',
  hargaJual: 38_000,
  hargaCoret: 45_000,
  estimasiMasak: '12-15',
  statusAwal: 'tersedia',
  varianGroups: [
    {
      id: 'vg-1',
      nama: 'Pilihan Bagian Ayam',
      tipe: 'WAJIB',
      maksPilihan: 1,
      opsi: [
        { id: 'opt-1', nama: 'Paha Bawah', hargaEkstra: 0 },
        { id: 'opt-2', nama: 'Paha Atas', hargaEkstra: 0 },
        { id: 'opt-3', nama: 'Dada Mentok', hargaEkstra: 2000 },
      ],
    },
    {
      id: 'vg-2',
      nama: 'Tingkat Kepedasan Sambal Ijo',
      tipe: 'WAJIB',
      maksPilihan: 1,
      opsi: [
        { id: 'opt-4', nama: 'Sedang (Standar)', hargaEkstra: 0 },
        { id: 'opt-5', nama: 'Pedas Mantap', hargaEkstra: 0 },
        { id: 'opt-6', nama: 'Ekstra Pedas Rawit', hargaEkstra: 2000 },
      ],
    },
    {
      id: 'vg-3',
      nama: 'Topping & Lauk Tambahan',
      tipe: 'OPSIONAL',
      maksPilihan: 5,
      opsi: [
        {
          id: 'opt-7',
          nama: 'Ekstra Kremes Renyah Toples Mini',
          hargaEkstra: 4000,
        },
        { id: 'opt-8', nama: 'Ganti Nasi Uduk Gurih Pulen', hargaEkstra: 6000 },
      ],
    },
  ],
  fotoUrl: '/images/menu/placeholder.svg',
};
