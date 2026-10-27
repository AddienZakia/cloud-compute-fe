'use client';

import Typography from '@/components/Typography';
import { Check, Pencil, Trash2 } from 'lucide-react';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { CreateMenuFormValues } from '../_schema/menu-form-schema';

type Props = { groupIndex: number; autoFocus?: boolean; onRemove: () => void };

export default function VariantGroupHeader({
  groupIndex,
  autoFocus,
  onRemove,
}: Props) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<CreateMenuFormValues>();
  const group = watch(`varianGroups.${groupIndex}`);
  const groupName = group?.nama ?? '';
  const [isEditing, setIsEditing] = React.useState(!groupName || autoFocus);

  const tipe = group?.tipe === 'WAJIB' ? 'WAJIB DIISI' : 'OPSIONAL';
  const pilihan =
    group?.maksPilihan === 1 ? '(PILIH 1)' : '(BISA PILIH BANYAK)';
  const groupError = errors.varianGroups?.[groupIndex]?.nama;

  return (
    <div className="flex items-center justify-between gap-3 pb-2 border-b border-neutral-30/60">
      <div className="flex items-center gap-2.5 flex-1 min-w-0">
        <div className="size-6 rounded-full bg-neutral-90 text-neutral-10 text-xs font-bold flex items-center justify-center shrink-0">
          {groupIndex + 1}
        </div>
        {isEditing ? (
          <div className="flex items-center gap-2 flex-1">
            <input
              {...register(`varianGroups.${groupIndex}.nama`)}
              autoFocus={autoFocus}
              placeholder="Nama grup varian..."
              className="text-sm font-bold px-2 py-0.5 rounded border border-neutral-30 bg-neutral-10 focus:outline-none focus:border-merchant-primary"
            />
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              aria-label={`Selesai edit grup ${groupName}`}
              className="p-1 rounded text-success-main hover:bg-success-surface"
            >
              <Check className="size-4" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col min-w-0">
            <Typography
              as="h3"
              variant="s"
              weight="bold"
              className="text-neutral-100 truncate"
            >
              {groupName}
            </Typography>
            <Typography
              as="span"
              variant="xs"
              weight="bold"
              className="text-danger-main tracking-wider"
            >
              {`${tipe} ${pilihan}`}
            </Typography>
          </div>
        )}
      </div>

      <div className="flex items-center gap-1 shrink-0">
        <button
          type="button"
          onClick={() => setIsEditing(true)}
          aria-label={`Edit grup ${groupName}`}
          className="p-1 text-neutral-50 hover:text-neutral-90 rounded hover:bg-neutral-20 transition-colors"
        >
          <Pencil className="size-4" />
        </button>
        <button
          type="button"
          onClick={onRemove}
          aria-label={`Hapus grup ${groupName}`}
          className="p-1 text-neutral-50 hover:text-danger-main rounded hover:bg-danger-surface transition-colors"
        >
          <Trash2 className="size-4" />
        </button>
      </div>
      {groupError?.message && (
        <Typography as="p" variant="xs" className="text-danger-main">
          {groupError.message}
        </Typography>
      )}
    </div>
  );
}
