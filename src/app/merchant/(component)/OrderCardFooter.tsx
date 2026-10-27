import { Bike, FileText, PhoneCall } from 'lucide-react';
import { Order, OrderActionKey } from '../_data/orders';

interface OrderCardFooterProps {
  customerNote?: string;
  driverInfo?: Order['driverInfo'];
  actions: Order['actions'];
  onAction: (key: OrderActionKey) => void;
}

export default function OrderCardFooter({
  customerNote,
  driverInfo,
  actions,
  onAction,
}: OrderCardFooterProps) {
  return (
    <div className="space-y-3 pt-2">
      {customerNote && (
        <div className="flex items-start gap-2 p-2.5 rounded-lg bg-warning-surface border border-warning-border text-xs text-neutral-80">
          <FileText className="size-4 text-warning-main shrink-0 mt-0.5" />
          <span>{customerNote}</span>
        </div>
      )}

      {driverInfo && (
        <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-lg bg-neutral-20 border border-neutral-30 text-xs">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-success-surface text-success-main border border-success-border shrink-0">
              <Bike className="size-3.5" />
            </div>
            <div>
              {driverInfo.driverName && (
                <div className="font-bold text-neutral-90">
                  {driverInfo.driverName}
                </div>
              )}
              {driverInfo.estimatedArrival && (
                <div className="text-success-main font-semibold">
                  {driverInfo.estimatedArrival}
                </div>
              )}
              {driverInfo.message && (
                <div className="text-neutral-70">{driverInfo.message}</div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-end gap-2.5 pt-1">
        {actions.map((act) => {
          const isPrimary = act.variant === 'primary';
          const isDanger = act.variant === 'danger-outlined';

          return (
            <button
              key={act.key}
              type="button"
              onClick={() => onAction(act.key)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                isPrimary
                  ? 'bg-merchant-primary text-white hover:bg-merchant-primary-hover shadow-xs'
                  : isDanger
                    ? 'border border-neutral-40 bg-neutral-10 text-neutral-80 hover:bg-danger-surface hover:text-danger-main hover:border-danger-border'
                    : 'border border-neutral-40 bg-neutral-10 text-neutral-80 hover:bg-order-ready-surface hover:text-order-ready hover:border-order-ready-border'
              }`}
            >
              {act.key === 'CALL_DRIVER' && (
                <PhoneCall className="inline size-3.5 mr-1.5" />
              )}
              {act.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
