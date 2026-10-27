'use client';

import { Radio } from 'lucide-react';
import { actionBarText } from '../_data/action-bar-data';

type Props = {
  isPublishing: boolean;
  onDraft: () => void;
  onPublish: () => void;
};

export default function ActionBarButtons({
  isPublishing,
  onDraft,
  onPublish,
}: Props) {
  return (
    <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
      <button
        type="button"
        onClick={onDraft}
        disabled={isPublishing}
        className="rounded-xl border border-[#f0e5e3] bg-[#fff8f6] px-4 py-2.5 text-sm font-semibold text-neutral-80 transition-colors hover:bg-[#f5ecea] disabled:opacity-50 cursor-pointer"
      >
        {actionBarText.draftBtn}
      </button>
      <button
        type="button"
        onClick={onPublish}
        disabled={isPublishing}
        className="px-5 py-2.5 rounded-xl bg-merchant-primary text-neutral-10 text-sm font-bold shadow-md hover:bg-merchant-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 cursor-pointer"
      >
        <Radio className="size-4 animate-pulse" />
        <span>
          {isPublishing ? 'Mempublikasikan...' : actionBarText.publishBtn}
        </span>
      </button>
    </div>
  );
}
