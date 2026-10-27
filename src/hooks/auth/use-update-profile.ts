import api from '@/lib/api';
import { APIResponseError, ApiResponse } from '@/types/api';
import { UpdateProfilePayload, UserProfile } from '@/types/auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useUpdateProfile() {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending } = useMutation<
    ApiResponse<UserProfile>,
    APIResponseError,
    UpdateProfilePayload
  >({
    mutationKey: ['update-profile'],
    mutationFn: async (payload) => {
      const { data } = await api.put<ApiResponse<UserProfile>>(
        '/users/me',
        payload,
      );
      return data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || 'Profil berhasil diperbarui');
      queryClient.invalidateQueries({ queryKey: ['get-profile'] });
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Gagal memperbarui profil');
    },
  });

  return { mutate, mutateAsync, isPending };
}
