import api from '@/lib/api';
import { setToken } from '@/lib/cookie';
import { APIResponseError, ApiResponse } from '@/types/api';
import { LoginPayload, LoginResponse } from '@/types/auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useLoginMerchant() {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending } = useMutation<
    ApiResponse<LoginResponse>,
    APIResponseError,
    LoginPayload
  >({
    mutationKey: ['login-merchant'],
    mutationFn: async (payload) => {
      const { data } = await api.post<ApiResponse<LoginResponse>>(
        '/auth/login/merchant',
        payload,
      );
      return data;
    },
    onSuccess: (data) => {
      if (data?.data?.token) {
        setToken(data.data.token);
      }
      toast.success(data?.message || 'Login merchant berhasil');
      queryClient.invalidateQueries({ queryKey: ['get-profile'] });
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message ||
          'Gagal login merchant, periksa akun Anda',
      );
    },
  });

  return { mutate, mutateAsync, isPending };
}
