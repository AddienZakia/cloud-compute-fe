'use client';

import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useDriverContext } from '../(container)/DriverContext';

interface OfferActionsProps {
  offerId: string;
  orderNumber: string;
  isExpired: boolean;
}

export function OfferActions({
  offerId,
  orderNumber,
  isExpired,
}: OfferActionsProps) {
  const { isOnline, isOpen, acceptOffer, dismissOffer } = useDriverContext();
  const canAccept = isOnline && isOpen && !isExpired;

  const handleAccept = () => {
    if (!canAccept) return;
    const accepted = acceptOffer(offerId);
    if (accepted) {
      toast.success(
        `Tawaran ${orderNumber} diterima dan ditambahkan ke Pengantaran Aktif!`,
      );
    } else {
      toast.error(
        `Tawaran ${orderNumber} sudah tidak tersedia atau sudah kedaluwarsa.`,
      );
    }
  };

  const handleDismiss = () => {
    dismissOffer(offerId);
    toast.info(`Tawaran ${orderNumber} diabaikan.`);
  };

  return (
    <div className="mt-4 flex flex-col gap-2">
      {!canAccept && (
        <p className="text-[11px] font-medium text-driver-primary">
          {isExpired
            ? 'Tawaran kedaluwarsa. Abaikan untuk menghapusnya.'
            : 'Aktifkan status ONLINE & OPEN untuk menerima order.'}
        </p>
      )}

      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outlined"
          size="sm"
          onClick={handleDismiss}
          aria-label={`Abaikan order ${orderNumber}`}
          className="flex-1 border-driver-border bg-driver-card text-xs font-semibold text-neutral-80 hover:bg-driver-surface hover:text-neutral-100"
        >
          Abaikan
        </Button>

        <Button
          type="button"
          variant="primary"
          size="sm"
          disabled={!canAccept}
          aria-disabled={!canAccept}
          onClick={handleAccept}
          aria-label={`Terima order ${orderNumber}`}
          className="flex-1 bg-driver-primary text-xs font-semibold text-neutral-10 hover:bg-driver-primary-hover disabled:cursor-not-allowed disabled:bg-neutral-40 disabled:text-neutral-60"
        >
          Terima
        </Button>
      </div>
    </div>
  );
}
