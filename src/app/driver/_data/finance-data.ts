import type {
  DailyEarningsItem,
  DriverFinanceData,
} from '../_schema/finance-schema';
import { initialDriverData } from './driver-data';

// Saldo menggunakan satu sumber data yang sama dengan dashboard
export const initialWalletBalance = initialDriverData.balance.amount;

// TODO: Connect with actual Driver Finance & Earnings REST APIs
// ESTIMASI dari Figma, konfirmasi ke desainer: pembagian Tarif Dasar + Rush & Tip
export const dailyEarningsData: DailyEarningsItem[] = [
  {
    id: 'day-1',
    day: 'Sab',
    date: '18 Okt',
    baseFare: 110000,
    rushAndTip: 32000,
    total: 142000,
    isToday: false,
    totalFormatted: '142K',
  },
  {
    id: 'day-2',
    day: 'Min',
    date: '19 Okt',
    baseFare: 130000,
    rushAndTip: 38000,
    total: 168000,
    isToday: false,
    totalFormatted: '168K',
  },
  {
    id: 'day-3',
    day: 'Sen',
    date: '20 Okt',
    baseFare: 85000,
    rushAndTip: 25000,
    total: 110000,
    isToday: false,
    totalFormatted: '110K',
  },
  {
    id: 'day-4',
    day: 'Sel',
    date: '21 Okt',
    baseFare: 105000,
    rushAndTip: 30000,
    total: 135000,
    isToday: false,
    totalFormatted: '135K',
  },
  {
    id: 'day-5',
    day: 'Rab',
    date: '22 Okt',
    baseFare: 120000,
    rushAndTip: 34000,
    total: 154000,
    isToday: false,
    totalFormatted: '154K',
  },
  {
    id: 'day-6',
    day: 'Kam',
    date: '23 Okt',
    baseFare: 145000,
    rushAndTip: 44000,
    total: 189000,
    isToday: false,
    totalFormatted: '189K',
  },
  {
    id: 'day-7',
    day: 'Hari Ini',
    date: '24 Okt',
    baseFare: 170000,
    rushAndTip: 52000,
    total: 222000,
    isToday: true,
    totalFormatted: '222K',
  },
];

export const initialFinanceData: DriverFinanceData = {
  syncId: 'MODUL KEUANGAN DRIVER • Sinkronisasi Kafka Node-JKT-04',
  driverName: initialDriverData.profile.name,
  bank: {
    bankName: 'BCA',
    accountMasked: '•••• 9104',
  },
  weeklySummary: {
    completedTrips: 46,
    targetTrips: 50,
    averagePerTrip: 24347,
    rating: 4.98,
    bonusAmount: 150000,
  },
  rushIncentive: {
    amount: 75000,
    isActive: true,
    eventName: 'TEBET_LUNCH_MULTIPLIER',
    schedule: '11:00 - 14:00 WIB',
    rateRange:
      'Tambahan Rp 3.000 - Rp 5.000 per pesanan berhasil diselesaikan di jam sibuk kuliner siang & malam.',
    zone: 'Peak Rate Zona Tebet & Jaksel',
  },
  dailyEarnings: dailyEarningsData,
};
