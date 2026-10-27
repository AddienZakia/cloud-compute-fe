import api from '@/lib/api';
import { APIResponseError, ApiResponse } from '@/types/api';
import { SubscribeNewsletterPayloadType } from '@/validations/newsletter/newsletter.schema';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useAddSubscriberDirect() {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending } = useMutation<
    ApiResponse<null>,
    APIResponseError,
    SubscribeNewsletterPayloadType
  >({
    mutationKey: ['add-subscriber-direct'],
    mutationFn: async (payload) => {
      const { data } = await api.post<ApiResponse<null>>(
        '/newsletter/direct',
        payload,
      );
      return data;
    },
    onSuccess: (data) => {
      toast.success(
        data?.message || 'Subscriber added and verified successfully',
      );
      queryClient.invalidateQueries({ queryKey: ['get-all-subscribers'] });
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message || 'Gagal menambahkan subscriber',
      );
    },
  });

  return { mutate, mutateAsync, isPending };
}
