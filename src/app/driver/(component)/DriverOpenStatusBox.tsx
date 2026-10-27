'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Activity } from 'lucide-react';
import { useDriverContext } from '../(container)/DriverContext';

export function DriverOpenStatusBox() {
  const { isOpen, toggleOpen } = useDriverContext();

  return (
    <div className="mt-4 rounded-xl border border-neutral-30 bg-neutral-20 p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <span
            className={cn(
              'h-3 w-3 rounded-full',
              isOpen ? 'bg-success-main' : 'bg-neutral-60',
            )}
          />
          <span className="text-sm font-bold tracking-tight text-neutral-100">
            {isOpen ? 'SIAP TERIMA PESANAN (OPEN)' : 'ISTIRAHAT (CLOSED)'}
          </span>
        </div>

        <Button
          type="button"
          variant="outlined"
          size="sm"
          onClick={toggleOpen}
          className="border-neutral-40 bg-neutral-10 text-xs font-semibold text-neutral-90 hover:bg-neutral-30"
        >
          {isOpen ? 'Nonaktifkan' : 'Aktifkan'}
        </Button>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-neutral-70">
        Status {isOpen ? 'OPEN' : 'CLOSED'} memungkinkan Kafka Dispatcher
        mengirimkan tawaran order terdekat secara real-time ke perangkat ini.
      </p>

      <div className="mt-3 flex items-center gap-1.5 font-mono text-[11px] text-neutral-70">
        <Activity className="h-3 w-3 text-success-main" />
        <span>Broker Lag: 0ms</span>
      </div>
    </div>
  );
}
