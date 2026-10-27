import api from '@/lib/api';
import { ApiResponse } from '@/types/api';
import { OrderDetail } from '@/types/order';
import { useQuery } from '@tanstack/react-query';

export default function useGetOrderDetail(id: string, enabled = true) {
  const { data, isLoading, isError, error, refetch } = useQuery<OrderDetail>({
    queryKey: ['get-order-detail', id],
    enabled: Boolean(id) && enabled,
    retry: false,
    queryFn: async () => {
      const { data } = await api.get<ApiResponse<OrderDetail>>(`/orders/${id}`);
      return data.data;
    },
  });

  return { order: data, isLoading, isError, error, refetch };
}
