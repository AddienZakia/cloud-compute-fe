'use client';

import { Button } from '@/components/ui/button';
import { MessageSquare, Navigation, Phone } from 'lucide-react';
import { toast } from 'sonner';
import type { RoutePoint } from '../_schema/driver-schema';

interface RoutePointActionsProps {
  point: RoutePoint;
}

export function RoutePointActions({ point }: RoutePointActionsProps) {
  const isPrimaryDisabled =
    Boolean(point.primaryActionDisabled) ||
    point.primaryActionLabel === '—' ||
    point.address === '—';
  const isSecondaryDisabled =
    Boolean(point.secondaryActionDisabled) ||
    point.secondaryActionLabel === '—';

  const PrimaryIcon = point.pointNumber === 1 ? Navigation : Phone;
  const SecondaryIcon = point.pointNumber === 1 ? Phone : MessageSquare;

  return (
    <div className="mt-4 border-t border-driver-border pt-3">
      {isPrimaryDisabled && point.disabledReason && (
        <p className="mb-2 text-[11px] italic text-neutral-60">
          * {point.disabledReason}
        </p>
      )}
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outlined"
          size="sm"
          disabled={isSecondaryDisabled}
          aria-disabled={isSecondaryDisabled}
          onClick={() =>
            toast.info(`Menghubungi: ${point.secondaryActionLabel}...`)
          }
          className="flex-1 border-driver-border bg-driver-card text-xs font-semibold text-neutral-90 hover:bg-driver-surface disabled:cursor-not-allowed disabled:bg-driver-surface-muted disabled:text-neutral-50"
        >
          <SecondaryIcon className="mr-1.5 h-3.5 w-3.5 text-neutral-70" />
          {point.secondaryActionLabel}
        </Button>

        <Button
          type="button"
          variant="outlined"
          size="sm"
          disabled={isPrimaryDisabled}
          aria-disabled={isPrimaryDisabled}
          onClick={() =>
            toast.info(`Membuka aksi: ${point.primaryActionLabel}...`)
          }
          className="flex-1 border-driver-border bg-driver-card text-xs font-semibold text-neutral-90 hover:bg-driver-surface disabled:cursor-not-allowed disabled:bg-driver-surface-muted disabled:text-neutral-50"
        >
          <PrimaryIcon className="mr-1.5 h-3.5 w-3.5 text-neutral-70" />
          {point.primaryActionLabel}
        </Button>
      </div>
    </div>
  );
}
