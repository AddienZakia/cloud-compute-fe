export type MenuCategory = string;

export type NoteIcon = 'like' | 'chef' | 'flame' | 'soldout' | 'none';
export type BadgeTone = 'red' | 'orange';

export interface MenuItem {
  id: number;
  catalogId?: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  badgeTone?: BadgeTone;
  note: string;
  noteIcon: NoteIcon;
  category: string;
  image: string;
  defaultOption: string;
  soldOut?: boolean;
}

export interface CartItem {
  id: number;
  catalogId?: string;
  name: string;
  option: string;
  price: number;
  qty: number;
}

export interface Merchant {
  id?: string;
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

export const categories: string[] = [
  'Semua Menu',
  'Ayam & Bebek',
  'Nasi',
  'Mie',
  'Minuman',
  'Camilan',
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
  name: 'Dapur Mitra Bungkusin',
  shortName: 'Mitra Bungkusin',
  breadcrumb: 'Katalog Resto Terverifikasi',
  kitchen: 'Dapur Terhubung: Aktif',
  banner: img('photo-1555396273-367ea4eb4db5', 1600),
  logo: img('photo-1565299507177-b0ac66763828', 160),
  rating: '4.9',
  ratingCount: '(1.200+ rating)',
  eta: '20 - 30 mnt',
  distance: '1.5 km',
  hours: 'Buka pk 08:00 - 22:00 WIB',
  address: 'Jl. Raya Kampus, Surabaya',
  store: 'Mitra Terverifikasi',
  deliverTo: 'Lokasi Anda Sekarang',
  licenseNo: 'ID-BUNGKUSIN-2026',
};

export const voucher = {
  code: 'BUNGKUSINHEMAT',
  title: 'Diskon 25% Min. Belanja Rp 60rb',
  hint: 'Otomatis terpasang saat checkout order',
};

export const initialCart: CartItem[] = [];
