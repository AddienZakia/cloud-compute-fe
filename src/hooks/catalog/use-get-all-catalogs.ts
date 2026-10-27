import api from '@/lib/api';
import { PaginatedApiResponse, PaginatedResult } from '@/types/api';
import { CatalogFilterParams, CatalogItem } from '@/types/catalog';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';

export default function useGetAllCatalogs(
  metadata: CatalogFilterParams = {
    page: 1,
    take: 10,
    sort: 'desc',
    sort_by: 'createdAt',
  },
  setMetadata?: Dispatch<SetStateAction<CatalogFilterParams>>,
) {
  const { data, isLoading, isError, error, refetch } = useQuery<
    PaginatedResult<CatalogItem>
  >({
    queryKey: ['get-all-catalogs', metadata],
    placeholderData: keepPreviousData,
    retry: false,
    queryFn: async () => {
      const { data } = await api.get<PaginatedApiResponse<CatalogItem>>(
        '/catalogs',
        {
          params: metadata,
        },
      );

      const metadataResponse = data?.data?.meta || data?.data?.metadata;
      if (setMetadata && metadataResponse) {
        setMetadata((pre) => ({
          ...pre,
          page: metadataResponse.page,
          take: metadataResponse.take,
        }));
      }

      return data.data;
    },
  });

  return {
    catalogs: data?.data || [],
    isLoading,
    isError,
    error,
    metadata: data?.meta || data?.metadata,
    refetch,
  };
}
