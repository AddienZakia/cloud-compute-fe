'use client';

import { useGetProfile } from '@/hooks/auth';
import { removeToken } from '@/lib/cookie';
import { LogOut, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { DriverStatusToggle } from './DriverStatusToggle';

export function DriverTopbar() {
  const router = useRouter();
  const { profile } = useGetProfile();

  const handleLogout = () => {
    removeToken();
    router.push('/auth/login');
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-driver-border bg-driver-card px-6">
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold text-neutral-60">
          Portal Driver BungkusIn
        </span>
      </div>

      <div className="flex items-center gap-4">
        <DriverStatusToggle />

        <div className="flex items-center gap-3 border-l border-driver-border pl-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-driver-surface text-driver-primary ring-2 ring-driver-border">
            <User className="h-5 w-5" />
          </div>
          <div className="hidden text-left sm:block">
            <p className="text-xs font-bold text-neutral-100">
              {profile?.name || 'Mitra Kurir'}
            </p>
            <p className="text-[11px] text-neutral-70">Driver Aktif</p>
          </div>

          <button
            onClick={handleLogout}
            title="Keluar Akun"
            className="ml-2 flex items-center gap-1 rounded-lg border border-neutral-30 px-2.5 py-1.5 text-xs font-medium text-danger-main hover:bg-red-50 hover:text-red-700"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span className="hidden md:inline">Keluar</span>
          </button>
        </div>
      </div>
    </header>
  );
}
