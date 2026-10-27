'use client';

import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';
import { Pencil, Trash2 } from 'lucide-react';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { CreateMenuFormValues } from '../_schema/menu-form-schema';
import { formatRupiah } from '../_utils/pricing-calculator';
import VariantOptionEdit from './VariantOptionEdit';

type Props = {
  groupIndex: number;
  optionIndex: number;
  isSingleSelect: boolean;
  onRemove: () => void;
};

export default function VariantOptionCard({
  groupIndex,
  optionIndex,
  isSingleSelect,
  onRemove,
}: Props) {
  const { watch } = useFormContext<CreateMenuFormValues>();
  const opt = watch(`varianGroups.${groupIndex}.opsi.${optionIndex}`);
  const [isEditing, setIsEditing] = React.useState(!opt?.nama);

  if (isEditing) {
    return (
      <VariantOptionEdit
        groupIndex={groupIndex}
        optionIndex={optionIndex}
        onDone={() => setIsEditing(false)}
        onRemove={onRemove}
      />
    );
  }

  const harga = opt?.hargaEkstra ?? 0;
  const hargaText = harga > 0 ? `+Rp ${formatRupiah(harga)}` : 'Rp 0';

  return (
    <div className="group relative flex items-center justify-between gap-3 p-3 rounded-xl border border-neutral-30 bg-neutral-10 shadow-xs hover:border-neutral-40 transition-colors">
      <div className="flex items-center gap-2.5 min-w-0">
        <div
          aria-hidden="true"
          className={cn(
            'size-4 rounded-full border border-neutral-40 flex items-center justify-center shrink-0',
            !isSingleSelect && 'rounded-[4px]',
            optionIndex === 0 && 'border-merchant-primary',
          )}
        >
          {optionIndex === 0 && (
            <div
              className={cn(
                'size-2 bg-merchant-primary',
                isSingleSelect ? 'rounded-full' : 'rounded-[2px]',
              )}
            />
          )}
        </div>
        <div className="flex flex-col min-w-0">
          <Typography
            as="span"
            variant="s"
            weight="bold"
            className="text-neutral-90 truncate"
          >
            {opt?.nama}
          </Typography>
          {opt?.deskripsi && (
            <Typography
              as="span"
              variant="xs"
              className="text-neutral-50 truncate"
            >
              {opt.deskripsi}
            </Typography>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <span
          className={cn(
            'text-xs font-mono font-bold',
            harga > 0 ? 'text-warning-main' : 'text-neutral-70',
          )}
        >
          {hargaText}
        </span>
        <button
          type="button"
          onClick={() => setIsEditing(true)}
          aria-label={`Edit opsi ${opt?.nama}`}
          className="p-1 text-neutral-40 hover:text-neutral-80 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Pencil className="size-3.5" />
        </button>
        <button
          type="button"
          onClick={onRemove}
          aria-label={`Hapus opsi ${opt?.nama}`}
          className="p-1 text-neutral-40 hover:text-danger-main opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Trash2 className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
