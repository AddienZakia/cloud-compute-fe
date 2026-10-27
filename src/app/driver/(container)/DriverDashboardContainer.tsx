'use client';

import { PackageSearch } from 'lucide-react';
import { ActiveDeliveryCard } from '../(component)/ActiveDeliveryCard';
import { DriverBalanceCard } from '../(component)/DriverBalanceCard';
import { DriverProfileCard } from '../(component)/DriverProfileCard';
import { DriverStatsGrid } from '../(component)/DriverStatsGrid';
import { OfferSection } from '../(component)/OfferSection';
import { useDriverContext } from './DriverContext';

export function DriverDashboardContainer() {
  const { data } = useDriverContext();
  const deliveries = data.activeDeliveries;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div className="lg:col-span-7 xl:col-span-8">
          <DriverProfileCard profile={data.profile} />
        </div>
        <div className="lg:col-span-5 xl:col-span-4">
          <DriverBalanceCard balance={data.balance} />
        </div>
      </div>

      <DriverStatsGrid stats={data.stats} />

      <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-12">
        <section className="min-w-0 space-y-5 xl:col-span-8">
          {deliveries.length > 0 ? (
            deliveries.map((delivery) => (
              <ActiveDeliveryCard key={delivery.id} delivery={delivery} />
            ))
          ) : (
            <div className="rounded-xl border border-driver-border bg-driver-card p-8 text-center">
              <PackageSearch className="mx-auto h-8 w-8 text-neutral-50" />
              <p className="mt-2 text-xs font-medium text-neutral-70">
                Belum ada pengantaran aktif. Terima tawaran untuk memulai.
              </p>
            </div>
          )}
        </section>

        <aside className="min-w-0 xl:col-span-4">
          <OfferSection />
        </aside>
      </div>
    </div>
  );
}
