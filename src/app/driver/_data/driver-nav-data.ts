import { Bike, History, LayoutDashboard } from 'lucide-react';
import type { ElementType } from 'react';

export type DriverNavItem = {
  id: string;
  label: string;
  href: string;
  icon: ElementType;
  badge?: string;
};

export const driverNavItems: DriverNavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    href: '/driver',
    icon: LayoutDashboard,
  },
  {
    id: 'pesanan-aktif',
    label: 'Pesanan Aktif',
    href: '/driver/aktif',
    icon: Bike,
  },
  {
    id: 'riwayat-pengantaran',
    label: 'Riwayat Pengantaran',
    href: '/driver/riwayat',
    icon: History,
  },
];
