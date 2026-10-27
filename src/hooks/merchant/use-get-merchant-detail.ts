import api from '@/lib/api';
import { ApiResponse } from '@/types/api';
import { MerchantItem } from '@/types/merchant';
import { useQuery } from '@tanstack/react-query';

export default function useGetMerchantDetail(id: string, enabled = true) {
  const { data, isLoading, isError, error, refetch } = useQuery<MerchantItem>({
    queryKey: ['get-merchant-detail', id],
    enabled: Boolean(id) && enabled,
    retry: false,
    queryFn: async () => {
      const { data } = await api.get<ApiResponse<MerchantItem>>(
        `/merchants/${id}`,
      );
      return data.data;
    },
  });

  return { merchant: data, isLoading, isError, error, refetch };
}
