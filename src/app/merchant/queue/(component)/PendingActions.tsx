'use client';

import { ChefHat, X } from 'lucide-react';
import * as React from 'react';
import { toast } from 'sonner';
import { useQueueContext } from '../(container)/QueueContext';
import RejectConfirmBar from './RejectConfirmBar';

type Props = {
  orderId: string;
};

export default function PendingActions({ orderId }: Props) {
  const { acceptOrder, rejectOrder } = useQueueContext();
  const [isConfirming, setIsConfirming] = React.useState(false);
  const rejectBtnRef = React.useRef<HTMLButtonElement>(null);

  const handleCancelReject = () => {
    setIsConfirming(false);
    setTimeout(() => {
      rejectBtnRef.current?.focus();
    }, 0);
  };

  const handleConfirmReject = () => {
    rejectOrder(orderId);
    toast.info(`Pesanan #${orderId} telah ditolak.`);
  };

  const handleAccept = () => {
    acceptOrder(orderId);
    toast.success(`Pesanan #${orderId} diterima & mulai dimasak!`);
  };

  if (isConfirming) {
    return (
      <RejectConfirmBar
        orderId={orderId}
        onConfirm={handleConfirmReject}
        onCancel={handleCancelReject}
      />
    );
  }

  return (
    <div className="flex items-center gap-2 pt-1">
      <button
        ref={rejectBtnRef}
        type="button"
        onClick={() => setIsConfirming(true)}
        aria-label={`Tolak pesanan #${orderId}`}
        className="px-4 py-2.5 rounded-xl border border-neutral-30 bg-neutral-10 text-neutral-80 hover:bg-neutral-20 font-bold text-sm flex items-center justify-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-40 cursor-pointer"
      >
        <X className="size-4" />
        <span>Tolak</span>
      </button>

      <button
        type="button"
        onClick={handleAccept}
        aria-label={`Terima dan masak pesanan #${orderId}`}
        className="flex-1 px-4 py-2.5 rounded-xl bg-danger-main hover:bg-danger-hover text-neutral-10 font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors focus:outline-none focus:ring-2 focus:ring-danger-main cursor-pointer"
      >
        <ChefHat className="size-4" />
        <span>Terima & Masak</span>
      </button>
    </div>
  );
}
