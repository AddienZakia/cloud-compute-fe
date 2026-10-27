import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';
import { Construction } from 'lucide-react';

type Props = {
  title: string;
  subtitle?: string;
  className?: string;
};

export default function PlaceholderSection({
  title,
  subtitle = 'Akan dikerjakan pada tahap berikutnya',
  className,
}: Props) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center p-6 rounded-2xl border border-dashed border-neutral-40 bg-neutral-15/50 text-center gap-2',
        className,
      )}
    >
      <div className="flex items-center justify-center size-8 rounded-full bg-neutral-20 text-neutral-50">
        <Construction className="size-4" />
      </div>
      <div className="flex flex-col">
        <Typography
          as="p"
          variant="s"
          weight="bold"
          className="text-neutral-70"
        >
          {title}
        </Typography>
        <Typography as="span" variant="xs" className="text-neutral-50">
          {subtitle}
        </Typography>
      </div>
    </div>
  );
}
