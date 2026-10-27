import { cn } from '@/lib/utils';

export type CategoryChipProps = {
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
};

export default function CategoryChip({
  label,
  count,
  isActive,
  onClick,
}: CategoryChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs transition-colors cursor-pointer shrink-0',
        isActive
          ? 'bg-merchant-primary text-neutral-10 font-bold shadow-xs'
          : 'bg-neutral-20 text-neutral-80 border border-neutral-30 hover:bg-neutral-30 font-medium',
      )}
    >
      <span>{label}</span>
      <span
        className={cn(
          'text-[11px]',
          isActive ? 'text-neutral-20' : 'text-neutral-60',
        )}
      >
        ({count})
      </span>
    </button>
  );
}
