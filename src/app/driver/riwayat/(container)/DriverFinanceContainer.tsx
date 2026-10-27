'use client';

import { useGetDriverStats } from '@/hooks/driver';
import { EarningsChart } from '../(component)/EarningsChart';
import { FinanceHeader } from '../(component)/FinanceHeader';
import { HistorySection } from '../(component)/HistorySection';
import { RushIncentiveCard } from '../(component)/RushIncentiveCard';
import { WalletCard } from '../(component)/WalletCard';
import { WeeklyTotalCard } from '../(component)/WeeklyTotalCard';
import {
  initialFinanceData,
  initialWalletBalance,
} from '../../_data/finance-data';

export function DriverFinanceContainer() {
  const { stats } = useGetDriverStats();

  const finance = initialFinanceData;
  const balanceAmount = stats?.totalEarnings || initialWalletBalance;

  const dailyEarnings =
    stats?.dailyEarnings && stats.dailyEarnings.length > 0
      ? stats.dailyEarnings.map((d, idx) => ({
          id: `day-${idx}`,
          day: d.day,
          date: `${idx + 18} Okt`,
          baseFare: Math.round(d.total * 0.8),
          rushAndTip: Math.round(d.total * 0.2),
          total: d.total,
          isToday: idx === stats.dailyEarnings.length - 1,
          totalFormatted: `Rp ${(d.total / 1000).toFixed(0)}rb`,
        }))
      : finance.dailyEarnings;

  const totalWeekly = dailyEarnings.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="space-y-6">
      <FinanceHeader syncId={finance.syncId} driverName={finance.driverName} />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <WalletCard balanceAmount={balanceAmount} bank={finance.bank} />
        <WeeklyTotalCard
          totalWeekly={totalWeekly}
          summary={finance.weeklySummary}
        />
        <RushIncentiveCard incentive={finance.rushIncentive} />
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <EarningsChart data={dailyEarnings} />
        </div>
        <div className="hidden lg:block" aria-hidden="true" />
      </div>

      <HistorySection />
    </div>
  );
}
