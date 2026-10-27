import type { DeliveryItem } from '../_schema/driver-schema';

interface ManifestItemProps {
  item: DeliveryItem;
}

export function ManifestItem({ item }: ManifestItemProps) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-neutral-30 bg-neutral-20 p-3">
      <span className="flex h-6 min-w-6 items-center justify-center rounded-md bg-merchant-primary-surface px-1.5 text-xs font-bold text-merchant-primary">
        {item.qty}x
      </span>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold text-neutral-100">{item.name}</p>
        {item.notes && (
          <p className="mt-0.5 text-[11px] text-neutral-70 italic">
            "{item.notes}"
          </p>
        )}
      </div>
    </div>
  );
}
