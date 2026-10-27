import api from '@/lib/api';
import {
  MetadataRequest,
  PaginatedApiResponse,
  PaginatedResult,
} from '@/types/api';
import { SubscriberResponseType } from '@/validations/newsletter/newsletter.schema';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';

export default function useGetAllSubscribers(
  metadata: MetadataRequest,
  setMetadata?: Dispatch<SetStateAction<MetadataRequest>>,
) {
  const { data, isLoading, isError } = useQuery<
    PaginatedResult<SubscriberResponseType>
  >({
    queryKey: ['get-all-subscribers', metadata],
    placeholderData: keepPreviousData,
    retry: false,
    queryFn: async () => {
      const { data } = await api.get<
        PaginatedApiResponse<SubscriberResponseType>
      >('/newsletter/subscribers', {
        params: metadata,
      });

      const metadataResponse = data?.data?.meta;
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

  return { data: data?.data || [], isLoading, isError, metadata: data?.meta };
}
