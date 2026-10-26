import {
  Bell,
  CheckCircle2,
  Clock,
  FileText,
  UtensilsCrossed,
} from 'lucide-react';
import * as React from 'react';

export type StatCardData = {
  id: string;
  label: string;
  value: string;
  unit: string;
  icon: React.ElementType;
  iconVariant: 'neutral' | 'warning' | 'primary' | 'success';
  trend?: {
    direction: 'up' | 'down';
    value: string;
    label: string;
  };
  badge?: {
    text: string;
  };
  footerInfo?: {
    icon?: React.ElementType;
    label?: string;
    highlightValue?: string;
    text?: string;
  };
};

export const merchantStats: StatCardData[] = [
  {
    id: 'pesanan-hari-ini',
    label: 'PESANAN HARI INI',
    value: '38',
    unit: 'pesanan',
    icon: FileText,
    iconVariant: 'neutral',
    trend: {
      direction: 'up',
      value: '+14.2%',
      label: 'vs kemarin',
    },
  },
  {
    id: 'perlu-konfirmasi',
    label: 'PERLU KONFIRMASI SEGERA',
    value: '4',
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
    value: '18',
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
    value: '28',
    unit: 'order',
    icon: CheckCircle2,
    iconVariant: 'success',
    footerInfo: {
      label: 'Pendapatan Kotor:',
      highlightValue: 'Rp 3.840.000',
    },
  },
];
