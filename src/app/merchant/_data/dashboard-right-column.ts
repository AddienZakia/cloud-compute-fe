export type QuickActionItem = {
  key: 'ADD_MENU' | 'STOCK_TOGGLE' | 'VIEW_STORE';
  label: string;
  variant: 'primary' | 'warning' | 'outlined';
};

export type TopSellingItem = {
  id: string;
  rank: number;
  name: string;
  soldText: string;
  revenueText: string;
  image: string;
  percentage: number;
};

export type StockWarningItem = {
  id: string;
  name: string;
  statusText: string;
  severity: 'danger' | 'warning';
  actionLabel: string;
  actionKey: 'RESTOCK' | 'UPDATE_STOCK';
};

export const quickActions: QuickActionItem[] = [
  {
    key: 'ADD_MENU',
    label: '+ Tambah Menu Baru',
    variant: 'primary',
  },
  {
    key: 'STOCK_TOGGLE',
    label: 'Kelola Stok Cepat (Stock Toggle)',
    variant: 'warning',
  },
  {
    key: 'VIEW_STORE',
    label: 'Lihat Tampilan Toko Konsumen',
    variant: 'outlined',
  },
];

export const topSellingItems: TopSellingItem[] = [
  {
    id: 'top-1',
    rank: 1,
    name: 'Paket Ayam Goreng Kremes',
    soldText: '24 porsi terjual',
    revenueText: 'Rp 864.000',
    image: '/images/menu/ayam-kremes.svg',
    percentage: 100,
  },
  {
    id: 'top-2',
    rank: 2,
    name: 'Bebek Bakar Madu Pedas',
    soldText: '11 porsi terjual',
    revenueText: 'Rp 462.000',
    image: '/images/menu/bebek-madu.svg',
    percentage: 55,
  },
  {
    id: 'top-3',
    rank: 3,
    name: 'Es Jeruk Kelapa Muda Murni',
    soldText: '19 porsi terjual',
    revenueText: 'Rp 304.000',
    image: '/images/menu/es-jeruk.svg',
    percentage: 38,
  },
];

export const stockWarningItems: StockWarningItem[] = [
  {
    id: 'stock-1',
    name: 'Sayur Asem Khas Betawi',
    statusText: 'Stok Habis • Otomatis Dinonaktifkan di Menu',
    severity: 'danger',
    actionLabel: '+ Tambah',
    actionKey: 'RESTOCK',
  },
  {
    id: 'stock-2',
    name: 'Tahu Tempe Bacem',
    statusText: 'Sisa 3 porsi lagi di etalase resto',
    severity: 'warning',
    actionLabel: 'Update',
    actionKey: 'UPDATE_STOCK',
  },
];
