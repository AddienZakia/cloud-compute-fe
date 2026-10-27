import api from '@/lib/api';
import { APIResponseError, ApiResponse } from '@/types/api';
import { SubscribeNewsletterPayloadType } from '@/validations/newsletter/newsletter.schema';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useSubscribeNewsletter() {
  const { mutate, mutateAsync, isPending } = useMutation<
    ApiResponse<null>,
    APIResponseError,
    SubscribeNewsletterPayloadType
  >({
    mutationKey: ['subscribe-newsletter'],
    mutationFn: async (payload) => {
      const { data } = await api.post<ApiResponse<null>>(
        '/newsletter/subscribers',
        payload,
      );
      return data;
    },
    onSuccess: (data) => {
      toast.success(
        data.message ||
          'Link verifikasi telah dikirim ke email Anda. Silakan periksa inbox.',
      );
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message || 'Gagal mendaftar newsletter',
      );
    },
  });

  return { mutate, mutateAsync, isPending };
}
