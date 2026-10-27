import api from '@/lib/api';
import {
  MetadataRequest,
  PaginatedApiResponse,
  PaginatedResult,
} from '@/types/api';
import { NewsletterResponseType } from '@/validations/newsletter/newsletter.schema';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';

export default function useGetAllNewsletters(
  metadata: MetadataRequest,
  setMetadata?: Dispatch<SetStateAction<MetadataRequest>>,
) {
  const { data, isLoading, isError } = useQuery<
    PaginatedResult<NewsletterResponseType>
  >({
    queryKey: ['get-all-newsletters', metadata],
    placeholderData: keepPreviousData,
    retry: false,
    queryFn: async () => {
      const { data } = await api.get<
        PaginatedApiResponse<NewsletterResponseType>
      >('/newsletters', {
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
