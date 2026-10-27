import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';
import type { RoutePoint } from '../_schema/driver-schema';
import { RoutePointActions } from './RoutePointActions';

interface RoutePointCardProps {
  point: RoutePoint;
}

export function RoutePointCard({ point }: RoutePointCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-neutral-30 bg-neutral-10 p-4 shadow-xs">
      <div>
        <div className="flex items-center justify-between gap-2">
          <p className="text-[11px] font-bold tracking-wider text-neutral-70 uppercase">
            {point.title}
          </p>
          {point.label && (
            <Badge className="border-neutral-30 bg-neutral-20 text-[10px] font-semibold text-neutral-80">
              {point.label}
            </Badge>
          )}
        </div>

        <div className="mt-2.5 flex items-start gap-2">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-merchant-primary" />
          <div>
            <h3 className="text-sm font-bold text-neutral-100">{point.name}</h3>
            <p className="mt-1 text-xs leading-relaxed text-neutral-70">
              {point.address}
            </p>
            {point.notes && point.notes !== '—' && (
              <p className="mt-1.5 rounded-md bg-neutral-20 px-2 py-1 text-[11px] italic text-neutral-80">
                Catatan: {point.notes}
              </p>
            )}
          </div>
        </div>
      </div>

      <RoutePointActions point={point} />
    </div>
  );
}
