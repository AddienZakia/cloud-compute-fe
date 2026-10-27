import Typography from '@/components/Typography';
import { OrderItem } from '../_data/orders';

export default function OrderCardItems({ items }: { items: OrderItem[] }) {
  return (
    <div className="space-y-1.5 py-1">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between text-xs text-neutral-80"
        >
          <div className="flex items-center gap-2">
            <span className="font-bold text-neutral-90 shrink-0">
              {item.quantity}x
            </span>
            <span className="text-neutral-80 line-clamp-1">{item.name}</span>
          </div>
          <Typography
            as="span"
            variant="xs"
            weight="bold"
            className="text-neutral-70 shrink-0 ml-3"
          >
            {item.price}
          </Typography>
        </div>
      ))}
    </div>
  );
}
