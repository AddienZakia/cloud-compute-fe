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

// ─── Nav Items ────────────────────────────────────────────────────────────────

export const navItems: NavItem[] = [
  { id: 'beranda', label: 'Beranda', href: '/catalog/dashboard' },
  { id: 'kategori', label: 'Kategori', href: '#' },
  { id: 'riwayat', label: 'Riwayat Pesanan', href: '/catalog/riwayat' },
  { id: 'promo', label: 'Promo', href: '#' },
];

// ─── Categories ──────────────────────────────────────────────────────────────

export const categories: Category[] = [
  { id: 'semua', label: 'Semua', icon: '🍽️' },
  { id: 'nasi', label: 'Nasi', icon: '🍚' },
  { id: 'ayam', label: 'Ayam', icon: '🍗' },
  { id: 'mie', label: 'Mie', icon: '🍜' },
  { id: 'burger', label: 'Burger', icon: '🍔' },
  { id: 'pizza', label: 'Pizza', icon: '🍕' },
  { id: 'minuman', label: 'Minuman', icon: '🥤' },
  { id: 'dessert', label: 'Dessert', icon: '🍰' },
  { id: 'martabak', label: 'Martabak', icon: '🥞' },
  { id: 'kopi', label: 'Kopi', icon: '☕' },
];

// ─── Merchants ────────────────────────────────────────────────────────────────

export const merchants: Merchant[] = [
  {
    id: 'm1',
    name: 'Ayam Goreng Berkah Pak Mul',
    category: 'Ayam & Bebek',
    distance: '1.2 KM',
    rating: '4.8',
    reviewCount: '2.4rb+',
    priceRange: 'Rp 15rb - Rp 45rb',
    deliveryTime: '15-25 mnt',
    imageUrl:
      'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=250&fit=crop',
    isOpen: true,
  },
  {
    id: 'm2',
    name: 'Bakmi Keriting Gloria',
    category: 'Mie & Bakso',
    distance: '2.0 KM',
    rating: '4.9',
    reviewCount: '1.8rb',
    priceRange: 'Rp 25rb - Rp 55rb',
    deliveryTime: '20-30 mnt',
    imageUrl:
      'https://images.unsplash.com/photo-1552611052-33e04de081de?w=400&h=250&fit=crop',
    isOpen: true,
  },
  {
    id: 'm3',
    name: 'Sate Khas Senayan Express',
    category: 'Nasi & Daging',
    distance: '3.4 KM',
    rating: '4.7',
    reviewCount: '3.1rb',
    priceRange: 'Rp 35rb - Rp 90rb',
    deliveryTime: '30-40 mnt',
    imageUrl:
      'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=250&fit=crop',
    isOpen: true,
  },
  {
    id: 'm4',
    name: 'Martabak Orins Pecenongan',
    category: 'Martabak & Manis',
    distance: '4.0 KM',
    rating: '4.6',
    reviewCount: '800+',
    priceRange: 'Rp 30rb - Rp 95rb',
    deliveryTime: 'Buka Sore',
    imageUrl:
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=250&fit=crop',
    isOpen: false,
    openTime: '16:00 WIB',
  },
];

// ─── Menu Items ───────────────────────────────────────────────────────────────

export const menuItems: MenuItem[] = [
  {
    id: 'menu1',
    merchantName: 'Dapur Solo Express',
    name: 'Nasi Liwet Komplit Ayam Bakar',
    description:
      'Nasi liwet gurih santan, ayam bakar kecap madu, tahu bacem, lalapan, dan sambal hijau spesial.',
    price: 38000,
    likePercent: 98,
    badge: 'Terlaris #1',
    badgeVariant: 'red',
    imageUrl:
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=250&fit=crop',
  },
  {
    id: 'menu2',
    merchantName: 'Bakmi Keriting Gloria',
    name: 'Bakmi Spesial Pangsit Rebus',
    description:
      'Mie kenyal buatan tangan dengan cacahan daging ayam jamur istimewa plus 3 pcs pangsit rebus lembut.',
    price: 32000,
    likePercent: 95,
    badge: 'Favorit Chef',
    badgeVariant: 'dark',
    imageUrl:
      'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=250&fit=crop',
  },
  {
    id: 'menu3',
    merchantName: 'Geprek Juara Kemang',
    name: 'Ayam Geprek Keju Mozarella Sambal Bawang',
    description:
      'Ayam krispi fillet digeprek dengan 10 cabai rawit bawang, disetmuli keju mozarella leleh panas.',
    price: 28000,
    likePercent: 96,
    badge: 'Pedas Mantap',
    badgeVariant: 'orange',
    imageUrl:
      'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=250&fit=crop',
  },
  {
    id: 'menu4',
    merchantName: 'Kedai Es Nusantara',
    name: 'Es Cendol Durian Segar',
    description:
      'Cendol pandan asmi, gula aren organik murni, santan kental gurih dengan 1 ponggo durian Medan asli.',
    price: 22000,
    likePercent: 97,
    badge: 'Penyegar',
    badgeVariant: 'green',
    imageUrl:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
  },
];
