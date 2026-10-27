import { Badge } from '@/components/ui/badge';
import { Clock, Radio } from 'lucide-react';
import type { ActiveDelivery } from '../_schema/driver-schema';

interface DeliveryHeaderProps {
  delivery: ActiveDelivery;
}

export function DeliveryHeader({ delivery }: DeliveryHeaderProps) {
  const isArrived = delivery.status === 'TIBA_DI_RESTO';

  return (
    <div className="border-b border-driver-border p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-danger-main animate-pulse" />
          <h2 className="text-base font-bold text-neutral-100">
            Pengantaran Sedang Berjalan (Active Delivery)
          </h2>
        </div>

        <div className="flex items-center gap-1.5 rounded-full border border-driver-border bg-driver-surface-muted px-3 py-1 font-mono text-[11px] font-semibold text-neutral-80">
          <Radio className="h-3 w-3 text-danger-main" />
          <span>{delivery.trackingSyncId}</span>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 rounded-xl bg-driver-surface-muted p-3.5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold text-neutral-90">
            ORDER ID {delivery.orderNumber}
          </p>
          <p className="mt-0.5 text-xs text-neutral-70">
            {delivery.customerName} • Metode: {delivery.paymentMethod}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Badge
            className={
              isArrived
                ? 'border-success-border bg-driver-status-success-bg text-xs font-bold text-driver-status-success'
                : 'border-driver-border bg-driver-surface text-xs font-bold text-driver-primary'
            }
          >
            {isArrived ? 'SUDAH DI RESTO' : 'SEDANG MENJEMPUT KE RESTO'}
          </Badge>

          <div className="flex items-center gap-1 text-xs font-medium text-neutral-70">
            <Clock className="h-3.5 w-3.5 text-neutral-60" />
            <span>
              {isArrived
                ? 'Sudah tiba di lokasi resto'
                : `Estimasi tiba di resto: ${delivery.etaResto}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
