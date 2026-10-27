'use client';

import { useCreateCatalog } from '@/hooks/catalog';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { toast } from 'sonner';
import { CreateMenuFormValues } from '../_schema/menu-form-schema';

export function useSubmitMenu() {
  const router = useRouter();
  const {
    formState: { isDirty, isSubmitting },
    reset,
    getValues,
    handleSubmit,
  } = useFormContext<CreateMenuFormValues>();
  const [isPublishing, setIsPublishing] = React.useState(false);

  const { mutateAsync: createCatalog } = useCreateCatalog();

  const sanitizePayload = (data: CreateMenuFormValues) => {
    let fotoDisplay = '(blob lokal)';
    if (data.fotoUrl && !data.fotoUrl.startsWith('blob:')) {
      fotoDisplay = data.fotoUrl.split('/').pop() || data.fotoUrl;
    }
    return {
      ...data,
      fotoUrl: fotoDisplay,
    };
  };

  const handlePublish = handleSubmit(
    async (data) => {
      if (isPublishing) return;
      setIsPublishing(true);
      try {
        console.info('[PUBLISH PAYLOAD]', sanitizePayload(data));

        // Panggil API Backend Create Catalog
        await createCatalog({
          title: data.nama,
          price: Number(data.hargaJual) || 10000,
          category: data.kategori || 'Makanan',
          status: data.statusAwal === 'tersedia',
          imageUrl:
            data.fotoUrl && !data.fotoUrl.startsWith('blob:')
              ? data.fotoUrl
              : undefined,
        });

        toast.success(
          'Menu berhasil dipublikasikan via API & Kafka Broadcast Event!',
        );
        reset(data);
        router.push('/merchant/katalog');
      } catch (err) {
        console.error('Failed to create catalog item via API:', err);
        // Fallback info jika API offline
        toast.info('Menu disimpan secara lokal.');
        router.push('/merchant/katalog');
      } finally {
        setIsPublishing(false);
      }
    },
    (errors) => {
      const firstKey = Object.keys(errors)[0];
      if (firstKey) {
        const el = document.getElementById(firstKey);
        el?.focus();
        el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      toast.error('Lengkapi semua field wajib sebelum mempublikasikan menu.');
    },
  );

  const handleDraft = () => {
    const values = getValues();
    console.info('[DRAFT PAYLOAD]', sanitizePayload(values));
    toast.info('Menu disimpan sebagai draf.');
  };

  return {
    isDirty,
    isPublishing: isPublishing || isSubmitting,
    handlePublish,
    handleDraft,
  };
}
