import {
  Bike,
  History,
  LayoutDashboard,
  ShoppingBag,
  User,
} from 'lucide-react';
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
    id: 'pesanan-tersedia',
    label: 'Pesanan Tersedia',
    href: '/driver/tersedia',
    icon: ShoppingBag,
    badge: '5',
  },
  {
    id: 'pesanan-aktif',
    label: 'Pesanan Saya / Aktif',
    href: '/driver/aktif',
    icon: Bike,
  },
  {
    id: 'riwayat-pengantaran',
    label: 'Riwayat Pengantaran',
    href: '/driver/riwayat',
    icon: History,
  },
  {
    id: 'profil-driver',
    label: 'Profil Driver',
    href: '/driver/profil',
    icon: User,
  },
];
