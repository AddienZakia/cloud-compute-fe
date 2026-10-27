'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { useSubmitMenu } from '../(container)/useSubmitMenu';
import { actionBarText } from '../_data/action-bar-data';
import ActionBarButtons from './ActionBarButtons';
import LeaveConfirmDialog from './LeaveConfirmDialog';
import SectionProgress from './SectionProgress';

export default function CreateActionBar() {
  const router = useRouter();
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const { isDirty, isPublishing, handlePublish, handleDraft } = useSubmitMenu();

  const handleCancelClick = () => {
    if (isDirty) {
      dialogRef.current?.showModal();
    } else {
      router.push('/merchant/katalog');
    }
  };

  const handleConfirmLeave = () => {
    dialogRef.current?.close();
    router.push('/merchant/katalog');
  };

  return (
    <>
      <div className="sticky bottom-3 z-20 w-full rounded-2xl bg-neutral-10/95 backdrop-blur-md border border-neutral-30 shadow-xl px-4 py-3 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Sisi Kiri: Batal */}
          <button
            type="button"
            onClick={handleCancelClick}
            className="flex items-center gap-2 text-sm font-semibold text-neutral-70 hover:text-neutral-100 transition-colors cursor-pointer self-start lg:self-auto"
          >
            <ArrowLeft className="size-4" />
            <span>{actionBarText.cancelBtn}</span>
          </button>

          {/* Tengah: Indikator Kelengkapan Form */}
          <SectionProgress />

          {/* Sisi Kanan: Simpan Draf & Publikasikan */}
          <ActionBarButtons
            isPublishing={isPublishing}
            onDraft={handleDraft}
            onPublish={handlePublish}
          />
        </div>
      </div>

      <LeaveConfirmDialog
        dialogRef={dialogRef}
        onConfirmLeave={handleConfirmLeave}
      />
    </>
  );
}
