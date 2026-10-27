'use client';

import { ROUTES } from '@/lib/routes';
import { Bell, ChevronDown, MapPin, Search, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import type { NavItem } from '../(container)/data';

export type ActiveNavItem = 'beranda' | 'kategori' | 'riwayat' | 'promo';

type NavbarProps = {
  navItems: NavItem[];
  cartCount: number;
  activeItem?: ActiveNavItem;
};

export default function Navbar({
  navItems,
  cartCount,
  activeItem = 'beranda',
}: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3">
        {/* Left: Logo + Role Pill */}
        <div className="flex items-center gap-3">
          <Link
            href={ROUTES.dashboard}
            className="text-xl font-extrabold tracking-tight"
            style={{ color: '#D91E18', fontFamily: 'var(--font-plusJakarta)' }}
          >
            Bungkusin
          </Link>
          <button className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:bg-slate-100">
            KONSUMEN
            <ChevronDown className="h-3 w-3" />
          </button>
        </div>

        {/* Center: Location + Search + Nav */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* Location chip */}
          <button className="flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1.5 text-left transition hover:bg-red-100">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-red-500" />
            <div>
              <p className="text-[10px] font-semibold leading-tight text-red-500">
                Jakarta Selatan
              </p>
              <p className="text-[10px] leading-tight text-slate-500">
                DKI Jakarta
              </p>
            </div>
          </button>

          {/* Search icon button */}
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200">
            <Search className="h-4 w-4" />
          </button>

          {/* Nav items */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  item.id === activeItem
                    ? 'bg-[#D91E18] text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Cart + Bell + Avatar */}
        <div className="flex items-center gap-3">
          {/* Cart */}
          <button className="relative flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200">
            <ShoppingCart className="h-4.5 w-4.5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D91E18] text-[10px] font-bold text-white">
                {cartCount > 9 ? '9+' : cartCount}
              </span>
            )}
          </button>

          {/* Bell */}
          <button className="relative flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200">
            <Bell className="h-4.5 w-4.5" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#D91E18] ring-1 ring-white" />
          </button>

          {/* Avatar + Name */}
          <button className="flex items-center gap-2 rounded-full border border-slate-100 bg-slate-50 px-3 py-1.5 transition hover:bg-slate-100">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-red-400 to-orange-400 text-xs font-bold text-white">
              SR
            </div>
            <div className="hidden text-left sm:block">
              <p className="text-xs font-bold text-slate-800">Siti Rahma</p>
              <p className="text-[10px] font-semibold text-amber-500">VIP</p>
            </div>
            <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
          </button>
        </div>
      </div>
    </nav>
  );
}
