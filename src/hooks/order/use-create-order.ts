import api from '@/lib/api';
import { APIResponseError, ApiResponse } from '@/types/api';
import { CreateOrderPayload, OrderDetail } from '@/types/order';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useCreateOrder() {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending } = useMutation<
    ApiResponse<OrderDetail>,
    APIResponseError,
    CreateOrderPayload
  >({
    mutationKey: ['create-order'],
    mutationFn: async (payload) => {
      const { data } = await api.post<ApiResponse<OrderDetail>>(
        '/orders',
        payload,
      );
      return data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || 'Pesanan berhasil dibuat');
      queryClient.invalidateQueries({ queryKey: ['get-all-orders'] });
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Gagal membuat pesanan');
    },
  });

  return { mutate, mutateAsync, isPending };
}
