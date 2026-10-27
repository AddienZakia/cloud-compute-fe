interface DriverArmadaCardProps {
  vehicleType?: string;
  fleetStatus?: string;
}

export function DriverArmadaCard({
  vehicleType = 'Motor',
  fleetStatus = 'Aktif Terhubung',
}: DriverArmadaCardProps) {
  return (
    <div className="mx-3 my-2 rounded-xl border border-driver-border bg-driver-surface-muted p-3 shadow-2xs">
      <div className="flex items-center gap-2.5">
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-driver-accent shrink-0" />
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-bold tracking-wider text-neutral-70 uppercase">
            Status Armada
          </p>
          <p className="truncate text-xs font-bold text-neutral-100">
            {vehicleType} • {fleetStatus}
          </p>
        </div>
      </div>
    </div>
  );
}
