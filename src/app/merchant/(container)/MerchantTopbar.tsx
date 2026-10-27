'use client';

import { useGetProfile } from '@/hooks/auth';
import TopbarActions from '../(component)/TopbarActions';
import TopbarBreadcrumb from '../(component)/TopbarBreadcrumb';
import { staticBreadcrumbs } from '../_data/topbar';

export default function MerchantTopbar() {
  const { profile } = useGetProfile();

  const userName = profile?.name || 'Merchant User';
  const userInitials = userName
    .split(' ')
    .map((w: string) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const handleViewPublicStore = () => {
    if (profile?.id) {
      window.open(`/merchant/detail?id=${profile.id}`, '_blank');
    } else {
      window.open('/', '_blank');
    }
  };

  return (
    <header className="border-neutral-30 bg-neutral-10 sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b px-6">
      <TopbarBreadcrumb items={staticBreadcrumbs} />
      <TopbarActions
        publicStoreLabel="Lihat Toko Publik"
        userName={userName}
        userInitials={userInitials}
        onViewPublicStore={handleViewPublicStore}
      />
    </header>
  );
}
