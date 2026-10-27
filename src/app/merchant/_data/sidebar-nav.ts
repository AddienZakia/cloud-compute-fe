import { ChefHat, History, LayoutDashboard } from 'lucide-react';

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
    id: 'kelola-makanan',
    label: 'Kelola Makanan',
    href: '/merchant/katalog',
    icon: ChefHat,
  },
  {
    id: 'riwayat-pesanan',
    label: 'Riwayat Pesanan',
    href: '/merchant/riwayat',
    icon: History,
  },
];

export const storeInfo = {
  name: 'Merchant Partner',
  branch: 'Mitra Resmi',
  isOpen: true,
  openLabel: 'BUKA',
  closedLabel: 'TUTUP',
};

export const footerInfo = {
  logoutLabel: 'Keluar Akun',
};
