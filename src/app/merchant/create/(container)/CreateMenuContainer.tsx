'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import BasicInfoSection from '../(component)/BasicInfoSection';
import CreateMenuSidebar from '../(component)/CreateMenuSidebar';
import PlaceholderSection from '../(component)/PlaceholderSection';
import PricingSection from '../(component)/PricingSection';
import VariantSection from '../(component)/VariantSection';
import { defaultMenuFormValues } from '../_schema/default-values';
import {
  CreateMenuFormValues,
  createMenuSchema,
} from '../_schema/menu-form-schema';

export default function CreateMenuContainer() {
  const methods = useForm<CreateMenuFormValues>({
    resolver: zodResolver(createMenuSchema),
    defaultValues: defaultMenuFormValues,
    mode: 'onChange',
  });

  const handleSubmit = (data: CreateMenuFormValues) => {
    // Handler sementara — tahap 5 akan mengganti ini
    void data;
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)} className="w-full">
        <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-12">
          {/* Kolom Kiri: Form Input Utama */}
          <div className="flex flex-col gap-6 xl:col-span-8">
            <BasicInfoSection />
            <PricingSection />
            <VariantSection />
            <PlaceholderSection
              title="Bar Aksi Bawah: Simpan & Publikasi Kafka"
              className="py-5"
            />
          </div>

          {/* Kolom Kanan: Foto & Live Preview (sticky) */}
          <CreateMenuSidebar />
        </div>
      </form>
    </FormProvider>
  );
}
