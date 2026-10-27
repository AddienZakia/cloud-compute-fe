'use client';

import { cn } from '@/lib/utils';
import { useDriverContext } from '../(container)/DriverContext';

export function DriverStatusToggle() {
  const { isOnline, toggleOnline } = useDriverContext();

  return (
    <div className="flex items-center rounded-lg border border-driver-border bg-driver-surface-muted p-1">
      <button
        type="button"
        aria-pressed={isOnline}
        onClick={!isOnline ? toggleOnline : undefined}
        className={cn(
          'flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-all',
          isOnline
            ? 'bg-driver-status-success text-neutral-10 shadow-xs'
            : 'text-neutral-70 hover:text-neutral-100',
        )}
      >
        <span
          className={cn(
            'h-2 w-2 rounded-full',
            isOnline ? 'bg-neutral-10' : 'bg-neutral-50',
          )}
        />
        ONLINE
      </button>

      <button
        type="button"
        aria-pressed={!isOnline}
        onClick={isOnline ? toggleOnline : undefined}
        className={cn(
          'flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-all',
          !isOnline
            ? 'bg-neutral-80 text-neutral-10 shadow-xs'
            : 'text-neutral-70 hover:text-neutral-100',
        )}
      >
        <span
          className={cn(
            'h-2 w-2 rounded-full',
            !isOnline ? 'bg-neutral-10' : 'bg-neutral-50',
          )}
        />
        OFFLINE
      </button>
    </div>
  );
}
