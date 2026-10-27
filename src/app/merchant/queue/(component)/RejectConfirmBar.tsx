'use client';

import Typography from '@/components/Typography';
import * as React from 'react';

type Props = {
  orderId: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function RejectConfirmBar({
  orderId,
  onConfirm,
  onCancel,
}: Props) {
  const cancelBtnRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    cancelBtnRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      onCancel();
    }
  };

  return (
    <div
      onKeyDown={handleKeyDown}
      className="flex flex-col gap-2 p-2.5 rounded-xl bg-danger-surface border border-danger-border"
    >
      <Typography
        as="p"
        variant="xs"
        weight="bold"
        className="text-danger-main text-center"
      >
        Yakin tolak pesanan #{orderId}?
      </Typography>
      <div className="flex items-center gap-2">
        <button
          ref={cancelBtnRef}
          type="button"
          onClick={onCancel}
          aria-label={`Batalkan penolakan pesanan #${orderId}`}
          className="flex-1 py-1.5 px-3 rounded-lg border border-neutral-30 bg-neutral-10 text-neutral-80 font-bold text-xs hover:bg-neutral-20 focus:outline-none focus:ring-2 focus:ring-neutral-40 cursor-pointer"
        >
          Batal
        </button>
        <button
          type="button"
          onClick={onConfirm}
          aria-label={`Konfirmasi tolak pesanan #${orderId}`}
          className="flex-1 py-1.5 px-3 rounded-lg bg-danger-main text-neutral-10 font-bold text-xs hover:bg-danger-hover focus:outline-none focus:ring-2 focus:ring-danger-main cursor-pointer"
        >
          Ya, Tolak
        </button>
      </div>
    </div>
  );
}
