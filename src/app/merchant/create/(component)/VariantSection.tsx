'use client';

import { Plus, SlidersHorizontal } from 'lucide-react';
import { useVariantGroups } from '../(container)/useVariantGroups';
import AddGroupBar from './AddGroupBar';
import FormSection from './FormSection';
import VariantGroupCard from './VariantGroupCard';

export default function VariantSection() {
  const { fields, addGroup, removeGroup, focusGroupId } = useVariantGroups();

  const addHeaderButton = (
    <button
      type="button"
      onClick={addGroup}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-20/80 hover:bg-neutral-30/80 text-neutral-80 text-xs font-bold border border-neutral-30 transition-colors cursor-pointer"
    >
      <Plus className="size-3.5 text-danger-main stroke-[2.5]" />
      <span className="text-neutral-80">Tambah Grup Varian Baru</span>
    </button>
  );

  return (
    <FormSection
      icon={SlidersHorizontal}
      title="3. Pengaturan Varian & Opsi Konsumen"
      subtitle="Kustomisasi pesanan seperti level cabai, potongan daging, dan lauk ekstra"
      badge={addHeaderButton}
    >
      <div className="flex flex-col gap-4">
        {fields.map((field, index) => (
          <VariantGroupCard
            key={field.id}
            groupIndex={index}
            autoFocus={field.id === focusGroupId}
            onRemove={() => removeGroup(index)}
          />
        ))}

        <AddGroupBar onAdd={addGroup} />
      </div>
    </FormSection>
  );
}
