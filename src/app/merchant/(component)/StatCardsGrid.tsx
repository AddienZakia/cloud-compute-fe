'use client';

import { useGetMerchantStats } from '@/hooks/merchant';
import {
  Bell,
  CheckCircle2,
  Clock,
  FileText,
  UtensilsCrossed,
} from 'lucide-react';
import { StatCardData, merchantStats } from '../_data/stats';
import StatCard from './StatCard';

export default function StatCardsGrid() {
  const { stats } = useGetMerchantStats();

  const dataToRender: StatCardData[] = stats
    ? [
        {
          id: 'pesanan-hari-ini',
          label: 'PESANAN HARI INI',
          value: String(stats.ordersToday),
          unit: 'pesanan',
          icon: FileText,
          iconVariant: 'neutral',
          trend: {
            direction: 'up',
            value: '+14.2%',
            label: 'live backend data',
          },
        },
        {
          id: 'perlu-konfirmasi',
          label: 'PERLU KONFIRMASI SEGERA',
          value: String(stats.waitingConfirmation),
          unit: 'pesanan baru',
          icon: Bell,
          iconVariant: 'warning',
          badge: {
            text: 'Batas respons < 3 menit',
          },
        },
        {
          id: 'sedang-dimasak',
          label: 'SEDANG DIMASAK',
          value: String(stats.preparing),
          unit: 'antrean dapur',
          icon: UtensilsCrossed,
          iconVariant: 'primary',
          footerInfo: {
            icon: Clock,
            text: 'Rerata waktu: 11 menit/pesanan',
          },
        },
        {
          id: 'pesanan-selesai',
          label: 'PESANAN SELESAI',
          value: String(stats.completed),
          unit: 'order',
          icon: CheckCircle2,
          iconVariant: 'success',
          footerInfo: {
            label: 'Pendapatan Kotor:',
            highlightValue: `Rp ${stats.grossRevenue.toLocaleString('id-ID')}`,
          },
        },
      ]
    : merchantStats;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {dataToRender.map((stat) => (
        <StatCard key={stat.id} data={stat} />
      ))}
    </div>
  );
}
