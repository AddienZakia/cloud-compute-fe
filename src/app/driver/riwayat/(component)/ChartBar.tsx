import { cn } from '@/lib/utils';
import type { DailyEarningsItem } from '../../_schema/finance-schema';

interface ChartBarProps {
  item: DailyEarningsItem;
  maxTotal: number;
}

export function ChartBar({ item, maxTotal }: ChartBarProps) {
  // Tinggi maksimum batang dalam piksel eksplisit
  const MAX_BAR_HEIGHT = 160;
  const barHeight = Math.max(
    20,
    Math.round((item.total / maxTotal) * MAX_BAR_HEIGHT),
  );
  const rushHeight = Math.round((item.rushAndTip / item.total) * barHeight);
  const baseHeight = barHeight - rushHeight;

  return (
    <div
      className="flex flex-1 flex-col items-center justify-end"
      aria-label={`${item.day} (${item.date}): Total ${item.totalFormatted}, Tarif Dasar Rp ${item.baseFare.toLocaleString('id-ID')}, Rush & Tip Rp ${item.rushAndTip.toLocaleString('id-ID')}`}
    >
      <span
        className={cn(
          'mb-2 text-xs font-semibold',
          item.isToday ? 'font-bold text-driver-primary' : 'text-neutral-80',
        )}
      >
        {item.totalFormatted}
      </span>

      <div
        className="flex w-full max-w-[42px] flex-col overflow-hidden rounded-t-md transition-all duration-300"
        style={{ height: `${barHeight}px` }}
      >
        <div
          className="w-full bg-driver-accent"
          style={{ height: `${rushHeight}px` }}
        />
        <div
          className="w-full bg-driver-primary-dark"
          style={{ height: `${baseHeight}px` }}
        />
      </div>

      <div className="mt-3 text-center">
        <p
          className={cn(
            'text-xs',
            item.isToday
              ? 'font-bold text-driver-primary'
              : 'font-medium text-neutral-80',
          )}
        >
          {item.day}
        </p>
      </div>
    </div>
  );
}
