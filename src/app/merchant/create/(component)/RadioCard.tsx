import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';
import { RadioOption } from '../_data/pricing-data';

type Props = {
  name: string;
  option: RadioOption;
  isSelected: boolean;
  onSelect: (value: string) => void;
};

export default function RadioCard({
  name,
  option,
  isSelected,
  onSelect,
}: Props) {
  return (
    <label
      className={cn(
        'relative flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all',
        isSelected
          ? 'border-merchant-primary bg-merchant-primary/5 ring-1 ring-merchant-primary'
          : 'border-neutral-30 bg-neutral-10 hover:border-neutral-40 hover:bg-neutral-20/40',
      )}
    >
      <input
        type="radio"
        name={name}
        value={option.id}
        checked={isSelected}
        onChange={() => onSelect(option.id)}
        className="sr-only"
      />

      {/* Radio circle indicator */}
      <div
        className={cn(
          'size-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0 transition-colors',
          isSelected ? 'border-merchant-primary' : 'border-neutral-40',
        )}
      >
        {isSelected && (
          <div className="size-2 rounded-full bg-merchant-primary" />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <Typography
            as="span"
            variant="s"
            weight="bold"
            className={isSelected ? 'text-neutral-100' : 'text-neutral-90'}
          >
            {option.title}
          </Typography>
          {option.badge && (
            <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-merchant-primary/10 text-merchant-primary border border-merchant-primary/30">
              {option.badge}
            </span>
          )}
        </div>
        <Typography as="p" variant="xs" className="text-neutral-60">
          {option.subtitle}
        </Typography>
      </div>
    </label>
  );
}
