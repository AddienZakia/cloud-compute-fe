export type HourlySalesPoint = {
  hour: string;
  todayVolume: number;
  averageVolume: number;
  isPeak?: boolean;
  isNow?: boolean;
};

export const hourlySalesData: HourlySalesPoint[] = [
  { hour: '09:00', todayVolume: 4, averageVolume: 5 },
  { hour: '10:00', todayVolume: 7, averageVolume: 8 },
  { hour: '11:00', todayVolume: 14, averageVolume: 9, isPeak: true },
  { hour: '12:00', todayVolume: 18, averageVolume: 11, isPeak: true },
  { hour: '13:00', todayVolume: 16, averageVolume: 10, isPeak: true },
  { hour: '14:00 (Now)', todayVolume: 8, averageVolume: 7, isNow: true },
  { hour: '15:00', todayVolume: 5, averageVolume: 6 },
  { hour: '16:00', todayVolume: 7, averageVolume: 8 },
  { hour: '17:00', todayVolume: 13, averageVolume: 9, isPeak: true },
  { hour: '18:00', todayVolume: 17, averageVolume: 11, isPeak: true },
];

export const salesChartMeta = {
  title: 'Grafik Penjualan Jam Sibuk (Peak Hours Event Rate)',
  subtitle: 'Frekuensi volume order masuk per jam & beban operasional dapur',
  badge: 'Kafka Stream Metrics',
  legends: {
    peak: 'Puncak Hari Ini',
    average: 'Rerata Harian',
  },
  insightText:
    'Insight Resto: Persiapkan stok bumbu ungkep dan potongan ayam sebelum jam 17:30 WIB untuk mengantisipasi lonjakan antrean malam.',
};
