import { Badge } from '@/components/ui/badge';
import { CheckCircle2, PackageCheck } from 'lucide-react';
import { formatRupiah } from '../_lib/format-rupiah';
import type { DeliveryItem } from '../_schema/driver-schema';
import { ManifestItem } from './ManifestItem';

interface OrderManifestProps {
  items: DeliveryItem[];
  sealStatus: string;
  deliveryFee: number;
}

export function OrderManifest({
  items,
  sealStatus,
  deliveryFee,
}: OrderManifestProps) {
  const totalQty = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="rounded-xl border border-driver-border bg-driver-card p-4 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-driver-border pb-3">
        <div className="flex items-center gap-2">
          <PackageCheck className="h-4 w-4 text-neutral-80" />
          <h3 className="text-xs font-bold tracking-wider text-neutral-90 uppercase">
            Manifest Pesanan ({totalQty} Item)
          </h3>
        </div>

        <Badge className="border-success-border bg-driver-status-success-bg text-[10px] font-semibold text-driver-status-success">
          <CheckCircle2 className="h-3 w-3" />
          {sealStatus}
        </Badge>
      </div>

      <div className="mt-3 space-y-2">
        {items.map((item) => (
          <ManifestItem key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between rounded-lg bg-driver-surface-muted px-3.5 py-2.5">
        <span className="text-xs font-semibold text-neutral-70">
          Ongkos Kirim Mitra
        </span>
        <span className="text-sm font-bold text-neutral-100">
          {formatRupiah(deliveryFee)}
        </span>
      </div>
    </div>
  );
}
