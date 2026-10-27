import { Flame } from 'lucide-react';
import type { RushIncentive } from '../../_schema/finance-schema';

interface RushIncentiveCardProps {
  incentive: RushIncentive;
}

export function RushIncentiveCard({ incentive }: RushIncentiveCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-driver-border bg-driver-card p-5 shadow-xs">
      <div>
        <div className="flex items-center justify-between gap-2">
          <p className="text-[11px] font-bold tracking-wider text-neutral-70 uppercase">
            Insentif Jam Sibuk (Rush Hour)
          </p>
          {incentive.isActive && (
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-driver-accent">
              <span className="h-2 w-2 rounded-full bg-driver-accent" />
              <span>AKTIF</span>
            </div>
          )}
        </div>

        <p className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-100">
          <span className="text-base font-bold text-driver-accent mr-1">
            Rp
          </span>
          {incentive.amount.toLocaleString('id-ID')}
        </p>

        <div className="mt-4 rounded-xl border border-driver-border bg-driver-surface p-3 text-xs">
          <div className="flex items-start gap-2">
            <Flame className="mt-0.5 h-4 w-4 shrink-0 text-driver-accent" />
            <div>
              <p className="font-bold text-neutral-90">{incentive.zone}</p>
              <p className="mt-1 leading-relaxed text-neutral-70">
                {incentive.rateRange}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-driver-border pt-3 text-xs">
        <div>
          <p className="text-[10px] text-neutral-60">Event:</p>
          <p className="font-mono text-[11px] font-semibold text-neutral-90">
            {incentive.eventName}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-driver-primary">
            {incentive.schedule}
          </p>
        </div>
      </div>
    </div>
  );
}
