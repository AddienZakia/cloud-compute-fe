// ─── Types ───────────────────────────────────────────────────────────────────

export type OrderTab = 'semua' | 'berjalan' | 'selesai' | 'dibatalkan';

export type OrderStatus = 'OUT_FOR_DELIVERY' | 'COMPLETED' | 'CANCELLED';

export type ActiveOrderItem = {
  name: string;
  price: number;
  qty: number;
  isExtra?: boolean;
  extraNote?: string;
};

export type ActiveOrder = {
  id: string;
  status: OrderStatus;
  merchantName: string;
  merchantSubtitle: string;
  rating: string;
  orderedAt: string;
  imageUrl: string;
  items: ActiveOrderItem[];
  extraItemsNote: string;
  extraItemsPrice: number;
  estimatedArrival: string;
  estimatedMinutes: number;
  progressPercent: number;
  driverName: string;
  driverVehicle: string;
  driverPlate: string;
  driverImageUrl: string;
  paymentMethod: string;
  subtotal: number;
  shippingLabel: string;
  shippingCost: number | null; // null = free
  discountLabel: string;
  discount: number;
  total: number;
};

export type HistoryOrderStatus = 'COMPLETED' | 'CANCELLED';

export type HistoryOrder = {
  id: string;
  status: HistoryOrderStatus;
  orderedAt: string;
  merchantName: string;
  itemSummary: string;
  totalAmount: number;
  paymentMethod: string;
  imageUrl: string;
  cancelReason?: string;
  isRefunded?: boolean;
};

// ─── Active Order ─────────────────────────────────────────────────────────────

export const activeOrder: ActiveOrder = {
  id: '#BKS-20251024-8891',
  status: 'OUT_FOR_DELIVERY',
  merchantName: 'Restoran Mitra Juara',
  merchantSubtitle: 'Ayam Goreng Berkah Pak Mul – Tebet',
  rating: '4.8',
  orderedAt: 'Dipesan hari ini • 24 Okt 2025, 14:32 WIB',
  imageUrl:
    'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=500&h=350&fit=crop',
  items: [
    { name: '1x Paket Ayam Goreng Kremes', price: 48000, qty: 1 },
    { name: '1x Bebek Bakar Madu Pedas', price: 85000, qty: 1 },
  ],
  extraItemsNote: '+2 item lainnya (Nasi Uduk Gurih, Es Jeruk Nipis)',
  extraItemsPrice: 30000,
  estimatedArrival: '14:52 WIB',
  estimatedMinutes: 12,
  progressPercent: 75,
  driverName: 'Bambang S.',
  driverVehicle: 'Honda Vario',
  driverPlate: 'B 4910 SGO',
  driverImageUrl:
    'https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=80&h=80&fit=crop&crop=faces',
  paymentMethod: 'BungkusPay Saldo',
  subtotal: 143000,
  shippingLabel: 'Ongkos Kirim (Kilat)',
  shippingCost: null, // free VIP
  discountLabel: 'Diskon Promo KILAT',
  discount: 15000,
  total: 128000,
};

// ─── Order History ────────────────────────────────────────────────────────────

export const orderHistory: HistoryOrder[] = [
  {
    id: '#BKS-20251020-4102',
    status: 'COMPLETED',
    orderedAt: '20 Okt 2025, 12:15 WIB',
    merchantName: 'Bakmi Keriting Gloria – Senopati',
    itemSummary:
      '1x Bakmi Komplit Spesial, 1x Pangsit Goreng Renyah (5 pcs), 1x Es Teh Botol Dingin',
    totalAmount: 72000,
    paymentMethod: 'QRIS BCA',
    imageUrl:
      'https://images.unsplash.com/photo-1552611052-33e04de081de?w=200&h=200&fit=crop',
  },
  {
    id: '#BKS-20251015-3091',
    status: 'COMPLETED',
    orderedAt: '15 Okt 2025, 19:40 WIB',
    merchantName: 'Sate Khas Senayan Express – Cilandak',
    itemSummary:
      '1x Sate Ayam Campur Bumbu Kacang (10 Tusuk), 2x Lontong Daun Pisang, 1x Es Cendol Nangka',
    totalAmount: 98000,
    paymentMethod: 'BungkusPay',
    imageUrl:
      'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=200&h=200&fit=crop',
  },
  {
    id: '#BKS-20251010-1840',
    status: 'CANCELLED',
    orderedAt: '10 Okt 2025, 23:10 WIB',
    merchantName: 'Martabak Orins Pecenongan',
    itemSummary: '',
    totalAmount: 85000,
    paymentMethod: 'BungkusPay',
    imageUrl:
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=200&h=200&fit=crop',
    cancelReason:
      'Toko telah melewati batas jam operasional. Dana dikembalikan ke BungkusPay.',
    isRefunded: true,
  },
];

// ─── Tab Config ───────────────────────────────────────────────────────────────

export type TabConfig = {
  id: OrderTab;
  label: string;
  count: number;
};

export const tabsConfig: TabConfig[] = [
  { id: 'semua', label: 'Semua Pesanan', count: 12 },
  { id: 'berjalan', label: 'Sedang Berjalan', count: 1 },
  { id: 'selesai', label: 'Selesai', count: 9 },
  { id: 'dibatalkan', label: 'Dibatalkan', count: 2 },
];
