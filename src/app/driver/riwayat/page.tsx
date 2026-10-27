import type { Metadata } from 'next';
import { DriverFinanceContainer } from './(container)/DriverFinanceContainer';

export const metadata: Metadata = {
  title: 'Riwayat Pengantaran & Pendapatan | Bungkusin Driver',
  description:
    'Arsip performa ritme operasional dan pencairan saldo tunai mitra pengemudi Bungkusin',
};

export default function DriverRiwayatPage() {
  return <DriverFinanceContainer />;
}
