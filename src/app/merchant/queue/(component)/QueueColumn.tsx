import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';
import { QueueColumnConfig } from '../_data/columns-data';
import { Order } from '../_schema/order-schema';
import ColumnHeader from './ColumnHeader';
import OrderCard from './OrderCard';

type Props = {
  config: QueueColumnConfig;
  orders: Order[];
};

export default function QueueColumn({ config, orders }: Props) {
  const columnOrders = orders.filter((o) => o.status === config.status);
  const count = columnOrders.length;

  return (
    <section
      aria-label={config.title}
      className={cn(
        'flex flex-col bg-neutral-20 rounded-xl border border-neutral-30 shadow-xs overflow-hidden',
        config.topBorderClass,
      )}
    >
      <ColumnHeader config={config} count={count} />

      <div className="flex flex-col gap-3 p-3 flex-1 min-h-[320px]">
        {count === 0 ? (
          <div className="flex-1 flex items-center justify-center p-8 text-center bg-neutral-10/50 rounded-lg border border-dashed border-neutral-30">
            <Typography as="p" variant="s" className="text-neutral-50">
              {config.emptyText}
            </Typography>
          </div>
        ) : (
          columnOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))
        )}
      </div>
    </section>
  );
}
