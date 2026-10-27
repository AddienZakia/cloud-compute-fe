'use client';

import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DriverArmadaCard } from './DriverArmadaCard';
import { DriverHotlineCard } from './DriverHotlineCard';
import { DriverSidebarNav } from './DriverSidebarNav';

export function DriverSidebar() {
  const pathname = usePathname();
  const isRiwayat = pathname === '/driver/riwayat';

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-driver-border bg-driver-surface transition-colors">
      {!isRiwayat && (
        <div className="flex h-16 items-center justify-between border-b border-driver-border bg-driver-card px-5">
          <Link href="/driver" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-neutral-100">
              Bungkus<span className="text-driver-primary">In</span>
            </span>
            <Badge className="rounded-md border-none bg-neutral-100 px-1.5 py-0.5 text-[10px] font-bold text-neutral-10">
              DRIVER
            </Badge>
          </Link>
        </div>
      )}

      <div className={isRiwayat ? 'pt-4' : ''}>
        <DriverArmadaCard />
      </div>
      <DriverSidebarNav />
      <DriverHotlineCard />
    </aside>
  );
}
