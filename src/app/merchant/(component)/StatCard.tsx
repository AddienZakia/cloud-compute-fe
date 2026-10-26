import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { StatCardData } from '../_data/stats';

const iconVariants = {
  neutral: 'bg-neutral-30 text-neutral-80',
  warning: 'bg-warning-surface text-warning-main border border-warning-border',
  primary:
    'bg-merchant-primary-surface text-merchant-primary border border-merchant-primary-border',
  success: 'bg-success-surface text-success-main border border-success-border',
};

export default function StatCard({ data }: { data: StatCardData }) {
  const Icon = data.icon;
  const isWarning = data.iconVariant === 'warning';
  const ArrowIcon =
    data.trend?.direction === 'up' ? ArrowUpRight : ArrowDownRight;

  return (
    <div className="flex flex-col justify-between p-4 rounded-xl bg-neutral-10 border border-neutral-30 shadow-xs h-full">
      <div className="flex items-center justify-between">
        <Typography
          as="span"
          variant="xs"
          weight="bold"
          className="text-neutral-60 tracking-wider"
        >
          {data.label}
        </Typography>
        <div
          className={cn(
            'flex items-center justify-center w-7 h-7 rounded-lg shrink-0',
            iconVariants[data.iconVariant],
          )}
        >
          <Icon className="size-4" />
        </div>
      </div>

      <div className="flex items-baseline gap-1.5 my-3">
        <Typography
          as="span"
          variant="hl"
          weight="bold"
          className={isWarning ? 'text-warning-main' : 'text-neutral-100'}
        >
          {data.value}
        </Typography>
        <Typography as="span" variant="s" className="text-neutral-60">
          {data.unit}
        </Typography>
      </div>

      <div className="mt-auto pt-2.5 border-t border-neutral-20 h-7 flex items-center">
        {data.trend && (
          <div className="flex items-center gap-1 text-xs">
            <span className="flex items-center font-bold text-success-main">
              <ArrowIcon className="size-3.5" />
              {data.trend.value}
            </span>
            <span className="text-neutral-60">{data.trend.label}</span>
          </div>
        )}

        {data.badge && (
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-warning-surface border border-warning-border">
            <span className="w-1.5 h-1.5 rounded-full bg-warning-main" />
            <span className="text-[11px] font-bold text-warning-main">
              {data.badge.text}
            </span>
          </div>
        )}

        {data.footerInfo && (
          <div className="flex items-center gap-1.5 text-xs text-neutral-60">
            {data.footerInfo.icon && (
              <data.footerInfo.icon className="size-3.5 text-neutral-50 shrink-0" />
            )}
            {data.footerInfo.label && <span>{data.footerInfo.label}</span>}
            {data.footerInfo.highlightValue && (
              <span className="font-bold text-success-main">
                {data.footerInfo.highlightValue}
              </span>
            )}
            {data.footerInfo.text && <span>{data.footerInfo.text}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
