'use client';

import Typography from '@/components/Typography';
import { Coins } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { calculateNetIncome, formatRupiah } from '../_utils/pricing-calculator';

export default function NetIncomeHint() {
  const { watch } = useFormContext();
  const hargaJual = watch('hargaJual') || 0;
  const netIncome = calculateNetIncome(hargaJual);

  return (
    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-neutral-20/60 border border-neutral-30">
      <Coins className="size-4 text-warning-main shrink-0" />
      <div className="flex items-center gap-1 flex-wrap text-xs">
        <Typography as="span" variant="xs" className="text-neutral-70">
          Perkiraan pendapatan resto neto:
        </Typography>
        <span className="font-bold text-success-main font-mono text-xs">
          Rp {formatRupiah(netIncome)}
        </span>
        <Typography as="span" variant="xs" className="text-neutral-50">
          / porsi
        </Typography>
      </div>
    </div>
  );
}
