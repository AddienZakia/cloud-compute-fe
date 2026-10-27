import Typography from '@/components/Typography';
import { salesChartMeta } from '../_data/sales-chart';

export default function SalesChartHeader() {
  return (
    <div className="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-neutral-30">
      <div className="space-y-1">
        <Typography
          as="h3"
          variant="m"
          weight="bold"
          className="text-neutral-100 text-base"
        >
          {salesChartMeta.title}
        </Typography>
        <p className="text-xs text-neutral-60">{salesChartMeta.subtitle}</p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span className="px-2.5 py-1 rounded-md bg-neutral-20 border border-neutral-30 text-[11px] font-semibold text-neutral-70">
          {salesChartMeta.badge}
        </span>

        <div className="flex items-center gap-3 text-xs text-neutral-70">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-merchant-primary" />
            <span>{salesChartMeta.legends.peak}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-40" />
            <span>{salesChartMeta.legends.average}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
