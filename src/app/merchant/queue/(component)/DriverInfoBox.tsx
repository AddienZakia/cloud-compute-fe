import Typography from '@/components/Typography';
import { Bike, CheckCircle2, Navigation } from 'lucide-react';
import { CourierInfo } from '../_schema/order-schema';

type Props = {
  courier?: CourierInfo;
};

export default function DriverInfoBox({ courier }: Props) {
  if (!courier?.name) return null;

  return (
    <div className="flex flex-col gap-2 p-3 rounded-xl bg-neutral-20 border border-neutral-30 text-xs">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="flex items-center justify-center size-6 rounded-full bg-primary-surface text-primary-main shrink-0 border border-primary-border/40">
            <Bike className="size-3.5 stroke-[2.2]" />
          </div>
          <Typography
            as="span"
            variant="xs"
            weight="bold"
            className="text-neutral-90 truncate"
          >
            {courier.name}
          </Typography>
        </div>

        {courier.plateNumber && (
          <span className="shrink-0 px-1.5 py-0.5 rounded bg-neutral-10 border border-neutral-30 font-mono text-[11px] font-bold text-neutral-80">
            {courier.plateNumber}
          </span>
        )}
      </div>

      <div className="flex items-start gap-1.5">
        {courier.isArrived ? (
          <>
            <CheckCircle2 className="size-3.5 text-success-main shrink-0 mt-0.5" />
            <Typography
              as="p"
              variant="xs"
              weight="bold"
              className="text-success-main font-mono text-[11px] leading-tight"
            >
              {courier.locationInfo || 'SUDAH DI LOKASI RESTO (Parkiran Depan)'}
            </Typography>
          </>
        ) : (
          <>
            <Navigation className="size-3.5 text-warning-main shrink-0 mt-0.5" />
            <Typography
              as="p"
              variant="xs"
              className="text-neutral-70 text-[11px] leading-tight"
            >
              {courier.locationInfo || 'Sedang menuju lokasi resto'}
            </Typography>
          </>
        )}
      </div>
    </div>
  );
}
