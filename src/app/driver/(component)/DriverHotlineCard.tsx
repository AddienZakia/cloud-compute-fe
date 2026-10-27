'use client';

import { Button } from '@/components/ui/button';
import { Headphones } from 'lucide-react';
import { toast } from 'sonner';

export function DriverHotlineCard() {
  const handleCallDispatcher = () => {
    toast.info('Menghubungi Dispatcher Operasional (24 Jam)...');
  };

  return (
    <div className="m-3 rounded-xl border border-driver-border bg-driver-surface-muted p-3.5 shadow-2xs">
      <div className="flex items-start gap-2.5">
        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-neutral-70">
          <Headphones className="h-4 w-4" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-bold text-neutral-100">
            Bantuan Operasional
          </p>
          <p className="text-[10px] text-neutral-70">Dispatch Hotline 24 Jam</p>
        </div>
      </div>
      <Button
        type="button"
        variant="outlined"
        size="sm"
        className="mt-2.5 w-full rounded-lg border-driver-border bg-white text-xs font-bold text-driver-primary shadow-2xs hover:bg-neutral-10"
        onClick={handleCallDispatcher}
      >
        Hubungi Dispatcher
      </Button>
    </div>
  );
}
