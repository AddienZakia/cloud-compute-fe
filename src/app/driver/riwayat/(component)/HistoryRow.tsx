import { toast } from 'sonner';
import type { DeliveryHistoryItem } from '../../_schema/history-schema';
import { DeliveryStatusBadge } from './DeliveryStatusBadge';
import { EarningCell } from './EarningCell';
import { OrderIdCell } from './OrderIdCell';
import { RestaurantCell } from './RestaurantCell';
import { ReviewCell } from './ReviewCell';

export function HistoryRow({ item }: { item: DeliveryHistoryItem }) {
  const handleDownloadSlip = () => {
    toast.info(`E-Slip pesanan ${item.id} berhasil diunduh`);
  };

  return (
    <tr className="border-b border-driver-border/70 transition-colors hover:bg-driver-surface/40">
      <OrderIdCell id={item.id} time={item.time} />
      <RestaurantCell
        restaurantName={item.restaurantName}
        customerName={item.customerName}
        customerLocation={item.customerLocation}
      />
      <td className="px-4 py-3.5 align-middle">
        <DeliveryStatusBadge status={item.status} />
      </td>
      <ReviewCell status={item.status} rating={item.rating} tip={item.tip} />
      <EarningCell
        earning={item.earning}
        earningNote={item.earningNote}
        status={item.status}
      />
      <td className="px-4 py-3.5 text-right align-middle">
        <button
          type="button"
          onClick={handleDownloadSlip}
          aria-label={`E-Slip pesanan ${item.id}`}
          className="rounded-md border border-neutral-40 bg-neutral-10 px-3 py-1 text-xs font-semibold text-neutral-80 shadow-2xs transition-colors hover:bg-neutral-20 focus-visible:outline-2 focus-visible:outline-driver-primary"
        >
          E-Slip
        </button>
      </td>
    </tr>
  );
}
