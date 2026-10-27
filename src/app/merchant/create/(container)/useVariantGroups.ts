'use client';

import * as React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { CreateMenuFormValues } from '../_schema/menu-form-schema';

export function useVariantGroups() {
  const { control } = useFormContext<CreateMenuFormValues>();
  const [focusGroupId, setFocusGroupId] = React.useState<string | null>(null);

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'varianGroups',
  });

  const addGroup = React.useCallback(() => {
    const newId = `vg-${Date.now()}`;
    append({
      id: newId,
      nama: '',
      tipe: 'OPSIONAL',
      maksPilihan: 1,
      opsi: [
        {
          id: `opt-${Date.now()}`,
          nama: '',
          hargaEkstra: 0,
        },
      ],
    });
    setFocusGroupId(newId);
  }, [append]);

  const removeGroup = React.useCallback(
    (index: number) => {
      remove(index);
    },
    [remove],
  );

  return {
    fields,
    addGroup,
    removeGroup,
    focusGroupId,
    setFocusGroupId,
  };
}
