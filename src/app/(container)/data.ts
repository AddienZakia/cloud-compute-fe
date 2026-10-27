// ─── Shared Types ────────────────────────────────────────────────────────────

export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export type Category = {
  id: string;
  label: string;
  icon: string; // emoji fallback
};

export type Merchant = {
  id: string;
  name: string;
  category: string;
  distance: string;
  rating: string;
  reviewCount: string;
  priceRange: string;
  deliveryTime: string;
  imageUrl: string;
  isOpen: boolean;
  openTime?: string;
  address?: string;
};

export type MenuItem = {
  id: string;
  merchantName: string;
  name: string;
  description: string;
  price: number;
  likePercent: number;
  badge: string;
  badgeVariant: 'red' | 'dark' | 'orange' | 'green';
  imageUrl: string;
};

// ─── Nav Items (Hanya rute yang nyata dan aktif) ──────────────────────────────

export const navItems: NavItem[] = [
  { id: 'beranda', label: 'Beranda', href: '/catalog/dashboard' },
  { id: 'riwayat', label: 'Riwayat Pesanan', href: '/catalog/riwayat' },
];

// ─── Category Tabs ──────────────────────────────────────────────────────────

export const categories: Category[] = [
  { id: 'semua', label: 'Semua', icon: '🍽️' },
  { id: 'nasi', label: 'Nasi', icon: '🍚' },
  { id: 'ayam', label: 'Ayam', icon: '🍗' },
  { id: 'mie', label: 'Mie', icon: '🍜' },
  { id: 'minuman', label: 'Minuman', icon: '🥤' },
  { id: 'camilan', label: 'Camilan', icon: '🍟' },
];
