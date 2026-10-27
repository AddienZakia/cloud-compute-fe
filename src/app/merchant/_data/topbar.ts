export const topbarData = {
  kafka: {
    label: 'Kafka Stream Sync 12ms WIB',
    isLive: true,
  },
  publicStore: {
    label: 'Lihat Tampilan Toko Publik',
    href: '/merchant/preview',
  },
  user: {
    name: 'Pak Mulyono',
    initials: 'PM',
  },
  segmentMap: {
    merchant: 'Merchant',
    katalog: 'Kelola Makanan',
    detail: 'Detail Merchant',
    antrian: 'Antrian Pesanan',
    riwayat: 'Riwayat Pesanan',
    pengaturan: 'Pengaturan Toko',
    laporan: 'Laporan',
  } as Record<string, string>,
  defaultSubLabel: 'Portal Workspace',
};

export type BreadcrumbItem = {
  label: string;
  href?: string;
  isCurrent?: boolean;
};

export const staticBreadcrumbs: BreadcrumbItem[] = [
  { label: 'Merchant', href: '/merchant' },
  { label: 'Resto Workspace', isCurrent: true },
];
