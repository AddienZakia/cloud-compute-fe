import api from '@/lib/api';
import { APIResponseError, ApiResponse } from '@/types/api';
import { OrderDetail, UpdateOrderStatusPayload } from '@/types/order';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export interface UpdateOrderStatusVariables {
  id?: string;
  status: OrderDetail['status'];
}

export default function useUpdateOrderStatus(orderId?: string) {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending } = useMutation<
    ApiResponse<OrderDetail>,
    APIResponseError,
    UpdateOrderStatusVariables | UpdateOrderStatusPayload
  >({
    mutationKey: ['update-order-status', orderId],
    mutationFn: async (variables) => {
      let targetId = orderId;
      let payload = variables;

      if ('id' in variables && variables.id) {
        targetId = variables.id;
        payload = { status: variables.status };
      }

      if (!targetId) {
        throw new Error('Order ID diperlukan untuk memperbarui status pesanan');
      }

      const { data } = await api.patch<ApiResponse<OrderDetail>>(
        `/orders/${targetId}/status`,
        payload,
      );
      return data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || 'Status pesanan berhasil diperbarui');
      queryClient.invalidateQueries({ queryKey: ['get-all-orders'] });
      if (orderId) {
        queryClient.invalidateQueries({
          queryKey: ['get-order-detail', orderId],
        });
      }
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message || 'Gagal memperbarui status pesanan',
      );
    },
  });

  return { mutate, mutateAsync, isPending };
}
