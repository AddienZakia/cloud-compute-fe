import api from '@/lib/api';
import { APIResponseError, ApiResponse } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useDeleteOrder() {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending } = useMutation<
    ApiResponse<unknown>,
    APIResponseError,
    string
  >({
    mutationKey: ['delete-order'],
    mutationFn: async (id: string) => {
      const { data } = await api.delete<ApiResponse<unknown>>(`/orders/${id}`);
      return data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || 'Berhasil membatalkan/menghapus pesanan');
      queryClient.invalidateQueries({ queryKey: ['get-all-orders'] });
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Gagal menghapus pesanan');
    },
  });

  return { mutate, mutateAsync, isPending };
}
