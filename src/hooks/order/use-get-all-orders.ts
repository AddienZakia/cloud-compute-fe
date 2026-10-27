import api from '@/lib/api';
import {
  MetadataRequest,
  PaginatedApiResponse,
  PaginatedResult,
} from '@/types/api';
import { OrderDetail } from '@/types/order';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';

export default function useGetAllOrders(
  metadata: MetadataRequest = {
    page: 1,
    take: 10,
    sort: 'desc',
    sort_by: 'createdAt',
  },
  setMetadata?: Dispatch<SetStateAction<MetadataRequest>>,
) {
  const { data, isLoading, isError, error, refetch } = useQuery<
    PaginatedResult<OrderDetail>
  >({
    queryKey: ['get-all-orders', metadata],
    placeholderData: keepPreviousData,
    retry: false,
    queryFn: async () => {
      const { data } = await api.get<PaginatedApiResponse<OrderDetail>>(
        '/orders',
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
    orders: data?.data || [],
    isLoading,
    isError,
    error,
    metadata: data?.meta || data?.metadata,
    refetch,
  };
}
