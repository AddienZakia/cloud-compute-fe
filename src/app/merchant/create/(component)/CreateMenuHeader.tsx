'use client';

import Typography from '@/components/Typography';
import { CheckSquare, ListOrdered, PlusCircle } from 'lucide-react';
import { toast } from 'sonner';
import { createMenuText } from '../_data/create-menu-data';

export default function CreateMenuHeader() {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
      {/* Kolom Kiri: Judul, Badges & Deskripsi */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2.5 flex-wrap">
          <Typography
            as="h1"
            variant="hl"
            weight="bold"
            className="text-neutral-100"
          >
            {createMenuText.title}
          </Typography>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-warning-surface text-warning-main border border-warning-border">
            {createMenuText.badgeMode}
          </span>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-danger-surface text-danger-main border border-danger-border">
            {createMenuText.badgeBranch}
          </span>
        </div>

        <div className="flex items-center gap-2 text-neutral-60">
          <CheckSquare className="size-4 text-warning-main shrink-0" />
          <Typography as="p" variant="s" className="text-neutral-60">
            {createMenuText.description}
          </Typography>
        </div>
      </div>

      {/* Kolom Kanan: Dua Tombol Toggle Mode */}
      <div className="flex items-center p-1 rounded-xl bg-neutral-20 border border-neutral-30 shrink-0">
        <button
          type="button"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-10 text-neutral-100 font-bold text-xs shadow-xs border border-neutral-30 cursor-pointer transition-colors"
        >
          <PlusCircle className="size-3.5 text-danger-main" />
          <span>{createMenuText.toggleTambahBaru}</span>
        </button>
        <button
          type="button"
          onClick={() =>
            toast.info('Fitur Beralih ke Edit Menu Terdaftar segera hadir')
          }
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-neutral-60 hover:text-neutral-90 font-medium text-xs cursor-pointer transition-colors"
        >
          <ListOrdered className="size-3.5 text-neutral-60" />
          <span>{createMenuText.toggleEditTerdaftar}</span>
        </button>
      </div>
    </div>
  );
}
