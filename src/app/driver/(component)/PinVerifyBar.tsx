'use client';

import { Button } from '@/components/ui/button';
import { useUpdateOrderStatus } from '@/hooks/order';
import { CheckCircle2, Navigation } from 'lucide-react';
import { toast } from 'sonner';
import type { DeliveryStatus } from '../_schema/driver-schema';

interface PinVerifyBarProps {
  orderId: string;
  status: DeliveryStatus;
}

export function PinVerifyBar({ orderId, status }: PinVerifyBarProps) {
  const { mutate: updateStatus, isPending } = useUpdateOrderStatus();
  const isDelivered = status === 'SELESAI';
  const isPicked = status === 'MENGANTAR';

  const handleUpdateDelivery = () => {
    if (isDelivered) return;

    if (!isPicked) {
      updateStatus(
        { id: orderId, status: 'picked' },
        {
          onSuccess: () => {
            toast.success(
              'Pesanan berhasil diambil dari restoran. Silakan antar ke pelanggan.',
            );
          },
        },
      );
    } else {
      updateStatus(
        { id: orderId, status: 'delivered' },
        {
          onSuccess: () => {
            toast.success('Pesanan berhasil diserahkan ke pelanggan!');
          },
        },
      );
    }
  };

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-driver-border bg-driver-surface-muted p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-2.5">
        <Navigation className="mt-0.5 h-4 w-4 shrink-0 text-driver-primary" />
        <p className="text-xs leading-relaxed text-neutral-80">
          {isPicked
            ? 'Pesanan dalam perjalanan. Klik konfirmasi setelah pesanan diserahkan ke pelanggan.'
            : 'Periksa kelengkapan pesanan di resto sebelum melanjutkan pengantaran.'}
        </p>
      </div>

      <Button
        type="button"
        variant="primary"
        size="md"
        disabled={isPending || isDelivered}
        onClick={handleUpdateDelivery}
        className="w-full shrink-0 bg-driver-primary font-semibold text-neutral-10 hover:bg-driver-primary-hover disabled:bg-neutral-40 disabled:text-neutral-60 sm:w-auto"
      >
        <CheckCircle2 className="mr-1.5 h-4 w-4" />
        {isPending
          ? 'Memproses...'
          : isPicked
            ? 'Selesaikan Pengantaran (Delivered)'
            : 'Ambil Pesanan dari Resto (Picked)'}
      </Button>
    </div>
  );
}
