import {
  BarChart2,
  ChefHat,
  ClipboardList,
  History,
  LayoutDashboard,
  Settings,
  Store,
} from 'lucide-react';

export type NavItem = {
  id: string;
  label: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
};

export const navItems: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    href: '/merchant',
    icon: LayoutDashboard,
  },
  {
    id: 'detail-merchant',
    label: 'Detail Merchant',
    href: '/merchant/detail',
    icon: Store,
  },
  {
    id: 'kelola-makanan',
    label: 'Kelola Makanan',
    href: '/merchant/katalog',
    icon: ChefHat,
  },
  {
    id: 'antrian-pesanan',
    label: 'Antrian Pesanan',
    href: '/merchant/antrian',
    icon: ClipboardList,
    badge: '4 Baru',
  },
  {
    id: 'riwayat-pesanan',
    label: 'Riwayat Pesanan',
    href: '/merchant/riwayat',
    icon: History,
  },
  {
    id: 'pengaturan-toko',
    label: 'Pengaturan Toko',
    href: '/merchant/pengaturan',
    icon: Settings,
  },
  {
    id: 'laporan',
    label: 'Laporan',
    href: '/merchant/laporan',
    icon: BarChart2,
  },
];

export const storeInfo = {
  name: 'Ayam Berkah Pak Mu…',
  branch: 'Cabang Tabel Baru',
  isOpen: true,
  openLabel: 'BUKA',
  closedLabel: 'TUTUP',
};

export const kafkaStatus = {
  name: 'Kafhar',
  status: 'ACTIVE',
  clusterId: 'p-id/Plus-Mac',
};

export const footerInfo = {
  notificationLabel: 'Suara Notifikasi',
  logoutLabel: 'Keluar Akun',
};
