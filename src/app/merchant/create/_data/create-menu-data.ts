export const KATEGORI_OPTIONS = [
  'Paket Nasi & Ayam',
  'Aneka Bebek',
  'Lauk Tambahan',
  'Minuman Segar',
  'Paket Hemat',
] as const;

export const DEFAULT_TAG_OPTIONS = [
  'Pedas Gurih',
  'Best Seller',
  'Favorit',
  'Menu Baru',
  'Hemat',
] as const;

export const createMenuText = {
  breadcrumbParent: 'Kelola Menu Makanan',
  breadcrumbCurrent: 'Tambah Menu Baru',
  title: 'Tambah Hidangan Baru ke Katalog Resto',
  badgeMode: 'MODE: TAMBAH MENU',
  badgeBranch: 'Tebet Barat Branch',
  description:
    'Perubahan harga, varian, dan ketersediaan langsung disinkronkan ke aplikasi konsumen real-time via Kafka.',
  toggleTambahBaru: 'Tambah Baru',
  toggleEditTerdaftar: 'Beralih ke Edit Menu Terdaftar',
  basicInfoTitle: '1. Informasi Dasar Menu',
  basicInfoSubtitle:
    'Identitas makanan yang ditampilkan pada aplikasi pemesanan konsumen',
  badgeValidData: 'Valid Data',
  badgeGuideline: 'Sesuai Pedoman Menu',
  labelNama: 'Nama Hidangan',
  helpNama:
    'Gunakan nama yang jelas, menggugah selera, dan mudah dicari konsumen.',
  labelSku: 'SKU / Kode Menu',
  badgeAuto: 'Auto',
  helpSku: 'Otomatis sinkron ke POS & stok internal.',
  labelKategori: 'Kategori Menu Resto',
  labelTags: 'Label Filter Pencarian Konsumen',
  labelDeskripsi: 'Deskripsi Lengkap Hidangan',
  helpDeskripsi:
    'Deskripsi yang detail meningkatkan konversi pesanan keranjang hingga 28%.',
} as const;
