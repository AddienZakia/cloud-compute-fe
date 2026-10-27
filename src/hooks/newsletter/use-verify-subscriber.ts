import api from '@/lib/api';
import { APIResponseError, ApiResponse } from '@/types/api';
import { VerifySubscriberPayloadType } from '@/validations/newsletter/newsletter.schema';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useVerifySubscriber() {
  const { mutate, mutateAsync, isPending } = useMutation<
    ApiResponse<null>,
    APIResponseError,
    VerifySubscriberPayloadType
  >({
    mutationKey: ['verify-subscriber'],
    mutationFn: async (payload) => {
      const { data } = await api.post<ApiResponse<null>>(
        '/newsletter/verify',
        payload,
      );
      return data;
    },
    onSuccess: (data) => {
      toast.success(data.message || 'Email berhasil diverifikasi');
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message || 'Gagal memverifikasi token email',
      );
    },
  });

  return { mutate, mutateAsync, isPending };
}
