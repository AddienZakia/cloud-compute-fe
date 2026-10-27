import api from '@/lib/api';
import { APIResponseError, ApiResponse } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useDeleteNewsletter(id: string) {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending } = useMutation<
    ApiResponse<null>,
    APIResponseError
  >({
    mutationKey: ['delete-newsletter', id],
    mutationFn: async () => {
      const { data } = await api.delete<ApiResponse<null>>(
        `/newsletters/${id}`,
      );
      return data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || 'Berhasil menghapus newsletter');
      queryClient.invalidateQueries({ queryKey: ['get-all-newsletters'] });
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message || 'Gagal menghapus newsletter',
      );
    },
  });

  return { mutate, mutateAsync, isPending };
}
