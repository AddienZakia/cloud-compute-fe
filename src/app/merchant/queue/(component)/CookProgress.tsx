import Typography from '@/components/Typography';
import { Flame } from 'lucide-react';
import { CookingProgress } from '../_schema/order-schema';

type Props = {
  progress?: CookingProgress;
};

export default function CookProgress({ progress }: Props) {
  // TODO: Nilai progres (percent) dan elapsed nantinya dihitung secara dinamis dari timestamp pesanan dan target durasi memasak
  const elapsed = progress?.elapsed ?? '00:00';
  const estimate = progress?.estimate ?? 'Est 15:00 Mnt';
  const percent = Math.min(100, Math.max(0, progress?.percent ?? 0));

  return (
    <div className="flex flex-col gap-2 p-3 rounded-xl bg-neutral-20 border border-neutral-30">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 text-danger-main">
          <Flame className="size-4 shrink-0 stroke-[2.5]" />
          <Typography
            as="span"
            variant="xs"
            weight="bold"
            className="font-mono text-danger-main text-xs"
          >
            {elapsed} / {estimate}
          </Typography>
        </div>

        <Typography
          as="span"
          variant="xs"
          weight="bold"
          className="text-neutral-70 font-mono text-xs"
        >
          {percent}% Selesai
        </Typography>
      </div>

      {/* Progress Bar Merah */}
      <div
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Progres memasak ${percent}% selesai`}
        className="h-2 w-full rounded-full bg-neutral-30 overflow-hidden"
      >
        <div
          className="h-full rounded-full bg-danger-main transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
