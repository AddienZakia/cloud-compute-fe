import { cn } from '@/lib/utils';
import type { DriverStatItem } from '../_schema/driver-schema';

interface DriverStatCardProps {
  item: DriverStatItem;
}

export function DriverStatCard({ item }: DriverStatCardProps) {
  return (
    <div className="rounded-xl border border-driver-border bg-driver-card p-4 shadow-xs">
      <p className="text-[11px] font-semibold tracking-wider text-neutral-70 uppercase">
        {item.label}
      </p>

      <p className="mt-2 text-2xl font-bold tracking-tight text-neutral-100">
        {item.value}
      </p>

      <p
        className={cn(
          'mt-1 text-xs',
          item.subtextColor === 'green'
            ? 'font-medium text-driver-status-success'
            : 'text-neutral-70',
        )}
      >
        {item.subtext}
      </p>
    </div>
  );
}
