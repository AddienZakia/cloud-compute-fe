import type { DeliveryStatus } from '../../_schema/history-schema';

interface EarningCellProps {
  earning: number;
  earningNote: string;
  status: DeliveryStatus;
}

const rupiahFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
});

export function EarningCell({
  earning,
  earningNote,
  status,
}: EarningCellProps) {
  const isCancelled = status === 'DIBATALKAN';
  const formattedEarning = rupiahFormatter.format(earning).replace(/\s+/g, ' ');

  return (
    <td className="px-4 py-3.5 align-middle">
      <p
        className={`text-sm font-bold ${
          isCancelled ? 'text-driver-accent' : 'text-neutral-100'
        }`}
      >
        {formattedEarning}
      </p>
      <p
        className={`text-[11px] ${
          isCancelled ? 'text-driver-accent font-medium' : 'text-neutral-70'
        }`}
      >
        {earningNote}
      </p>
    </td>
  );
}
