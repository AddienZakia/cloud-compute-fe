import { OrderStatus } from '../_schema/order-schema';

export type QueueColumnConfig = {
  status: OrderStatus;
  title: string;
  statusLabel: string;
  topBorderClass: string;
  dotColorClass: string;
  countPillBgClass: string;
  countPillTextClass: string;
  emptyText: string;
};

export const QUEUE_COLUMNS: QueueColumnConfig[] = [
  {
    status: 'PENDING',
    title: '1. Pesanan Baru Masuk',
    statusLabel: 'STATUS: PENDING',
    topBorderClass: 'border-t-4 border-merchant-primary',
    dotColorClass: 'bg-merchant-primary',
    countPillBgClass: 'bg-merchant-primary-surface',
    countPillTextClass: 'text-merchant-primary',
    emptyText: 'Belum ada pesanan di tahap ini.',
  },
  {
    status: 'PREPARING',
    title: '2. Sedang Dimasak',
    statusLabel: 'STATUS: PREPARING',
    topBorderClass: 'border-t-4 border-danger-main',
    dotColorClass: 'bg-danger-main',
    countPillBgClass: 'bg-danger-surface',
    countPillTextClass: 'text-danger-main',
    emptyText: 'Belum ada pesanan di tahap ini.',
  },
  {
    status: 'READY_FOR_PICKUP',
    title: '3. Siap Diambil Driver',
    statusLabel: 'STATUS: READY_FOR_PICKUP',
    topBorderClass: 'border-t-4 border-success-main',
    dotColorClass: 'bg-success-main',
    countPillBgClass: 'bg-success-surface',
    countPillTextClass: 'text-success-main',
    emptyText: 'Belum ada pesanan di tahap ini.',
  },
];
