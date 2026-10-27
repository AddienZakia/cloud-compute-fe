import api from '@/lib/api';
import { APIResponseError, ApiResponse } from '@/types/api';
import {
  NewsletterPayloadType,
  NewsletterResponseType,
} from '@/validations/newsletter/newsletter.schema';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useCreateNewsletter() {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending } = useMutation<
    ApiResponse<NewsletterResponseType>,
    APIResponseError,
    NewsletterPayloadType
  >({
    mutationKey: ['create-newsletter'],
    mutationFn: async (payload) => {
      const { data } = await api.post<ApiResponse<NewsletterResponseType>>(
        '/newsletters',
        payload,
      );
      return data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || 'Berhasil membuat draft newsletter');
      queryClient.invalidateQueries({ queryKey: ['get-all-newsletters'] });
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message || 'Gagal membuat draft newsletter',
      );
    },
  });

  return { mutate, mutateAsync, isPending };
}
