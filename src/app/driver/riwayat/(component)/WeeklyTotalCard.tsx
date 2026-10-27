import { Badge } from '@/components/ui/badge';
import { formatRupiah } from '../../_lib/format-rupiah';
import type { WeeklySummary } from '../../_schema/finance-schema';
import { WeeklyMetrics } from './WeeklyMetrics';

interface WeeklyTotalCardProps {
  totalWeekly: number;
  summary: WeeklySummary;
}

export function WeeklyTotalCard({
  totalWeekly,
  summary,
}: WeeklyTotalCardProps) {
  const progressPercent = Math.round(
    (summary.completedTrips / summary.targetTrips) * 100,
  );
  const remainingTrips = Math.max(
    0,
    summary.targetTrips - summary.completedTrips,
  );

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-driver-border bg-driver-card p-5 shadow-xs">
      <div>
        <div className="flex items-center justify-between gap-2">
          <p className="text-[11px] font-bold tracking-wider text-neutral-70 uppercase">
            Total Minggu Ini (Okt 2025)
          </p>
          <Badge className="border-driver-border bg-driver-surface text-[10px] font-bold text-neutral-80">
            {summary.completedTrips} / {summary.targetTrips} TRIP
          </Badge>
        </div>

        <p className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-100">
          {formatRupiah(totalWeekly)}
        </p>

        <div className="mt-3 space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-neutral-80">
              Progres Target Insentif Mingguan
            </span>
            <span className="font-bold text-driver-primary">
              {progressPercent}%
            </span>
          </div>

          <div className="h-2 w-full overflow-hidden rounded-full bg-driver-surface">
            <div
              className="h-full rounded-full bg-driver-primary transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <p className="text-[11px] text-neutral-70">
            Hanya butuh{' '}
            <strong className="text-neutral-100">
              {remainingTrips} trip lagi
            </strong>{' '}
            sebelum Minggu malam untuk bonus target{' '}
            {formatRupiah(summary.bonusAmount)}.
          </p>
        </div>
      </div>

      <WeeklyMetrics
        averagePerTrip={summary.averagePerTrip}
        rating={summary.rating}
      />
    </div>
  );
}
