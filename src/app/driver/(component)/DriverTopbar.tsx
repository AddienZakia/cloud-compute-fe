'use client';

import { User } from 'lucide-react';
import { useDriverContext } from '../(container)/DriverContext';
import { DriverKafkaChip } from './DriverKafkaChip';
import { DriverStatusToggle } from './DriverStatusToggle';

export function DriverTopbar() {
  const { data } = useDriverContext();
  const { profile, status } = data;

  return (
    <header className="flex h-16 items-center justify-between border-b border-driver-border bg-driver-card px-6">
      <div className="flex items-center gap-4">
        <DriverKafkaChip
          consumer={status.kafkaConsumer}
          latency={status.kafkaLatency}
        />
      </div>

      <div className="flex items-center gap-4">
        <DriverStatusToggle />

        <div className="flex items-center gap-3 border-l border-driver-border pl-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-driver-surface text-driver-primary ring-2 ring-driver-border">
            <User className="h-5 w-5" />
          </div>
          <div className="hidden text-left sm:block">
            <p className="text-xs font-bold text-neutral-100">{profile.name}</p>
            <p className="text-[11px] text-neutral-70">{profile.vehicle}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
