import { Navigation, Package, Store } from 'lucide-react';
import { formatRupiah } from '../_lib/format-rupiah';
import type { NewOfferItem } from '../_schema/driver-schema';
import { OfferActions } from './OfferActions';
import { OfferCountdown } from './OfferCountdown';

interface OfferCardProps {
  offer: NewOfferItem;
  remainingSeconds: number;
}

export function OfferCard({ offer, remainingSeconds }: OfferCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-driver-border bg-driver-card p-4 shadow-xs">
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-xs font-bold text-neutral-80">
            {offer.orderNumber}
          </span>
          <OfferCountdown seconds={remainingSeconds} />
        </div>

        <div className="mt-3 flex items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <Store className="h-4 w-4 shrink-0 text-driver-primary" />
              <h4 className="truncate text-sm font-bold text-neutral-100">
                {offer.restaurantName}
              </h4>
            </div>
            <p className="mt-0.5 text-xs text-neutral-70">
              {offer.customerName}
            </p>
          </div>

          <p className="shrink-0 text-base font-extrabold text-neutral-100">
            {formatRupiah(offer.deliveryFee)}
          </p>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-driver-border pt-3 text-xs text-neutral-70">
          <div className="flex items-center gap-1">
            <Navigation className="h-3.5 w-3.5 text-neutral-60" />
            <span>{offer.tripDistance}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Package className="h-3.5 w-3.5 text-neutral-60" />
            <span>{offer.itemsSummary}</span>
          </div>
        </div>
      </div>

      <OfferActions
        offerId={offer.id}
        orderNumber={offer.orderNumber}
        isExpired={remainingSeconds <= 0}
      />
    </div>
  );
}
