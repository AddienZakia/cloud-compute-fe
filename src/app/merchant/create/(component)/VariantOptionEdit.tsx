'use client';

import Typography from '@/components/Typography';
import { Check, Trash2 } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { CreateMenuFormValues } from '../_schema/menu-form-schema';
import { formatRupiah, parsePriceNumber } from '../_utils/pricing-calculator';

type Props = {
  groupIndex: number;
  optionIndex: number;
  onDone: () => void;
  onRemove: () => void;
};

export default function VariantOptionEdit({
  groupIndex,
  optionIndex,
  onDone,
  onRemove,
}: Props) {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<CreateMenuFormValues>();

  const currentOption = watch(`varianGroups.${groupIndex}.opsi.${optionIndex}`);
  const optError = errors.varianGroups?.[groupIndex]?.opsi?.[optionIndex];
  const harga = currentOption?.hargaEkstra ?? 0;

  return (
    <div className="flex flex-col gap-1 p-2.5 rounded-xl border border-merchant-primary/40 bg-neutral-10 shadow-xs">
      <div className="flex items-center gap-2">
        <input
          {...register(`varianGroups.${groupIndex}.opsi.${optionIndex}.nama`)}
          placeholder="Nama opsi..."
          className="flex-1 text-xs font-semibold px-2 py-1 rounded border border-neutral-30 bg-neutral-15 focus:outline-none focus:border-merchant-primary"
        />
        <div className="relative w-24">
          <span className="absolute left-1.5 top-1 text-[11px] text-neutral-50 select-none">
            Rp
          </span>
          <input
            type="text"
            inputMode="numeric"
            value={harga ? formatRupiah(harga) : ''}
            placeholder="0"
            onChange={(e) => {
              const parsed = parsePriceNumber(e.target.value);
              setValue(
                `varianGroups.${groupIndex}.opsi.${optionIndex}.hargaEkstra`,
                parsed,
                { shouldValidate: true },
              );
            }}
            className="w-full text-xs font-mono font-semibold pl-6 pr-1.5 py-1 rounded border border-neutral-30 bg-neutral-15 focus:outline-none focus:border-merchant-primary"
          />
        </div>
        <button
          type="button"
          onClick={onDone}
          aria-label="Selesai edit opsi"
          className="p-1 rounded text-success-main hover:bg-success-surface"
        >
          <Check className="size-4" />
        </button>
        <button
          type="button"
          onClick={onRemove}
          aria-label="Hapus opsi"
          className="p-1 rounded text-neutral-50 hover:text-danger-main hover:bg-danger-surface"
        >
          <Trash2 className="size-3.5" />
        </button>
      </div>
      {optError?.nama?.message && (
        <Typography as="span" variant="xs" className="text-danger-main">
          {optError.nama.message}
        </Typography>
      )}
    </div>
  );
}
