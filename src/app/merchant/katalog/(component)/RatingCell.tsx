import Typography from '@/components/Typography';
import { Star } from 'lucide-react';

export type RatingCellProps = {
  rating: number;
  jumlahUlasan: number;
};

export default function RatingCell({ rating, jumlahUlasan }: RatingCellProps) {
  // Hitung persentase progress bar performa dari rating (maksimal 5.0)
  const barWidth = Math.min(100, Math.max(0, (rating / 5) * 100));

  return (
    <div className="flex flex-col gap-1.5 min-w-[120px]">
      <div className="flex items-center gap-1.5">
        <Star className="size-3.5 fill-rating-bar text-rating-bar shrink-0" />
        <Typography
          as="span"
          variant="s"
          weight="bold"
          className="text-neutral-100"
        >
          {rating.toFixed(1)}
        </Typography>
        <Typography as="span" variant="xs" className="text-neutral-60">
          ({jumlahUlasan} terjual)
        </Typography>
      </div>

      {/* Progress Bar Performa */}
      <div className="w-24 h-1.5 rounded-full bg-neutral-30 overflow-hidden">
        <div
          className="h-full rounded-full bg-rating-bar"
          style={{ width: `${barWidth}%` }}
        />
      </div>
    </div>
  );
}
