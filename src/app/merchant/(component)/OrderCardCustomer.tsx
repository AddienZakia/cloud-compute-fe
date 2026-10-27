import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';
import { User } from 'lucide-react';

interface OrderCardCustomerProps {
  name: string;
  deliveryType?: string;
  rightBadgeText: string;
  isRightBadgeSuccess?: boolean;
}

export default function OrderCardCustomer({
  name,
  deliveryType,
  rightBadgeText,
  isRightBadgeSuccess,
}: OrderCardCustomerProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-lg bg-neutral-20 border border-neutral-30">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-merchant-primary-surface text-merchant-primary shrink-0">
          <User className="size-3.5" />
        </div>
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <Typography
            as="span"
            variant="s"
            weight="bold"
            className="text-neutral-90"
          >
            {name}
          </Typography>
          {deliveryType && (
            <>
              <span className="text-neutral-40">•</span>
              <span className="text-neutral-60">{deliveryType}</span>
            </>
          )}
        </div>
      </div>

      <span
        className={cn(
          'text-xs font-semibold',
          isRightBadgeSuccess
            ? 'text-success-main font-bold'
            : 'text-neutral-70',
        )}
      >
        {rightBadgeText}
      </span>
    </div>
  );
}
