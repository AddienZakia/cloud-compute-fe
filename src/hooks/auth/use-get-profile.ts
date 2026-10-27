import api from '@/lib/api';
import { ApiResponse } from '@/types/api';
import { UserProfile } from '@/types/auth';
import { useQuery } from '@tanstack/react-query';

export default function useGetProfile(enabled = true) {
  const { data, isLoading, isError, error, refetch } = useQuery<UserProfile>({
    queryKey: ['get-profile'],
    enabled,
    retry: false,
    queryFn: async () => {
      const { data } = await api.get<ApiResponse<UserProfile>>('/users/me');
      return data.data;
    },
  });

  return { user: data, profile: data, isLoading, isError, error, refetch };
}
