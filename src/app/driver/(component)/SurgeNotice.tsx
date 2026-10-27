import { Flame } from 'lucide-react';
import { formatRupiah } from '../_lib/format-rupiah';
import type { SurgeNoticeData } from '../_schema/driver-schema';

interface SurgeNoticeProps {
  surge: SurgeNoticeData;
}

export function SurgeNotice({ surge }: SurgeNoticeProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-warning-border bg-warning-surface p-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-10 text-warning-main shadow-xs">
        <Flame className="h-5 w-5" />
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="text-xs font-bold text-neutral-100 uppercase tracking-wide">
          Pusat Permintaan Tinggi: {surge.area}
        </h4>
        <p className="mt-0.5 text-xs text-neutral-80">
          Surge insentif +{formatRupiah(surge.surgeAmount)}/order aktif hingga{' '}
          {surge.validUntil}.
        </p>
      </div>
    </div>
  );
}
