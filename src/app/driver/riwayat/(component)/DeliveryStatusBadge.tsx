import { CheckCircle2, XCircle } from 'lucide-react';
import type { DeliveryStatus } from '../../_schema/history-schema';

interface StatusConfig {
  label: string;
  className: string;
  Icon: typeof CheckCircle2;
}

const STATUS_CONFIGS: Record<DeliveryStatus, StatusConfig> = {
  SELESAI: {
    label: 'SELESAI',
    className:
      'border-driver-status-success/30 bg-driver-status-success-bg text-driver-status-success',
    Icon: CheckCircle2,
  },
  DIBATALKAN: {
    label: 'DIBATALKAN',
    className:
      'border-driver-status-danger/30 bg-driver-status-danger-bg text-driver-status-danger',
    Icon: XCircle,
  },
};

export function DeliveryStatusBadge({ status }: { status: DeliveryStatus }) {
  const config = STATUS_CONFIGS[status];
  const Icon = config.Icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${config.className}`}
    >
      <Icon className="size-3.5" aria-hidden="true" />
      {config.label}
    </span>
  );
}
