import api from '@/lib/api';
import { APIResponseError, ApiResponse } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useDeleteMerchant() {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending } = useMutation<
    ApiResponse<unknown>,
    APIResponseError,
    string
  >({
    mutationKey: ['delete-merchant'],
    mutationFn: async (id: string) => {
      const { data } = await api.delete<ApiResponse<unknown>>(
        `/merchants/${id}`,
      );
      return data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || 'Berhasil menghapus merchant');
      queryClient.invalidateQueries({ queryKey: ['get-all-merchants'] });
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Gagal menghapus merchant');
    },
  });

  return { mutate, mutateAsync, isPending };
}
