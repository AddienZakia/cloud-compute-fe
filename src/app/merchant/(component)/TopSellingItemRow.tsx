import Typography from '@/components/Typography';
import Image from 'next/image';
import { TopSellingItem } from '../_data/dashboard-right-column';

const rankBadgeColors: Record<number, string> = {
  1: 'bg-emerald-600 text-white',
  2: 'bg-amber-600 text-white',
  3: 'bg-orange-600 text-white',
};

export default function TopSellingItemRow({ item }: { item: TopSellingItem }) {
  const badgeColor = rankBadgeColors[item.rank] || 'bg-neutral-60 text-white';

  return (
    <div className="flex items-center gap-2.5 py-1.5">
      <div className="relative shrink-0">
        <div className="w-11 h-11 rounded-lg overflow-hidden border border-neutral-30 bg-neutral-20">
          <Image
            src={item.image}
            alt={item.name}
            width={44}
            height={44}
            className="w-full h-full object-cover"
          />
        </div>
        <span
          className={`absolute -top-1.5 -left-1.5 flex items-center justify-center w-4 h-4 rounded-full text-[10px] font-bold shadow-xs ${badgeColor}`}
        >
          {item.rank}
        </span>
      </div>

      <div className="flex-1 min-w-0 space-y-1">
        <Typography
          as="h4"
          variant="s"
          weight="bold"
          className="text-neutral-90 truncate text-xs"
        >
          {item.name}
        </Typography>

        <div className="flex items-center justify-between text-[11px]">
          <span className="text-neutral-60">{item.soldText}</span>
          <span className="font-bold text-merchant-primary">
            {item.revenueText}
          </span>
        </div>

        <div className="w-full h-1 rounded-full bg-neutral-30 overflow-hidden">
          <div
            className="h-full bg-merchant-primary rounded-full transition-all duration-300"
            style={{ width: `${item.percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
