'use client';
import TopbarActions from '../(component)/TopbarActions';
import TopbarBreadcrumb from '../(component)/TopbarBreadcrumb';
import TopbarKafkaStatus from '../(component)/TopbarKafkaStatus';
import { staticBreadcrumbs, topbarData } from '../_data/topbar';

export default function MerchantTopbar() {
  const handleViewPublicStore = () => {
    window.open(topbarData.publicStore.href, '_blank');
  };

  return (
    <header className="border-neutral-30 bg-neutral-10 sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b px-6">
      <TopbarBreadcrumb items={staticBreadcrumbs} />
      <TopbarKafkaStatus
        label={topbarData.kafka.label}
        isLive={topbarData.kafka.isLive}
      />
      <TopbarActions
        publicStoreLabel={topbarData.publicStore.label}
        userName={topbarData.user.name}
        userInitials={topbarData.user.initials}
        onViewPublicStore={handleViewPublicStore}
      />
    </header>
  );
}
