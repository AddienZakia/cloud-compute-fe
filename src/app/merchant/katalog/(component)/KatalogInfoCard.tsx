import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';
import { InfoCardData } from '../_data/info-cards';

const iconVariants = {
  warning: 'bg-warning-surface text-warning-main border border-warning-border',
  secondary:
    'bg-secondary-surface text-secondary-pressed border border-secondary-border',
  danger: 'bg-danger-surface text-danger-main border border-danger-border',
} as const;

export type KatalogInfoCardProps = {
  data: InfoCardData;
};

export default function KatalogInfoCard({ data }: KatalogInfoCardProps) {
  const Icon = data.icon;

  return (
    <div className="flex items-start gap-3.5 p-4 rounded-xl bg-neutral-10 border border-neutral-30 shadow-xs h-full">
      <div
        className={cn(
          'flex items-center justify-center size-9 rounded-lg shrink-0 mt-0.5',
          iconVariants[data.iconVariant],
        )}
      >
        <Icon className="size-4" />
      </div>

      <div className="flex flex-col gap-1">
        <Typography
          as="h3"
          variant="s"
          weight="bold"
          className="text-neutral-100"
        >
          {data.title}
        </Typography>
        <Typography
          as="p"
          variant="xs"
          className="text-neutral-60 leading-relaxed"
        >
          {data.description}
        </Typography>
      </div>
    </div>
  );
}
