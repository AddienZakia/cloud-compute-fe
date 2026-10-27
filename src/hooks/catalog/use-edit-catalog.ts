import api from '@/lib/api';
import { APIResponseError, ApiResponse } from '@/types/api';
import { CatalogItem, UpdateCatalogPayload } from '@/types/catalog';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export interface EditCatalogVariables {
  id?: string;
  payload?: UpdateCatalogPayload | FormData;
  status?: boolean;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
}

export default function useEditCatalog(id?: string) {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending } = useMutation<
    ApiResponse<CatalogItem>,
    APIResponseError,
    EditCatalogVariables | UpdateCatalogPayload | FormData
  >({
    mutationKey: ['edit-catalog', id],
    mutationFn: async (variables) => {
      let targetId = id;
      let payloadData: any = variables;

      if ('id' in variables && variables.id) {
        targetId = variables.id;
        payloadData = variables.payload || variables;
      }

      if (!targetId) {
        throw new Error('Catalog ID diperlukan untuk mengedit katalog');
      }

      const isFormData = payloadData instanceof FormData;
      const { data } = await api.put<ApiResponse<CatalogItem>>(
        `/catalogs/${targetId}`,
        payloadData,
        isFormData
          ? { headers: { 'Content-Type': 'multipart/form-data' } }
          : undefined,
      );
      return data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || 'Berhasil memperbarui menu katalog');
      queryClient.invalidateQueries({ queryKey: ['get-all-catalogs'] });
      if (id) {
        queryClient.invalidateQueries({ queryKey: ['get-catalog-detail', id] });
      }
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message || 'Gagal memperbarui menu katalog',
      );
    },
  });

  return { mutate, mutateAsync, isPending };
}
