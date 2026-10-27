import api from '@/lib/api';
import { APIResponseError, ApiResponse } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useSendNewsletter(id: string) {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending } = useMutation<
    ApiResponse<null>,
    APIResponseError
  >({
    mutationKey: ['send-newsletter', id],
    mutationFn: async () => {
      const { data } = await api.post<ApiResponse<null>>(`/newsletters/${id}`);
      return data;
    },
    onSuccess: (data) => {
      toast.success(
        data?.message ||
          'Newsletter sedang diproses dan akan dikirim ke seluruh subscriber',
      );
      queryClient.invalidateQueries({ queryKey: ['get-all-newsletters'] });
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message || 'Gagal mengirimkan newsletter',
      );
    },
  });

  return { mutate, mutateAsync, isPending };
}
