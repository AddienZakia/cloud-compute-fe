'use client';

import { Badge } from '@/components/ui/badge';
import { PackageSearch } from 'lucide-react';
import { useDriverContext } from '../(container)/DriverContext';
import { useOfferTicker } from '../(container)/useOfferTicker';
import { OfferCard } from './OfferCard';
import { SurgeNotice } from './SurgeNotice';

export function OfferSection() {
  const { data, expireOffer } = useDriverContext();
  const offers = data.newOffers;
  const remainingSeconds = useOfferTicker(offers, expireOffer);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-driver-primary" />
          <h2 className="text-base font-bold text-neutral-100">
            Tawaran Baru Masuk
          </h2>
        </div>

        <Badge className="border-driver-border bg-driver-surface text-xs font-bold text-driver-primary">
          {offers.length} Order Dekat
        </Badge>
      </div>

      <SurgeNotice surge={data.surgeNotice} />

      {offers.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {offers.map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              remainingSeconds={
                remainingSeconds[offer.id] ?? offer.initialSeconds
              }
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-driver-border bg-driver-card p-8 text-center">
          <PackageSearch className="mx-auto h-8 w-8 text-neutral-50" />
          <p className="mt-2 text-xs font-medium text-neutral-70">
            Belum ada tawaran baru. Tetap online untuk menerima order di sekitar
            Anda.
          </p>
        </div>
      )}
    </div>
  );
}
