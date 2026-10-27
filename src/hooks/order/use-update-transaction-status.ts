import api from '@/lib/api';
import { APIResponseError, ApiResponse } from '@/types/api';
import { TransactionItem, UpdateTransactionStatusPayload } from '@/types/order';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useUpdateTransactionStatus(transactionId: string) {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending } = useMutation<
    ApiResponse<TransactionItem>,
    APIResponseError,
    UpdateTransactionStatusPayload
  >({
    mutationKey: ['update-transaction-status', transactionId],
    mutationFn: async (payload) => {
      const { data } = await api.patch<ApiResponse<TransactionItem>>(
        `/transactions/${transactionId}/status`,
        payload,
      );
      return data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || 'Status transaksi berhasil diperbarui');
      queryClient.invalidateQueries({ queryKey: ['get-all-orders'] });
      queryClient.invalidateQueries({ queryKey: ['get-order-detail'] });
      queryClient.invalidateQueries({ queryKey: ['get-all-transactions'] });
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message || 'Gagal memperbarui status transaksi',
      );
    },
  });

  return { mutate, mutateAsync, isPending };
}
