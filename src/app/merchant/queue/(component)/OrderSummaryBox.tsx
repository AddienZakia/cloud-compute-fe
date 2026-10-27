import Typography from '@/components/Typography';
import { Package } from 'lucide-react';
import { formatRupiah } from '../_lib/format-rupiah';
import { OrderItem } from '../_schema/order-schema';
import OrderItemList from './OrderItemList';

type Props = {
  items: OrderItem[];
  total: number;
  packagingInfo?: string;
};

export default function OrderSummaryBox({
  items,
  total,
  packagingInfo,
}: Props) {
  return (
    <div className="flex flex-col gap-2.5 p-3 rounded-xl bg-neutral-20 border border-neutral-30">
      <OrderItemList items={items} />

      <div className="flex items-center justify-between gap-2 pt-2 border-t border-neutral-30/70 text-xs flex-wrap">
        {packagingInfo ? (
          <div className="flex items-center gap-1.5 text-neutral-80 bg-neutral-10 border border-neutral-30 px-2 py-0.5 rounded-md font-mono text-[11px] font-bold">
            <Package className="size-3.5 text-warning-main" />
            <span>{packagingInfo}</span>
          </div>
        ) : (
          <span />
        )}

        <div className="flex items-baseline gap-1.5 ml-auto">
          <Typography
            as="span"
            variant="xs"
            className="text-neutral-60 font-mono text-[11px]"
          >
            Total:
          </Typography>
          <Typography
            as="span"
            variant="s"
            weight="bold"
            className="font-mono text-neutral-100"
          >
            {formatRupiah(total)}
          </Typography>
        </div>
      </div>
    </div>
  );
}
