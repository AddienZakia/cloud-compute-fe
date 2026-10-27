export interface CheckoutItem {
  id: number;
  sku: string;
  name: string;
  price: number;
  unit: string;
  qty: number;
  note: string;
  badge: string;
  badgeTone: 'red' | 'orange' | 'gray';
  image: string;
}

export interface FeatureBadgeData {
  icon: string;
  title: string;
  sub: string;
}

export const FEES = {
  delivery: 9000,
  service: 3000,
  voucherAmount: 15000,
};

export const rp = (n: number): string =>
  'Rp ' +
  Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const img = (id: string, w = 400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const initialItems: CheckoutItem[] = [
  {
    id: 1,
    sku: 'SKU-AGB-01',
    name: 'Paket Ayam Goreng Kremes + Nasi Gurih',
    price: 36000,
    unit: 'porsi',
    qty: 2,
    note: 'Sambal dipisah ya, banyakin kremes',
    badge: 'Favorit',
    badgeTone: 'red',
    image: img('photo-1626645738196-c2a7c87a8f58'),
  },
  {
    id: 2,
    sku: 'SKU-AGB-09',
    name: 'Ayam Bakar Madu Pedas Manis',
    price: 42000,
    unit: 'porsi',
    qty: 1,
    note: 'Level pedas sedang',
    badge: 'Spesial',
    badgeTone: 'orange',
    image: img('photo-1555939594-58d7cb561ad1'),
  },
  {
    id: 3,
    sku: 'SKU-AGB-15',
    name: 'Es Jeruk Kelapa Muda Murni',
    price: 16000,
    unit: 'gelas',
    qty: 2,
    note: 'Sedikit gula, es normal',
    badge: 'Minuman Segar',
    badgeTone: 'gray',
    image: img('photo-1551024601-bec78aea704b'),
  },
];

export const COUPON_CODE = 'BERKAHKAFKA';

export const featureBadges: FeatureBadgeData[] = [
  { icon: '🌡️', title: 'Jaminan Hangat', sub: 'Thermal bag driver resmi' },
  { icon: '⏱️', title: 'Rerata 24 Menit', sub: 'Radius 1.8 km Tebet' },
  { icon: '📦', title: 'Kemasan Bersegel', sub: 'Segel keamanan anti rusak' },
];

export const DELIVERY_ADDRESS = {
  label: 'Rumah Siti Rahma • Tebet Barat',
  full: 'Jl. Tebet Barat Dalam Raya VII No. 12, Tebet, Jakarta Selatan',
  mapImage: img('photo-1524661135-423995f22d0b', 800),
};
