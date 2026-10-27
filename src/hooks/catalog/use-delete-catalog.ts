import api from '@/lib/api';
import { APIResponseError, ApiResponse } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useDeleteCatalog() {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending } = useMutation<
    ApiResponse<unknown>,
    APIResponseError,
    string
  >({
    mutationKey: ['delete-catalog'],
    mutationFn: async (id: string) => {
      const { data } = await api.delete<ApiResponse<unknown>>(
        `/catalogs/${id}`,
      );
      return data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || 'Berhasil menghapus menu katalog');
      queryClient.invalidateQueries({ queryKey: ['get-all-catalogs'] });
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message || 'Gagal menghapus menu katalog',
      );
    },
  });

  return { mutate, mutateAsync, isPending };
}
