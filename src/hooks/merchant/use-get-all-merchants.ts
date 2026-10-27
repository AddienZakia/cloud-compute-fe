import api from '@/lib/api';
import {
  MetadataRequest,
  PaginatedApiResponse,
  PaginatedResult,
} from '@/types/api';
import { MerchantItem } from '@/types/merchant';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';

export default function useGetAllMerchants(
  metadata: MetadataRequest = {
    page: 1,
    take: 10,
    sort: 'desc',
    sort_by: 'createdAt',
  },
  setMetadata?: Dispatch<SetStateAction<MetadataRequest>>,
) {
  const { data, isLoading, isError, error, refetch } = useQuery<
    PaginatedResult<MerchantItem>
  >({
    queryKey: ['get-all-merchants', metadata],
    placeholderData: keepPreviousData,
    retry: false,
    queryFn: async () => {
      const { data } = await api.get<PaginatedApiResponse<MerchantItem>>(
        '/merchants',
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
    merchants: data?.data || [],
    isLoading,
    isError,
    error,
    metadata: data?.meta || data?.metadata,
    refetch,
  };
}
