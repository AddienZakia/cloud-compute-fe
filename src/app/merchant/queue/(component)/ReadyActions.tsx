'use client';

import Typography from '@/components/Typography';
import { CheckCheck } from 'lucide-react';
import { toast } from 'sonner';
import { useQueueContext } from '../(container)/QueueContext';

type Props = {
  orderId: string;
};

export default function ReadyActions({ orderId }: Props) {
  const { handoverOrder } = useQueueContext();

  const handleHandover = () => {
    handoverOrder(orderId);
    toast.success(`Pesanan #${orderId} telah diserahkan ke kurir & selesai!`);
  };

  return (
    <div className="pt-1">
      <button
        type="button"
        tabIndex={0}
        onClick={handleHandover}
        aria-label={`Serahkan pesanan #${orderId} ke kurir`}
        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-success-main hover:bg-success-hover active:bg-success-pressed text-neutral-10 font-bold text-sm shadow-xs transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success-focus focus-visible:ring-offset-2"
      >
        <CheckCheck className="size-4 shrink-0 stroke-[2.5]" />
        <Typography as="span" variant="s" weight="bold">
          Serahkan Pesanan
        </Typography>
      </button>
    </div>
  );
}
