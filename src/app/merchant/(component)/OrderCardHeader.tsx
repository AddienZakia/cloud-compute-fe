import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';
import { Clock } from 'lucide-react';
import { OrderStatus, statusVisualConfig } from '../_data/orders';

interface OrderCardHeaderProps {
  orderNumber: string;
  status: OrderStatus;
  timeInfo: string;
  isTimer?: boolean;
  totalPayment: string;
  isTotalPaymentPrimaryColor?: boolean;
}

export default function OrderCardHeader({
  orderNumber,
  status,
  timeInfo,
  isTimer,
  totalPayment,
  isTotalPaymentPrimaryColor,
}: OrderCardHeaderProps) {
  const config = statusVisualConfig[status];

  return (
    <div className="flex flex-wrap items-start justify-between gap-4 pb-3 border-b border-neutral-30">
      <div className="space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <Typography
            as="h3"
            variant="m"
            weight="bold"
            className="text-neutral-100 text-base"
          >
            {orderNumber}
          </Typography>
          <span
            className={cn(
              'px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide',
              config.badgeClass,
            )}
          >
            • {config.badgeLabel}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-neutral-60">
          {isTimer ? (
            <span className="flex items-center gap-1 text-danger-main font-semibold">
              <Clock className="size-3.5" />
              {timeInfo}
            </span>
          ) : (
            <span>{timeInfo}</span>
          )}
        </div>
      </div>

      <div className="text-right">
        <Typography as="span" variant="xs" className="text-neutral-60 block">
          Total Pembayaran
        </Typography>
        <Typography
          as="span"
          variant="hl"
          weight="bold"
          className={cn(
            'text-lg font-bold',
            isTotalPaymentPrimaryColor
              ? 'text-merchant-primary'
              : 'text-neutral-100',
          )}
        >
          {totalPayment}
        </Typography>
      </div>
    </div>
  );
}
