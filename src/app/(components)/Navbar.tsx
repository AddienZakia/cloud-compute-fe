'use client';

import { useGetProfile } from '@/hooks/auth';
import { removeToken } from '@/lib/cookie';
import { ROUTES } from '@/lib/routes';
import { LogIn, LogOut } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { NavItem } from '../(container)/data';

export type ActiveNavItem = 'beranda' | 'riwayat';

type NavbarProps = {
  navItems: NavItem[];
  cartCount?: number;
  activeItem?: ActiveNavItem;
};

export default function Navbar({
  navItems,
  activeItem = 'beranda',
}: NavbarProps) {
  const router = useRouter();
  const { user, isLoading } = useGetProfile();

  const handleLogout = () => {
    removeToken();
    router.push('/auth/login');
  };

  const initials = user?.name
    ? user.name
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : 'U';

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white shadow-xs">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3">
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-3">
          <Link
            href={ROUTES.dashboard}
            className="text-xl font-extrabold tracking-tight"
            style={{ color: '#D91E18' }}
          >
            Bungkusin
          </Link>
        </div>

        {/* Center: Nav Links */}
        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-full px-4 py-1.5 text-sm font-bold transition ${
                item.id === activeItem
                  ? 'bg-[#D91E18] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right: Live User Profile or Login Button */}
        <div className="flex items-center gap-3">
          {isLoading ? (
            <div className="h-8 w-24 animate-pulse rounded-full bg-slate-100" />
          ) : user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-slate-100 bg-slate-50 px-3 py-1">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#D91E18] to-orange-500 text-xs font-bold text-white">
                  {initials}
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-800 leading-tight">
                    {user.name}
                  </p>
                  <p className="text-[10px] font-semibold text-slate-400 leading-none">
                    {user.role}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                title="Keluar"
                className="flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-600 transition hover:bg-red-50 hover:text-[#D91E18] hover:border-red-200"
              >
                <LogOut size={13} />
                Keluar
              </button>
            </div>
          ) : (
            <Link
              href="/auth/login"
              className="flex items-center gap-1.5 rounded-full bg-[#D91E18] px-4 py-1.5 text-xs font-bold text-white shadow-sm transition hover:bg-red-800"
            >
              <LogIn size={13} />
              Masuk
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
