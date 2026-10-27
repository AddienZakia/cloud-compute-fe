import { Star } from 'lucide-react';
import type { DeliveryStatus } from '../../_schema/history-schema';

interface ReviewCellProps {
  status: DeliveryStatus;
  rating: number | null;
  tip: number | null;
}

export function ReviewCell({ status, rating, tip }: ReviewCellProps) {
  if (status === 'DIBATALKAN' || rating === null) {
    return (
      <td className="px-4 py-3.5 align-middle">
        <p className="text-[11px] italic text-neutral-60">
          - Tidak ada rating -
        </p>
      </td>
    );
  }

  return (
    <td className="px-4 py-3.5 align-middle">
      <div className="flex items-center gap-1">
        <Star
          className="size-3.5 fill-amber-400 text-amber-400"
          aria-hidden="true"
        />
        <span className="text-xs font-bold text-neutral-100">
          {rating.toFixed(1)}
        </span>
      </div>
      {tip !== null && tip > 0 && (
        <p className="mt-0.5 text-[11px] font-bold text-driver-primary">
          +Tip Rp {tip.toLocaleString('id-ID')}
        </p>
      )}
    </td>
  );
}
