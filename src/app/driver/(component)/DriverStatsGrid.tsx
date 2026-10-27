import type { DriverStatItem } from '../_schema/driver-schema';
import { DriverStatCard } from './DriverStatCard';

interface DriverStatsGridProps {
  stats: DriverStatItem[];
}

export function DriverStatsGrid({ stats }: DriverStatsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <DriverStatCard key={stat.id} item={stat} />
      ))}
    </div>
  );
}
