import api from '@/lib/api';
import { ApiResponse } from '@/types/api';
import { DriverStats } from '@/types/driver';
import { useQuery } from '@tanstack/react-query';

export default function useGetDriverStats(enabled = true) {
  const { data, isLoading, isError, error, refetch } = useQuery<DriverStats>({
    queryKey: ['get-driver-stats'],
    enabled,
    retry: false,
    queryFn: async () => {
      const { data } =
        await api.get<ApiResponse<DriverStats>>('/drivers/stats');
      return data.data;
    },
  });

  return { stats: data, isLoading, isError, error, refetch };
}
