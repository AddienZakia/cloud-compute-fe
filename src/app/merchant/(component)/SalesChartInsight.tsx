import { Sparkles } from 'lucide-react';
import { salesChartMeta } from '../_data/sales-chart';

export default function SalesChartInsight() {
  return (
    <div className="flex items-start gap-2.5 p-3 rounded-lg bg-merchant-primary-surface border border-merchant-primary-border text-xs text-neutral-90">
      <Sparkles className="size-4 text-merchant-primary shrink-0 mt-0.5" />
      <p className="leading-relaxed">{salesChartMeta.insightText}</p>
    </div>
  );
}
