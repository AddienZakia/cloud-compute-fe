import Typography from '@/components/Typography';
import { Zap } from 'lucide-react';
import { katalogStreamInfo } from '../_data/katalog';

export default function KatalogStreamCard() {
  return (
    <div className="flex flex-col justify-center gap-1.5 p-4 rounded-xl bg-neutral-100 shadow-xs">
      {/* Status row */}
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-success-main/20 shrink-0">
          <Zap className="size-4 text-success-main" />
        </div>
        <div className="flex items-center gap-1.5">
          <Typography
            as="span"
            variant="xs"
            weight="bold"
            className="text-neutral-50 tracking-wider"
          >
            {katalogStreamInfo.label}
          </Typography>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-success-main/20">
            <span className="w-1.5 h-1.5 rounded-full bg-success-main animate-pulse" />
            <Typography
              as="span"
              variant="xs"
              weight="bold"
              className="text-success-main"
            >
              {katalogStreamInfo.status}
            </Typography>
          </span>
        </div>
      </div>

      {/* Offset */}
      <Typography
        as="span"
        variant="hm"
        weight="bold"
        className="text-neutral-10"
      >
        Offset: {katalogStreamInfo.offset}
      </Typography>

      {/* Sync label */}
      <Typography as="span" variant="xs" className="text-neutral-50">
        {katalogStreamInfo.syncLabel}
      </Typography>
    </div>
  );
}
