import { Clock } from 'lucide-react';

interface OfferCountdownProps {
  seconds: number;
}

export function OfferCountdown({ seconds }: OfferCountdownProps) {
  return (
    <div className="flex items-center gap-1.5 rounded-full border border-danger-border bg-danger-surface px-2.5 py-1 text-xs font-bold text-danger-main">
      <Clock className="h-3.5 w-3.5 shrink-0" />
      <span className="font-mono tabular-nums">{seconds}s</span>
    </div>
  );
}
