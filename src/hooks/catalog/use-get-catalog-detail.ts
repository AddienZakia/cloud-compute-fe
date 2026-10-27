import api from '@/lib/api';
import { ApiResponse } from '@/types/api';
import { CatalogItem } from '@/types/catalog';
import { useQuery } from '@tanstack/react-query';

export default function useGetCatalogDetail(id: string, enabled = true) {
  const { data, isLoading, isError, error, refetch } = useQuery<CatalogItem>({
    queryKey: ['get-catalog-detail', id],
    enabled: Boolean(id) && enabled,
    retry: false,
    queryFn: async () => {
      const { data } = await api.get<ApiResponse<CatalogItem>>(
        `/catalogs/${id}`,
      );
      return data.data;
    },
  });

  return { catalog: data, isLoading, isError, error, refetch };
}
