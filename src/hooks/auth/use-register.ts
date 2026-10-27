import api from '@/lib/api';
import { APIResponseError, ApiResponse } from '@/types/api';
import { RegisterPayload } from '@/types/auth';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useRegister() {
  const { mutate, mutateAsync, isPending } = useMutation<
    ApiResponse<unknown>,
    APIResponseError,
    RegisterPayload
  >({
    mutationKey: ['register'],
    mutationFn: async (payload) => {
      const { data } = await api.post<ApiResponse<unknown>>(
        '/auth/register',
        payload,
      );
      return data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || 'Registrasi berhasil, silakan login');
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message || 'Gagal melakukan registrasi',
      );
    },
  });

  return { mutate, mutateAsync, isPending };
}
