import Typography from '@/components/Typography';
import { Banknote, CheckCircle2 } from 'lucide-react';
import { formatRupiah } from '../_lib/format-rupiah';
import { PaymentInfo } from '../_schema/order-schema';

type Props = {
  payment: PaymentInfo;
  total: number;
};

export default function PaymentBox({ payment, total }: Props) {
  const isLunas = payment.status === 'LUNAS';

  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-danger-surface border border-neutral-30">
      <div className="flex items-center gap-2">
        {isLunas ? (
          <CheckCircle2 className="size-4 text-success-main stroke-[2.5]" />
        ) : (
          <Banknote className="size-4 text-warning-main stroke-[2.5]" />
        )}
        <div className="flex flex-col">
          <Typography
            as="span"
            variant="xs"
            weight="bold"
            className="text-neutral-90 leading-tight"
          >
            {payment.method}
          </Typography>
          <Typography
            as="span"
            variant="xs"
            className="text-neutral-60 font-mono text-[11px]"
          >
            ({payment.status})
          </Typography>
        </div>
      </div>

      <div className="flex items-baseline gap-1">
        <Typography
          as="span"
          variant="xs"
          weight="bold"
          className="text-danger-main"
        >
          Rp
        </Typography>
        <Typography
          as="span"
          variant="l"
          weight="bold"
          className="text-danger-main font-mono leading-none"
        >
          {formatRupiah(total).replace('Rp', '').trim()}
        </Typography>
      </div>
    </div>
  );
}
