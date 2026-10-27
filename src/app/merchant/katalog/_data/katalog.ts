/**
 * Katalog page: header labels, merchant info, and button labels.
 * Teks persis Figma.
 */
export const katalogHeader = {
  sectionLabel: 'KATALOG MAKANAN',
  merchantId: 'AG-TB-004',
  title: 'Kelola Menu Makanan',
  description:
    'Atur daftar hidangan, harga, ketersediaan stok porsi, dan kategori menu restoran Anda.',
  buttonVariasi: 'Atur Variasi/Topping',
  buttonTambahMenu: 'Tambahkan Menu Baru',
} as const;

export const KAFKA_OFFSET = '#394,821';

export const katalogStreamInfo = {
  label: 'STREAM:',
  status: 'Active',
  offset: KAFKA_OFFSET,
  syncLabel: 'Sync otomatis 12ms WIB',
} as const;
