'use client';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { driverNavItems } from '../_data/driver-nav-data';

export function DriverSidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 space-y-1.5 px-3 py-2">
      {driverNavItems.map((item) => {
        const Icon = item.icon;
        const isActive =
          pathname === item.href ||
          (item.href !== '/driver' && pathname.startsWith(item.href));

        return (
          <Link
            key={item.id}
            href={item.href}
            className={cn(
              'group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-medium transition-colors',
              isActive
                ? 'bg-driver-primary font-semibold text-neutral-10 shadow-xs'
                : 'text-neutral-80 hover:bg-driver-surface-muted hover:text-neutral-100',
            )}
          >
            <div className="flex items-center gap-3">
              <Icon
                className={cn(
                  'h-4 w-4 shrink-0 transition-colors',
                  isActive
                    ? 'text-neutral-10'
                    : 'text-neutral-60 group-hover:text-neutral-90',
                )}
              />
              <span>{item.label}</span>
            </div>

            {item.badge && (
              <Badge className="h-5 min-w-5 rounded-full border-none bg-driver-accent px-1.5 text-[11px] font-bold text-neutral-10">
                {item.badge}
              </Badge>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
