'use client';

import { usePathname } from 'next/navigation';
import * as React from 'react';
import TopbarActions from '../(component)/TopbarActions';
import TopbarBreadcrumb from '../(component)/TopbarBreadcrumb';
import TopbarKafkaStatus from '../(component)/TopbarKafkaStatus';
import { BreadcrumbItem, topbarData } from '../_data/topbar';

export default function MerchantTopbar() {
  const pathname = usePathname();

  const breadcrumbs = React.useMemo<BreadcrumbItem[]>(() => {
    const segments = (pathname || '').split('/').filter(Boolean);

    if (segments.length <= 1) {
      return [
        { label: topbarData.segmentMap.merchant, href: '/merchant' },
        { label: topbarData.defaultSubLabel, isCurrent: true },
      ];
    }

    const items: BreadcrumbItem[] = [
      { label: topbarData.segmentMap.merchant, href: '/merchant' },
    ];

    let currentPath = '/merchant';
    for (let i = 1; i < segments.length; i++) {
      const seg = segments[i];
      currentPath += `/${seg}`;
      const isLast = i === segments.length - 1;
      const label =
        topbarData.segmentMap[seg] ||
        seg.charAt(0).toUpperCase() + seg.slice(1);

      items.push({
        label,
        href: isLast ? undefined : currentPath,
        isCurrent: isLast,
      });
    }

    return items;
  }, [pathname]);

  const handleViewPublicStore = () => {
    window.open(topbarData.publicStore.href, '_blank');
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-neutral-30 bg-neutral-10 px-6">
      <TopbarBreadcrumb items={breadcrumbs} />
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
