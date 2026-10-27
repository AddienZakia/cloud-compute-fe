export function ChartLegend() {
  return (
    <div className="flex items-center gap-4 text-xs font-medium text-neutral-80">
      <div className="flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-xs bg-driver-primary-dark" />
        <span>Tarif Dasar</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-xs bg-driver-accent" />
        <span>Rush & Tip</span>
      </div>
    </div>
  );
}
