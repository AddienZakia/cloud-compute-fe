import Typography from '@/components/Typography';
import { KeyRound } from 'lucide-react';

type Props = {
  pin?: string;
  isDriverArrived?: boolean;
};

export default function PickupPinBox({ pin, isDriverArrived }: Props) {
  // TODO: Verifikasi pencocokan PIN sebenarnya divalidasi oleh backend saat driver melakukan scan/input PIN, bukan di UI mock ini
  const label = isDriverArrived ? 'VERIFIKASI PIN KURIR' : 'PIN PICKUP';
  const displayPin = pin || '----';

  return (
    <div className="flex flex-col items-center justify-center gap-1 p-3 rounded-xl bg-danger-surface border border-danger-border/60 text-center">
      <div className="flex items-center gap-1.5 text-danger-main">
        <KeyRound className="size-3.5 stroke-[2.5]" />
        <Typography
          as="span"
          variant="xs"
          weight="bold"
          className="text-danger-main tracking-wider text-[11px]"
        >
          {label}
        </Typography>
      </div>

      <Typography
        as="p"
        variant="l"
        weight="bold"
        className="text-danger-main font-mono text-2xl tracking-[0.25em] pl-[0.25em]"
      >
        {displayPin}
      </Typography>
    </div>
  );
}
