import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';
import { QueueColumnConfig } from '../_data/columns-data';
import CountPill from './CountPill';

type Props = {
  config: QueueColumnConfig;
  count: number;
};

export default function ColumnHeader({ config, count }: Props) {
  return (
    <div className="flex items-start justify-between gap-3 p-4 border-b border-neutral-30 bg-neutral-10 rounded-t-xl">
      <div className="flex items-start gap-2.5">
        <span
          className={cn(
            'size-2.5 rounded-full mt-1.5 shrink-0',
            config.dotColorClass,
          )}
          aria-hidden="true"
        />
        <div className="flex flex-col">
          <Typography
            as="h2"
            variant="m"
            weight="bold"
            className="text-neutral-100 leading-tight"
          >
            {config.title}
          </Typography>
          <Typography
            as="span"
            variant="xs"
            className="font-mono text-neutral-60 font-semibold mt-0.5 tracking-wider"
          >
            {config.statusLabel}
          </Typography>
        </div>
      </div>

      <CountPill
        count={count}
        variant="column"
        className={cn(config.countPillBgClass, config.countPillTextClass)}
      />
    </div>
  );
}
