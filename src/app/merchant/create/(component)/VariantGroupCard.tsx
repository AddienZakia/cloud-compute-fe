'use client';

import { useFormContext } from 'react-hook-form';
import { CreateMenuFormValues } from '../_schema/menu-form-schema';
import AddOptionButton from './AddOptionButton';
import VariantGroupHeader from './VariantGroupHeader';
import VariantOptionRow from './VariantOptionRow';

type Props = {
  groupIndex: number;
  autoFocus?: boolean;
  onRemove: () => void;
};

export default function VariantGroupCard({
  groupIndex,
  autoFocus,
  onRemove,
}: Props) {
  const { watch } = useFormContext<CreateMenuFormValues>();
  const group = watch(`varianGroups.${groupIndex}`);
  const isSingleSelect = group?.maksPilihan === 1;

  const addLabel =
    groupIndex === 0
      ? 'Tambah Opsi Potongan'
      : `Tambah Opsi ${group?.nama ? group.nama.split(' ')[0] : 'Varian'}`;

  return (
    <div className="flex flex-col gap-3.5 rounded-2xl border border-[#f0e5e3] bg-[#fbf2f0] p-4">
      <VariantGroupHeader
        groupIndex={groupIndex}
        autoFocus={autoFocus}
        onRemove={onRemove}
      />
      <VariantOptionRow
        groupIndex={groupIndex}
        isSingleSelect={isSingleSelect}
      />
      <AddOptionButton groupIndex={groupIndex} label={addLabel} />
    </div>
  );
}
