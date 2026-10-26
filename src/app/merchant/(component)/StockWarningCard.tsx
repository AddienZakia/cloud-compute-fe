import Typography from '@/components/Typography';
import { AlertTriangle } from 'lucide-react';
import { StockWarningItem } from '../_data/dashboard-right-column';
import StockWarningItemRow from './StockWarningItemRow';

interface StockWarningCardProps {
  items: StockWarningItem[];
  onAction: (item: StockWarningItem) => void;
}

export default function StockWarningCard({
  items,
  onAction,
}: StockWarningCardProps) {
  return (
    <div className="rounded-xl bg-neutral-10 border border-neutral-30 p-4 shadow-xs space-y-3">
      <div className="flex items-center justify-between pb-1 border-b border-neutral-30">
        <div className="flex items-center gap-2">
          <AlertTriangle className="size-4 text-danger-main" />
          <Typography
            as="h3"
            variant="m"
            weight="bold"
            className="text-neutral-100"
          >
            Peringatan Stok Menu
          </Typography>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-danger-surface text-danger-main text-[10px] font-bold border border-danger-border">
          {items.length} Perhatian
        </span>
      </div>

      <div className="divide-y divide-neutral-20">
        {items.map((item) => (
          <StockWarningItemRow key={item.id} item={item} onAction={onAction} />
        ))}
      </div>
    </div>
  );
}
