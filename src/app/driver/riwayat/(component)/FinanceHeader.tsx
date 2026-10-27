interface FinanceHeaderProps {
  syncId: string;
  driverName: string;
}

export function FinanceHeader({ syncId, driverName }: FinanceHeaderProps) {
  const parts = syncId.split('•').map((s) => s.trim());
  const category = parts[0] || 'MODUL KEUANGAN DRIVER';
  const nodeInfo = parts[1] || 'Sinkronisasi Kafka Node-JKT-04';

  return (
    <div className="space-y-2.5">
      <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-wider text-neutral-70 uppercase">
        <span>{category}</span>
        <span className="h-1.5 w-1.5 rounded-full bg-driver-accent" />
        <span className="font-medium text-neutral-60">{nodeInfo}</span>
      </div>

      <div>
        <h1 className="max-w-md text-3xl font-extrabold tracking-tight text-neutral-100 sm:text-4xl leading-tight">
          <span className="block">Riwayat Pengantaran &amp;</span>
          <span>Pendapatan</span>
        </h1>
        <p className="mt-1.5 text-xs text-neutral-70 max-w-xl">
          Arsip performa ritme operasional dan pencairan saldo tunai mitra
          pengemudi {driverName}.
        </p>
      </div>
    </div>
  );
}
