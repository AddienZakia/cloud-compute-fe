import type { HistoryOrderStatus, OrderStatus } from '../(container)/data';

type StatusBadgeProps = {
  status: OrderStatus | HistoryOrderStatus;
};

const statusMap: Record<
  OrderStatus | HistoryOrderStatus,
  { label: string; className: string }
> = {
  OUT_FOR_DELIVERY: {
    label: 'DALAM PENGANTARAN (OUT_FOR_DELIVERY)',
    className: 'bg-blue-100 text-blue-700 border border-blue-200',
  },
  COMPLETED: {
    label: 'Selesai (COMPLETED)',
    className: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
  },
  CANCELLED: {
    label: 'Dibatalkan (CANCELLED)',
    className: 'bg-slate-100 text-slate-500 border border-slate-200',
  },
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const { label, className } = statusMap[status];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold ${className}`}
    >
      {label}
    </span>
  );
}
