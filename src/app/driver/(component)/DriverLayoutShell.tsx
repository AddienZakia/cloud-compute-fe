'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { DriverSidebar } from './DriverSidebar';
import { DriverTopbar } from './DriverTopbar';

interface DriverLayoutShellProps {
  children: ReactNode;
}

export function DriverLayoutShell({ children }: DriverLayoutShellProps) {
  const pathname = usePathname();
  const isRiwayat = pathname === '/driver/riwayat';

  return (
    <div
      className={`flex h-screen overflow-hidden ${
        isRiwayat ? 'bg-driver-bg' : 'bg-neutral-20'
      }`}
    >
      <DriverSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        {!isRiwayat && <DriverTopbar />}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
