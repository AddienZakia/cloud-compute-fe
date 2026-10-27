'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle2, CreditCard, Wallet } from 'lucide-react';
import { toast } from 'sonner';
import { formatRupiah } from '../../_lib/format-rupiah';
import type { RegisteredBank } from '../../_schema/finance-schema';

interface WalletCardProps {
  balanceAmount: number;
  bank: RegisteredBank;
}

export function WalletCard({ balanceAmount, bank }: WalletCardProps) {
  const handleWithdraw = () => {
    toast.success(
      `Pengajuan penarikan dana ${formatRupiah(balanceAmount)} ke ${bank.bankName} (${bank.accountMasked}) berhasil diajukan!`,
    );
  };

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-driver-border bg-driver-card p-5 shadow-xs">
      <div>
        <div className="flex items-center justify-between text-neutral-70">
          <p className="text-[11px] font-bold tracking-wider uppercase">
            Saldo Dompet Tersedia
          </p>
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-driver-surface text-driver-accent">
            <Wallet className="h-4 w-4" />
          </div>
        </div>

        <p className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-100">
          <span className="text-base font-bold text-driver-accent mr-1">
            Rp
          </span>
          {balanceAmount.toLocaleString('id-ID')}
        </p>

        <p className="mt-1 flex items-center gap-1.5 text-xs text-neutral-70">
          <CheckCircle2 className="h-3.5 w-3.5 text-driver-accent" />
          <span>Bisa ditarik instan kapan saja</span>
        </p>

        <div className="mt-4 flex items-center justify-between rounded-xl border border-driver-border bg-driver-surface px-3.5 py-2.5">
          <span className="text-xs font-semibold text-neutral-70">
            Rekening Terdaftar
          </span>
          <span className="text-xs font-bold text-neutral-100">
            {bank.bankName} {bank.accountMasked}
          </span>
        </div>
      </div>

      <div className="mt-5">
        <Button
          type="button"
          variant="primary"
          size="md"
          onClick={handleWithdraw}
          className="w-full rounded-xl bg-driver-primary font-semibold text-white shadow-xs hover:bg-driver-primary-dark transition-colors flex items-center justify-center gap-2"
        >
          <CreditCard className="h-4 w-4" />
          <span>Tarik ke Mandiri / BCA</span>
        </Button>
      </div>
    </div>
  );
}
