'use client';

import { Button } from '@/components/ui/button';
import { KeyRound } from 'lucide-react';
import { toast } from 'sonner';
import { useDriverContext } from '../(container)/DriverContext';
import type { DeliveryStatus } from '../_schema/driver-schema';

interface PinVerifyBarProps {
  orderId: string;
  status: DeliveryStatus;
}

export function PinVerifyBar({ orderId, status }: PinVerifyBarProps) {
  const { arriveAtRestaurant } = useDriverContext();
  const isArrived = status === 'TIBA_DI_RESTO';

  const handleArrive = () => {
    if (isArrived) return;
    arriveAtRestaurant(orderId);
    toast.success(
      'Status berhasil diperbarui: Anda sudah tiba di resto Pak Mul. Silakan minta PIN verifikasi!',
    );
  };

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-driver-border bg-driver-surface-muted p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-2.5">
        <KeyRound className="mt-0.5 h-4 w-4 shrink-0 text-driver-primary" />
        <p className="text-xs leading-relaxed text-neutral-80">
          Minta 4 Digit PIN Verifikasi dari pihak kasir resto setelah cek
          bungkus.
        </p>
      </div>

      <Button
        type="button"
        variant="primary"
        size="md"
        disabled={isArrived}
        aria-disabled={isArrived}
        onClick={handleArrive}
        className="w-full shrink-0 bg-driver-primary font-semibold text-neutral-10 hover:bg-driver-primary-hover disabled:bg-neutral-40 disabled:text-neutral-60 sm:w-auto"
      >
        {isArrived
          ? 'Sudah Tiba di Resto (Menunggu PIN)'
          : 'Tiba di Resto & Verifikasi PIN'}
      </Button>
    </div>
  );
}
