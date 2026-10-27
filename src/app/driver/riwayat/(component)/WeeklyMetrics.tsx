import { formatRupiah } from '../../_lib/format-rupiah';

interface WeeklyMetricsProps {
  averagePerTrip: number;
  rating: number;
}

export function WeeklyMetrics({ averagePerTrip, rating }: WeeklyMetricsProps) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-2 border-t border-driver-border pt-3">
      <div className="rounded-xl bg-driver-surface p-2.5">
        <p className="text-[10px] font-medium text-neutral-70 uppercase">
          Rata-rata / Trip
        </p>
        <p className="mt-0.5 text-xs font-bold text-neutral-100">
          {formatRupiah(averagePerTrip)}
        </p>
      </div>
      <div className="rounded-xl bg-driver-surface p-2.5">
        <p className="text-[10px] font-medium text-neutral-70 uppercase">
          Kepuasan Pemesan
        </p>
        <p className="mt-0.5 text-xs font-bold text-neutral-100">
          <span className="text-driver-accent mr-1">★</span>
          {rating}
        </p>
      </div>
    </div>
  );
}
