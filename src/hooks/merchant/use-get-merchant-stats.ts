import api from '@/lib/api';
import { ApiResponse } from '@/types/api';
import { MerchantStats } from '@/types/merchant';
import { useQuery } from '@tanstack/react-query';

export default function useGetMerchantStats(enabled = true) {
  const { data, isLoading, isError, error, refetch } = useQuery<MerchantStats>({
    queryKey: ['get-merchant-stats'],
    enabled,
    retry: false,
    queryFn: async () => {
      const { data } =
        await api.get<ApiResponse<MerchantStats>>('/merchants/stats');
      return data.data;
    },
  });

  return { stats: data, isLoading, isError, error, refetch };
}
