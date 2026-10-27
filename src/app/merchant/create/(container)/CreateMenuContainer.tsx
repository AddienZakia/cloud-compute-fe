'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import BasicInfoSection from '../(component)/BasicInfoSection';
import PlaceholderSection from '../(component)/PlaceholderSection';
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
    // Handler sementara untuk tahap 1
    void data;
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)} className="w-full">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          {/* Kolom Kiri: Form Input Utama */}
          <div className="xl:col-span-8 flex flex-col gap-6">
            <BasicInfoSection />
            <PlaceholderSection
              title="2. Penetapan Harga & Manajemen Stok"
              className="py-10"
            />
            <PlaceholderSection
              title="3. Pengaturan Varian & Opsi Konsumen"
              className="py-10"
            />
            <PlaceholderSection
              title="Bar Aksi Bawah: Simpan & Publikasi Kafka"
              className="py-5"
            />
          </div>

          {/* Kolom Kanan: Foto & Consumer Preview */}
          <div className="xl:col-span-4 flex flex-col gap-6">
            <PlaceholderSection
              title="Foto Hidangan Utama (Rasio 1:1)"
              subtitle="Upload foto resolusi min. 800x800 px"
              className="py-12"
            />
            <PlaceholderSection
              title="Live Consumer Preview"
              subtitle="Tampilan kartu menu di aplikasi konsumen real-time"
              className="py-16"
            />
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
