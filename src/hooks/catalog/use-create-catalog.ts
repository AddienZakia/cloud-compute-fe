import api from '@/lib/api';
import { APIResponseError, ApiResponse } from '@/types/api';
import { CatalogItem, CreateCatalogPayload } from '@/types/catalog';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useCreateCatalog() {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending } = useMutation<
    ApiResponse<CatalogItem>,
    APIResponseError,
    CreateCatalogPayload | FormData
  >({
    mutationKey: ['create-catalog'],
    mutationFn: async (payload) => {
      const isFormData = payload instanceof FormData;
      const { data } = await api.post<ApiResponse<CatalogItem>>(
        '/catalogs',
        payload,
        isFormData
          ? { headers: { 'Content-Type': 'multipart/form-data' } }
          : undefined,
      );
      return data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || 'Berhasil menambahkan menu katalog');
      queryClient.invalidateQueries({ queryKey: ['get-all-catalogs'] });
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message || 'Gagal menambahkan menu katalog',
      );
    },
  });

  return { mutate, mutateAsync, isPending };
}
