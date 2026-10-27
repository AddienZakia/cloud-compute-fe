'use client';

import Typography from '@/components/Typography';
import * as React from 'react';
import { actionBarText } from '../_data/action-bar-data';

type Props = {
  dialogRef: React.RefObject<HTMLDialogElement>;
  onConfirmLeave: () => void;
};

export default function LeaveConfirmDialog({
  dialogRef,
  onConfirmLeave,
}: Props) {
  const cancelBtnRef = React.useRef<HTMLButtonElement>(null);

  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles -- <dialog> needs role for older browsers
    <dialog
      ref={dialogRef}
      role="dialog"
      aria-labelledby="leave-dialog-title"
      aria-describedby="leave-dialog-desc"
      aria-modal="true"
      className="backdrop:bg-neutral-90/50 backdrop:backdrop-blur-sm rounded-2xl border border-neutral-30 shadow-2xl p-6 max-w-sm w-full mx-auto my-auto"
      style={{ padding: '1.5rem' }}
    >
      <div className="flex flex-col gap-4">
        <Typography
          id="leave-dialog-title"
          as="h2"
          variant="m"
          weight="bold"
          className="text-neutral-100"
        >
          {actionBarText.dialogTitle}
        </Typography>
        <Typography
          id="leave-dialog-desc"
          as="p"
          variant="m"
          className="text-neutral-70"
        >
          {actionBarText.dialogBody}
        </Typography>

        <div className="flex items-center justify-end gap-3 mt-2">
          <button
            ref={cancelBtnRef}
            autoFocus
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="px-4 py-2 rounded-xl border border-neutral-30 text-sm font-bold text-neutral-80 hover:bg-neutral-20 focus:outline-none focus:ring-2 focus:ring-neutral-40 transition-colors"
          >
            {actionBarText.dialogCancel}
          </button>
          <button
            type="button"
            onClick={onConfirmLeave}
            className="px-4 py-2 rounded-xl bg-danger-main text-neutral-10 text-sm font-bold hover:bg-danger-main/90 focus:outline-none focus:ring-2 focus:ring-danger-main transition-colors"
          >
            {actionBarText.dialogConfirm}
          </button>
        </div>
      </div>
    </dialog>
  );
}
