import Typography from '@/components/Typography';
import { formatRupiah } from '../_lib/format-rupiah';
import { OrderItem } from '../_schema/order-schema';

type Props = {
  items: OrderItem[];
};

export default function OrderItemList({ items }: Props) {
  return (
    <div className="flex flex-col gap-2.5">
      {items.map((item) => {
        const lineTotal = item.qty * item.price;

        return (
          <div
            key={item.id}
            className="flex items-start justify-between gap-2 text-sm"
          >
            <div className="flex items-start gap-2 min-w-0">
              <span className="shrink-0 px-1.5 py-0.5 rounded bg-neutral-20 border border-neutral-30 text-[11px] font-bold font-mono text-neutral-80 mt-0.5">
                {item.qty}x
              </span>
              <div className="flex flex-col min-w-0">
                <Typography
                  as="p"
                  variant="s"
                  weight="bold"
                  className="text-neutral-90 leading-tight"
                >
                  {item.name}
                </Typography>
                {item.variantNote && (
                  <Typography
                    as="p"
                    variant="xs"
                    className="text-neutral-60 text-[11px] mt-0.5"
                  >
                    {item.variantNote}
                  </Typography>
                )}
              </div>
            </div>

            <Typography
              as="span"
              variant="s"
              weight="bold"
              className="font-mono text-neutral-90 shrink-0 text-right"
            >
              {formatRupiah(lineTotal)}
            </Typography>
          </div>
        );
      })}
    </div>
  );
}
