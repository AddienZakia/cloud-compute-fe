export type MenuCategory =
  | 'Semua Menu'
  | 'Paket Nasi Hemat'
  | 'Ayam & Bebek'
  | 'Lauk Pendamping';

export type NoteIcon = 'like' | 'chef' | 'flame' | 'soldout' | 'none';
export type BadgeTone = 'red' | 'orange';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  badgeTone?: BadgeTone;
  note: string;
  noteIcon: NoteIcon;
  category: Exclude<MenuCategory, 'Semua Menu'>;
  image: string;
  defaultOption: string;
  soldOut?: boolean;
}

export interface CartItem {
  id: number;
  name: string;
  option: string;
  price: number;
  qty: number;
}

export interface Merchant {
  name: string;
  shortName: string;
  breadcrumb: string;
  kitchen: string;
  banner: string;
  logo: string;
  rating: string;
  ratingCount: string;
  eta: string;
  distance: string;
  hours: string;
  address: string;
  store: string;
  deliverTo: string;
  licenseNo: string;
}

export const categories: MenuCategory[] = [
  'Semua Menu',
  'Paket Nasi Hemat',
  'Ayam & Bebek',
  'Lauk Pendamping',
];

export const FEES = {
  delivery: 9000,
  service: 3000,
  voucherMin: 60000,
  voucherRate: 0.25,
};

export const rp = (n: number): string =>
  'Rp ' +
  Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const img = (id: string, w = 400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const merchant: Merchant = {
  name: 'Ayam Goreng Berkah Pak Mul - Cabang Tebet',
  shortName: 'Ayam Goreng Berkah Pak Mul',
  breadcrumb: 'Katalog Tebet',
  kitchen: 'Dapur Terhubung: Partition-04 [Aktif]',
  banner: img('photo-1556910103-1c02745aae4d', 1600),
  logo: img('photo-1565299507177-b0ac66763828', 160),
  rating: '4.8',
  ratingCount: '(1.400+ rating)',
  eta: '20 - 30 mnt',
  distance: '1.8 km',
  hours: 'Buka pk 09:00 - 21:30 WIB',
  address: 'Jl. Tebet Barat Dalam Raya No. 42, Tebet, Jakarta Selatan',
  store: 'Pak Mul - Tebet',
  deliverTo: 'Apartemen Tebet Valley',
  licenseNo: 'ID31749281-2023',
};

export const voucher = {
  code: 'BERKAHKAFKA',
  title: 'Diskon 25% Min. Belanja Rp 60rb',
  hint: 'Otomatis terpasang saat checkout order',
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Paket Ayam Goreng Kremes + Nasi Gurih + Sambal Terasi',
    description:
      'Ayam kampung empuk dengan taburan kremes renyah, lalapan, sambal terasi...',
    price: 36000,
    originalPrice: 42000,
    badge: 'Best Seller',
    badgeTone: 'red',
    note: '98% suka (420+)',
    noteIcon: 'like',
    category: 'Paket Nasi Hemat',
    image: img('photo-1626645738196-c2a7c87a8f58'),
    defaultOption: 'Nasi Gurih, Sambal Terasi Pedas',
  },
  {
    id: 2,
    name: 'Bebek Goreng Sambal Korek Super Pedas',
    description:
      'Bebek gurih empuk tidak amis dengan sambal korek rawit pedas mantap.',
    price: 48000,
    badge: 'Pedas Mantap',
    badgeTone: 'orange',
    note: 'Rekomendasi Chef',
    noteIcon: 'chef',
    category: 'Ayam & Bebek',
    image: img('photo-1544025162-d76694265947'),
    defaultOption: 'Sambal Korek',
  },
  {
    id: 3,
    name: 'Es Jeruk Kelapa Muda Murni',
    description:
      'Perasan jeruk manis dipadukan dengan kelapa muda segar penumpas dahaga.',
    price: 16000,
    note: 'Minuman Favorit',
    noteIcon: 'none',
    category: 'Lauk Pendamping',
    image: img('photo-1551024601-bec78aea704b'),
    defaultOption: 'Gula Normal, Es Sedang',
  },
  {
    id: 4,
    name: 'Ayam Bakar Madu Pedas Manis Potong 4',
    description:
      'Dibakar dengan bumbu madu dan rempah wangi khas resep keluarga Pak Mul.',
    price: 42000,
    note: 'Level Pedas: Sedang',
    noteIcon: 'flame',
    category: 'Ayam & Bebek',
    image: img('photo-1555939594-58d7cb561ad1'),
    defaultOption: 'Pedas Sedang',
  },
  {
    id: 5,
    name: 'Tahu & Tempe Bacem Gurih (Isi 4)',
    description:
      'Kombinasi 2 tahu & 2 tempe dibacem bumbu ketumbar dan gula merah legit.',
    price: 12000,
    note: 'Lauk Pendamping',
    noteIcon: 'none',
    category: 'Lauk Pendamping',
    image: img('photo-1504674900247-0877df9cc836'),
    defaultOption: 'Isi 4',
  },
  {
    id: 6,
    name: 'Sayur Asem Khas Betawi',
    description:
      'Kuah asam segar rempah dengan kacang tanah, jagung manis, dan labu...',
    price: 14000,
    note: 'Stok Habis Hari Ini',
    noteIcon: 'soldout',
    category: 'Lauk Pendamping',
    image: img('photo-1547592180-85f173990554'),
    defaultOption: '',
    soldOut: true,
  },
];

export const initialCart: CartItem[] = [
  {
    id: 1,
    name: 'Paket Ayam Goreng Kremes',
    option: 'Nasi Gurih, Sambal Terasi Pedas',
    price: 36000,
    qty: 1,
  },
  {
    id: 3,
    name: 'Es Jeruk Kelapa Muda Murni',
    option: 'Gula Normal, Es Sedang',
    price: 16000,
    qty: 1,
  },
];
