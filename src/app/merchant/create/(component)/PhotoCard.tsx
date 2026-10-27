'use client';

import Typography from '@/components/Typography';
import { Camera } from 'lucide-react';
import * as React from 'react';
import { type PhotoState } from '../(container)/usePhotoUpload';
import { sidebarText } from '../_data/sidebar-data';
import PhotoDropArea from './PhotoDropArea';
import QualityNote from './QualityNote';

type Props = {
  state: PhotoState;
  inputRef: React.RefObject<HTMLInputElement>;
  triggerPicker: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function PhotoCard({
  state,
  inputRef,
  triggerPicker,
  handleChange,
}: Props) {
  return (
    <div className="flex flex-col gap-3 p-4 rounded-2xl bg-neutral-10 border border-neutral-30 shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Typography
          as="h2"
          variant="m"
          weight="bold"
          className="text-neutral-100"
        >
          {sidebarText.photoTitle}
        </Typography>
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-success-surface text-success-main border border-success-border">
          {sidebarText.photoBadgeHd}
        </span>
      </div>

      {/* Area foto */}
      <PhotoDropArea state={state} />

      {/* Tombol & helper */}
      <button
        type="button"
        onClick={triggerPicker}
        className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-xl border border-neutral-30 bg-neutral-20 hover:bg-neutral-30 text-neutral-80 text-sm font-bold transition-colors"
      >
        <Camera className="size-4 text-danger-main" />
        {sidebarText.photoChangeBtn}
      </button>

      <Typography as="p" variant="xs" className="text-neutral-50 text-center">
        {sidebarText.photoHelp}
      </Typography>

      {/* Hidden file input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png"
        className="hidden"
        aria-hidden="true"
        onChange={handleChange}
      />

      {/* Quality note shown only when photo is present */}
      {state.previewUrl && <QualityNote />}
    </div>
  );
}
