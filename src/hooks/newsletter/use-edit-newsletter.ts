import api from '@/lib/api';
import { APIResponseError, ApiResponse } from '@/types/api';
import {
  NewsletterPayloadType,
  NewsletterResponseType,
} from '@/validations/newsletter/newsletter.schema';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useEditNewsletter(id: string) {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending } = useMutation<
    ApiResponse<NewsletterResponseType>,
    APIResponseError,
    NewsletterPayloadType
  >({
    mutationKey: ['edit-newsletter', id],
    mutationFn: async (payload) => {
      const { data } = await api.put<ApiResponse<NewsletterResponseType>>(
        `/newsletters/${id}`,
        payload,
      );
      return data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || 'Berhasil memperbarui newsletter');
      queryClient.invalidateQueries({ queryKey: ['get-all-newsletters'] });
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message || 'Gagal memperbarui newsletter',
      );
    },
  });

  return { mutate, mutateAsync, isPending };
}
