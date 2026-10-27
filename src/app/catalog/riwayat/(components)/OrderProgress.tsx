type OrderProgressProps = {
  estimatedArrival: string;
  estimatedMinutes: number;
  progressPercent: number;
};

export default function OrderProgress({
  estimatedArrival,
  estimatedMinutes,
  progressPercent,
}: OrderProgressProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 animate-pulse rounded-full bg-orange-400" />
        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
          Estimasi Tiba:{' '}
          <span className="text-orange-500">
            {estimatedArrival} ({estimatedMinutes} Menit)
          </span>
        </p>
      </div>

      {/* Progress bar */}
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${progressPercent}%`,
            background: 'linear-gradient(90deg, #F97316, #EF4444)',
          }}
        />
      </div>
    </div>
  );
}
