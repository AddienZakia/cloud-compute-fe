import api from '@/lib/api';
import { APIResponseError, ApiResponse } from '@/types/api';
import { CreateMerchantPayload, MerchantItem } from '@/types/merchant';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useCreateMerchant() {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending } = useMutation<
    ApiResponse<MerchantItem>,
    APIResponseError,
    CreateMerchantPayload | FormData
  >({
    mutationKey: ['create-merchant'],
    mutationFn: async (payload) => {
      const isFormData = payload instanceof FormData;
      const { data } = await api.post<ApiResponse<MerchantItem>>(
        '/merchants',
        payload,
        isFormData
          ? { headers: { 'Content-Type': 'multipart/form-data' } }
          : undefined,
      );
      return data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || 'Berhasil menambahkan merchant');
      queryClient.invalidateQueries({ queryKey: ['get-all-merchants'] });
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message || 'Gagal menambahkan merchant',
      );
    },
  });

  return { mutate, mutateAsync, isPending };
}
