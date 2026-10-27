import { cn } from '@/lib/utils';

type Props = {
  count: number | string;
  variant: 'tab' | 'column';
  isActiveTab?: boolean;
  className?: string;
};

export default function CountPill({
  count,
  variant,
  isActiveTab = false,
  className,
}: Props) {
  if (variant === 'tab') {
    return (
      <span
        className={cn(
          'inline-flex items-center justify-center text-xs font-bold px-2 py-0.5 rounded-full transition-colors',
          isActiveTab
            ? 'bg-neutral-10 text-danger-main'
            : 'bg-neutral-30 text-neutral-80',
          className,
        )}
      >
        {count}
      </span>
    );
  }

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center text-xs font-bold px-2.5 py-1 rounded-full',
        className,
      )}
    >
      {count} Pesanan
    </span>
  );
}
