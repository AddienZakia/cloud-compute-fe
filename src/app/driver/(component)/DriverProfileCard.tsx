import { Badge } from '@/components/ui/badge';
import { Bike, ShieldCheck } from 'lucide-react';
import type { DriverProfile } from '../_schema/driver-schema';
import { DriverOpenStatusBox } from './DriverOpenStatusBox';

interface DriverProfileCardProps {
  profile: DriverProfile;
}

export function DriverProfileCard({ profile }: DriverProfileCardProps) {
  return (
    <div className="rounded-2xl border border-driver-border bg-driver-card p-5 shadow-xs">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-driver-surface text-driver-primary ring-1 ring-driver-border">
            <Bike className="h-7 w-7" />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-bold text-neutral-100">
                {profile.name}
              </h2>
              <Badge className="border-driver-border bg-driver-surface text-[11px] font-semibold text-driver-primary">
                <ShieldCheck className="h-3 w-3" />
                {profile.badge}
              </Badge>
            </div>
            <p className="mt-0.5 text-xs font-medium text-neutral-70">
              {profile.vehicle}
            </p>
          </div>
        </div>
      </div>

      <DriverOpenStatusBox />
    </div>
  );
}
