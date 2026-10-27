import { ArrowRight, Store } from 'lucide-react';

interface RestaurantCellProps {
  restaurantName: string;
  customerName: string;
  customerLocation: string;
}

export function RestaurantCell({
  restaurantName,
  customerName,
  customerLocation,
}: RestaurantCellProps) {
  return (
    <td className="px-4 py-3.5 align-middle">
      <div className="flex items-center gap-1.5">
        <Store
          className="size-3.5 shrink-0 text-driver-primary"
          aria-hidden="true"
        />
        <span className="text-xs font-bold text-neutral-100">
          {restaurantName}
        </span>
      </div>
      <div className="mt-0.5 flex items-center gap-1 text-[11px] text-neutral-70">
        <ArrowRight
          className="size-3 shrink-0 text-neutral-50"
          aria-hidden="true"
        />
        <span>
          {customerName} ({customerLocation})
        </span>
      </div>
    </td>
  );
}
