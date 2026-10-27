import { Camera, Clock, Zap } from 'lucide-react';
import type { ElementType } from 'react';

export type InfoCardData = {
  id: string;
  icon: ElementType;
  iconVariant: 'warning' | 'secondary' | 'danger';
  title: string;
  description: string;
};

export const katalogInfoCards: InfoCardData[] = [
  {
    id: 'restok-otomatis',
    icon: Clock,
    iconVariant: 'warning',
    title: 'Jadwal Restok Otomatis',
    description:
      "Menu berstatus 'Habis Hari Ini' akan otomatis direset kembali 'Tersedia' setiap jam 06:00 WIB pembukaan resto.",
  },
  {
    id: 'sinkronisasi-driver',
    icon: Zap,
    iconVariant: 'secondary',
    title: 'Sinkronisasi Driver & App',
    description:
      'Perubahan ketersediaan stok porsi langsung tersinkron ke aplikasi Konsumen dan armada Driver seketika via Kafka event stream.',
  },
  {
    id: 'standar-foto',
    icon: Camera,
    iconVariant: 'danger',
    title: 'Standar Foto Makanan',
    description:
      'Gunakan foto aspek 1:1 resolusi minimal 800×800px dengan pencahayaan terang untuk meningkatkan rasio checkout hingga 42%.',
  },
];
