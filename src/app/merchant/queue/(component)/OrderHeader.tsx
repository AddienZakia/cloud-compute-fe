import Typography from '@/components/Typography';
import { Clock } from 'lucide-react';
import VipBadge from './VipBadge';

type Props = {
  id: string;
  customerName: string;
  isVip?: boolean;
  timeWib: string;
  timeAgo?: string;
  statusBadge?: string;
  statusBadgeVariant?: 'danger' | 'success' | 'warning';
};

const BADGES = {
  danger: 'bg-danger-surface text-danger-main border-danger-border/60',
  success: 'bg-success-surface text-success-main border-success-border/60',
  warning: 'bg-secondary-surface text-warning-main border-warning-border/60',
};

export default function OrderHeader({
  id,
  customerName,
  isVip,
  timeWib,
  timeAgo,
  statusBadge,
  statusBadgeVariant = 'danger',
}: Props) {
  // TODO: Teks 'x mnt lalu' (timeAgo) nantinya dihitung secara dinamis dari timestamp pesanan
  return (
    <div className="flex flex-col gap-1 border-b border-neutral-30 pb-3">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-1.5 flex-wrap">
          <Typography
            as="h3"
            variant="m"
            weight="bold"
            className="text-neutral-100 font-mono tracking-tight"
          >
            #{id}
          </Typography>
          {isVip && <VipBadge />}
          {statusBadge && (
            <span
              className={`px-2 py-0.5 rounded-full text-[11px] font-bold border ${BADGES[statusBadgeVariant]}`}
            >
              {statusBadge}
            </span>
          )}
        </div>

        <div className="flex flex-col items-end shrink-0">
          {timeAgo ? (
            <>
              <div className="flex items-center gap-1 text-danger-main">
                <Clock className="size-3.5 stroke-[2.5]" />
                <Typography as="span" variant="xs" weight="bold">
                  {timeAgo}
                </Typography>
              </div>
              <Typography
                as="span"
                variant="xs"
                className="text-neutral-60 font-mono text-[11px]"
              >
                {timeWib}
              </Typography>
            </>
          ) : (
            <div className="flex items-center gap-1 text-neutral-60">
              <Clock className="size-3.5 text-neutral-50" />
              <Typography
                as="span"
                variant="xs"
                weight="bold"
                className="font-mono text-neutral-70 text-xs"
              >
                {timeWib}
              </Typography>
            </div>
          )}
        </div>
      </div>

      <Typography as="p" variant="m" weight="bold" className="text-neutral-90">
        {customerName}
      </Typography>
    </div>
  );
}
