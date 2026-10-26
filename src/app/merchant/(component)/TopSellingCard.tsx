import Typography from '@/components/Typography';
import { Flame } from 'lucide-react';
import { topSellingItems } from '../_data/dashboard-right-column';
import TopSellingItemRow from './TopSellingItemRow';

export default function TopSellingCard() {
  return (
    <div className="rounded-xl bg-neutral-10 border border-neutral-30 p-4 shadow-xs space-y-3">
      <div className="flex items-center justify-between pb-1 border-b border-neutral-30">
        <div className="flex items-center gap-2">
          <Flame className="size-4 text-merchant-primary" />
          <Typography
            as="h3"
            variant="m"
            weight="bold"
            className="text-neutral-100"
          >
            Menu Terlaris Hari Ini
          </Typography>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-neutral-20 text-neutral-70 text-[10px] font-bold border border-neutral-30">
          Top 3 Resto
        </span>
      </div>

      <div className="divide-y divide-neutral-20">
        {topSellingItems.map((item) => (
          <TopSellingItemRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
