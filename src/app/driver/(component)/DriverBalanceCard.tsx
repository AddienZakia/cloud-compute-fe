'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Zap } from 'lucide-react';
import { toast } from 'sonner';
import { formatRupiah } from '../_lib/format-rupiah';
import type { DriverBalance } from '../_schema/driver-schema';

interface DriverBalanceCardProps {
  balance: DriverBalance;
}

export function DriverBalanceCard({ balance }: DriverBalanceCardProps) {
  const handleWithdraw = () => {
    toast.success(
      `Pengajuan tarik dana ${formatRupiah(balance.amount)} berhasil diproses!`,
    );
  };

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-neutral-30 bg-neutral-10 p-5 shadow-xs">
      <div>
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold tracking-wider text-neutral-70 uppercase">
            Saldo BungkusPay Mitra
          </p>
          {balance.autoDisburseActive && (
            <Badge className="border-success-border bg-neutral-20 text-[11px] font-medium text-success-main">
              <Zap className="h-3 w-3" />
              Auto-Disburse Aktif
            </Badge>
          )}
        </div>

        <p className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-100">
          {formatRupiah(balance.amount)}
        </p>

        <p className="mt-1 text-xs font-medium text-success-main">
          +{formatRupiah(balance.incentiveAmount)} dari insentif jam sibuk
        </p>
      </div>

      <div className="mt-5">
        <Button
          type="button"
          variant="primary"
          size="md"
          className="w-full bg-merchant-primary hover:bg-merchant-primary-hover"
          onClick={handleWithdraw}
        >
          <ArrowUpRight className="mr-1 h-4 w-4" />
          Tarik Dana Cepat (Instant)
        </Button>
      </div>
    </div>
  );
}
