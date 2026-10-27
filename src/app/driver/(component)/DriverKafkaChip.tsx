import { Activity } from 'lucide-react';

interface DriverKafkaChipProps {
  consumer?: string;
  latency?: string;
}

export function DriverKafkaChip({
  consumer = 'CONSUMER-DRIVER-JKT-04',
  latency = '24ms WIB',
}: DriverKafkaChipProps) {
  return (
    <div className="hidden items-center gap-2 rounded-full border border-driver-border bg-driver-surface-muted px-3 py-1 text-xs text-neutral-80 md:flex">
      <Activity className="h-3.5 w-3.5 text-driver-status-success" />
      <span className="font-mono text-[11px] font-medium tracking-wide">
        KAFKA: {consumer} • {latency}
      </span>
    </div>
  );
}
