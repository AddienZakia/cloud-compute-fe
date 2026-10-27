import type { DeliveryHistoryItem } from '../../_schema/history-schema';
import { HistoryEmptyState } from './HistoryEmptyState';
import { HistoryRow } from './HistoryRow';

export function HistoryTable({ items }: { items: DeliveryHistoryItem[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-driver-border/80">
      <table className="w-full min-w-[760px] border-collapse text-left text-xs">
        <thead className="border-b border-driver-border bg-driver-surface-muted/50 text-[11px] font-bold text-neutral-80 uppercase">
          <tr>
            <th scope="col" className="px-4 py-3">
              ID Pesanan & Waktu
            </th>
            <th scope="col" className="px-4 py-3">
              Restoran & Pemesan
            </th>
            <th scope="col" className="px-4 py-3">
              Status
            </th>
            <th scope="col" className="px-4 py-3">
              Ulasan & Tip
            </th>
            <th scope="col" className="px-4 py-3">
              Pendapatan Bersih
            </th>
            <th scope="col" className="px-4 py-3 text-right">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <HistoryEmptyState />
          ) : (
            items.map((item) => <HistoryRow key={item.id} item={item} />)
          )}
        </tbody>
      </table>
    </div>
  );
}
