'use client';

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
  const finance = initialFinanceData;
  const totalWeekly = finance.dailyEarnings.reduce(
    (sum, item) => sum + item.total,
    0,
  );

  return (
    <div className="space-y-6">
      <FinanceHeader syncId={finance.syncId} driverName={finance.driverName} />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <WalletCard balanceAmount={initialWalletBalance} bank={finance.bank} />
        <WeeklyTotalCard
          totalWeekly={totalWeekly}
          summary={finance.weeklySummary}
        />
        <RushIncentiveCard incentive={finance.rushIncentive} />
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <EarningsChart data={finance.dailyEarnings} />
        </div>
        <div className="hidden lg:block" aria-hidden="true" />
      </div>

      <HistorySection />
    </div>
  );
}
