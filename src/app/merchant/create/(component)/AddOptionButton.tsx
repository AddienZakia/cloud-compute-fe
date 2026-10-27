'use client';

import Typography from '@/components/Typography';
import { Plus } from 'lucide-react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { CreateMenuFormValues } from '../_schema/menu-form-schema';

type Props = {
  groupIndex: number;
  label?: string;
};

export default function AddOptionButton({
  groupIndex,
  label = 'Tambah Opsi',
}: Props) {
  const { control } = useFormContext<CreateMenuFormValues>();
  const { append } = useFieldArray({
    control,
    name: `varianGroups.${groupIndex}.opsi`,
  });

  const handleAdd = () => {
    append({
      id: `opt-${Date.now()}`,
      nama: '',
      hargaEkstra: 0,
    });
  };

  return (
    <div className="flex justify-end mt-1">
      <button
        type="button"
        onClick={handleAdd}
        className="inline-flex items-center gap-1 text-xs font-bold text-danger-main hover:text-danger-main/80 transition-colors cursor-pointer"
      >
        <Plus className="size-3.5 stroke-[2.5]" />
        <Typography
          as="span"
          variant="xs"
          weight="bold"
          className="text-danger-main"
        >
          {label}
        </Typography>
      </button>
    </div>
  );
}
