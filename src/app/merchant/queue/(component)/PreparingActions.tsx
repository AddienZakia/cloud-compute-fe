'use client';

import Typography from '@/components/Typography';
import { CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { useQueueContext } from '../(container)/QueueContext';

type Props = {
  orderId: string;
};

export default function PreparingActions({ orderId }: Props) {
  const { markReady } = useQueueContext();

  const handleMarkReady = () => {
    markReady(orderId);
    toast.success(`Pesanan #${orderId} selesai dimasak & siap diambil!`);
  };

  return (
    <div className="pt-1">
      <button
        type="button"
        tabIndex={0}
        onClick={handleMarkReady}
        aria-label={`Tandai pesanan #${orderId} selesai masak dan siap diambil`}
        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-warning-main hover:bg-warning-hover active:bg-warning-pressed text-neutral-10 font-bold text-sm shadow-xs transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warning-focus focus-visible:ring-offset-2"
      >
        <CheckCircle2 className="size-4 shrink-0 stroke-[2.5]" />
        <Typography as="span" variant="s" weight="bold">
          Selesai Masak & Siap Diambil
        </Typography>
      </button>
    </div>
  );
}
