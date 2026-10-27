import api from '@/lib/api';
import { APIResponseError, ApiResponse } from '@/types/api';
import { MerchantItem, UpdateMerchantPayload } from '@/types/merchant';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useEditMerchant(id: string) {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending } = useMutation<
    ApiResponse<MerchantItem>,
    APIResponseError,
    UpdateMerchantPayload | FormData
  >({
    mutationKey: ['edit-merchant', id],
    mutationFn: async (payload) => {
      const isFormData = payload instanceof FormData;
      const { data } = await api.put<ApiResponse<MerchantItem>>(
        `/merchants/${id}`,
        payload,
        isFormData
          ? { headers: { 'Content-Type': 'multipart/form-data' } }
          : undefined,
      );
      return data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || 'Berhasil memperbarui data merchant');
      queryClient.invalidateQueries({ queryKey: ['get-all-merchants'] });
      queryClient.invalidateQueries({ queryKey: ['get-merchant-detail', id] });
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message || 'Gagal memperbarui data merchant',
      );
    },
  });

  return { mutate, mutateAsync, isPending };
}
