import Typography from '@/components/Typography';
import { Bike, Search } from 'lucide-react';
import { CourierInfo } from '../_schema/order-schema';

type Props = {
  courier?: CourierInfo;
};

export default function CourierInfoBox({ courier }: Props) {
  const hasCourier = Boolean(courier?.name && courier.name.trim().length > 0);

  return (
    <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-neutral-20 border border-neutral-30 text-xs">
      {hasCourier ? (
        <>
          <div className="flex items-center justify-center size-6 rounded-full bg-warning-surface text-warning-main shrink-0 border border-warning-border/40">
            <Bike className="size-3.5 stroke-[2.2]" />
          </div>
          <div className="flex items-center gap-1 min-w-0 flex-wrap text-xs">
            <Typography
              as="span"
              variant="xs"
              weight="bold"
              className="text-neutral-90"
            >
              {courier?.name}:
            </Typography>
            <Typography as="span" variant="xs" className="text-neutral-70">
              {courier?.locationInfo || 'Menuju resto'}
            </Typography>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center size-6 rounded-full bg-neutral-30 text-neutral-60 shrink-0">
            <Search className="size-3.5 stroke-[2] animate-pulse" />
          </div>
          <Typography
            as="span"
            variant="xs"
            className="text-neutral-60 italic text-xs leading-tight"
          >
            {courier?.locationInfo || 'Sistem mencari mitra kurir terdekat...'}
          </Typography>
        </>
      )}
    </div>
  );
}
