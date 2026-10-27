'use client';

import Typography from '@/components/Typography';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { CreateMenuFormValues } from '../_schema/menu-form-schema';
import VariantOptionCard from './VariantOptionCard';

type Props = {
  groupIndex: number;
  isSingleSelect: boolean;
};

export default function VariantOptionRow({
  groupIndex,
  isSingleSelect,
}: Props) {
  const {
    control,
    formState: { errors },
  } = useFormContext<CreateMenuFormValues>();

  const { fields, remove } = useFieldArray({
    control,
    name: `varianGroups.${groupIndex}.opsi`,
  });

  const groupError = errors.varianGroups?.[groupIndex]?.opsi;

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {fields.map((field, optionIndex) => (
          <VariantOptionCard
            key={field.id}
            groupIndex={groupIndex}
            optionIndex={optionIndex}
            isSingleSelect={isSingleSelect}
            onRemove={() => remove(optionIndex)}
          />
        ))}
      </div>

      {groupError?.message && (
        <Typography as="p" variant="xs" className="text-danger-main">
          {groupError.message}
        </Typography>
      )}
    </div>
  );
}
