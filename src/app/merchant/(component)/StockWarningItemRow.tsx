import Typography from '@/components/Typography';
import { MinusCircle, ShoppingCart } from 'lucide-react';
import { StockWarningItem } from '../_data/dashboard-right-column';

interface StockWarningItemRowProps {
  item: StockWarningItem;
  onAction: (item: StockWarningItem) => void;
}

export default function StockWarningItemRow({
  item,
  onAction,
}: StockWarningItemRowProps) {
  const isDanger = item.severity === 'danger';

  return (
    <div className="flex items-center justify-between gap-2.5 py-2">
      <div className="flex items-start gap-2.5 min-w-0">
        <div
          className={`flex items-center justify-center w-6 h-6 rounded-full shrink-0 mt-0.5 ${
            isDanger
              ? 'bg-danger-surface text-danger-main border border-danger-border'
              : 'bg-warning-surface text-warning-main border border-warning-border'
          }`}
        >
          {isDanger ? (
            <MinusCircle className="size-3.5" />
          ) : (
            <ShoppingCart className="size-3.5" />
          )}
        </div>

        <div className="space-y-0.5 min-w-0">
          <Typography
            as="h4"
            variant="s"
            weight="bold"
            className="text-neutral-90 truncate text-xs"
          >
            {item.name}
          </Typography>
          <p
            className={`text-[11px] leading-tight ${
              isDanger ? 'text-danger-main' : 'text-warning-main'
            }`}
          >
            {item.statusText}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onAction(item)}
        className="shrink-0 px-2.5 py-1 rounded-md border border-neutral-40 bg-neutral-10 text-neutral-80 hover:bg-neutral-20 text-[11px] font-semibold transition-colors cursor-pointer"
      >
        {item.actionLabel}
      </button>
    </div>
  );
}
