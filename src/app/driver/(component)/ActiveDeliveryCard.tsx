import type { ActiveDelivery } from '../_schema/driver-schema';
import { DeliveryHeader } from './DeliveryHeader';
import { OrderManifest } from './OrderManifest';
import { PinVerifyBar } from './PinVerifyBar';
import { RoutePointCard } from './RoutePointCard';

interface ActiveDeliveryCardProps {
  delivery: ActiveDelivery;
}

export function ActiveDeliveryCard({ delivery }: ActiveDeliveryCardProps) {
  return (
    <div className="rounded-2xl border border-neutral-30 bg-neutral-10 shadow-xs">
      <DeliveryHeader delivery={delivery} />

      <div className="space-y-5 p-5">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <RoutePointCard point={delivery.pickupPoint} />
          <RoutePointCard point={delivery.dropoffPoint} />
        </div>

        <OrderManifest
          items={delivery.items}
          sealStatus={delivery.sealStatus}
          deliveryFee={delivery.deliveryFee}
        />

        <PinVerifyBar orderId={delivery.id} status={delivery.status} />
      </div>
    </div>
  );
}
