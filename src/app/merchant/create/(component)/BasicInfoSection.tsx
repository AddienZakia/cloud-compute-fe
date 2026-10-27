'use client';

import { Check, Utensils } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { createMenuText } from '../_data/create-menu-data';
import CategoryTagFields from './CategoryTagFields';
import DeskripsiField from './DeskripsiField';
import FormSection from './FormSection';
import NamaSkuFields from './NamaSkuFields';

export default function BasicInfoSection() {
  const {
    watch,
    formState: { errors },
  } = useFormContext();

  const nama = watch('nama') || '';
  const kategori = watch('kategori') || '';
  const deskripsi = watch('deskripsi') || '';

  const isSection1Valid =
    !errors.nama &&
    nama.trim().length >= 3 &&
    !errors.kategori &&
    Boolean(kategori) &&
    !errors.deskripsi &&
    deskripsi.trim().length >= 10 &&
    deskripsi.length <= 300;

  const validBadge = isSection1Valid ? (
    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-success-surface text-success-main border border-success-border">
      <Check className="size-3.5 stroke-[2.5]" />
      {createMenuText.badgeValidData}
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-20 text-neutral-60 border border-neutral-30">
      Belum Lengkap
    </span>
  );

  return (
    <FormSection
      icon={Utensils}
      title={createMenuText.basicInfoTitle}
      subtitle={createMenuText.basicInfoSubtitle}
      badge={validBadge}
    >
      <div className="flex flex-col gap-5">
        <NamaSkuFields />
        <CategoryTagFields />
        <DeskripsiField />
      </div>
    </FormSection>
  );
}
