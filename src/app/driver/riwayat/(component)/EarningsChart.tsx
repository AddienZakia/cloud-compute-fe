import type { DailyEarningsItem } from '../../_schema/finance-schema';
import { ChartBar } from './ChartBar';
import { ChartLegend } from './ChartLegend';

interface EarningsChartProps {
  data: DailyEarningsItem[];
}

export function EarningsChart({ data }: EarningsChartProps) {
  const maxTotal = Math.max(...data.map((d) => d.total));

  return (
    <div className="rounded-2xl border border-driver-border bg-driver-card p-5 shadow-xs">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-driver-border pb-4">
        <div>
          <h2 className="text-base font-bold text-neutral-100">
            Tren Pendapatan Harian
          </h2>
          <p className="mt-0.5 text-xs text-neutral-70">
            Aktivitas ritme 7 hari terakhir (18 - 24 Okt 2025)
          </p>
        </div>

        <ChartLegend />
      </div>

      <div className="mt-6 flex h-64 items-end justify-between gap-2 px-2 sm:gap-6 sm:px-6">
        {data.map((item) => (
          <ChartBar key={item.id} item={item} maxTotal={maxTotal} />
        ))}
      </div>

      {/* Accessible table for screen readers */}
      <table className="sr-only">
        <caption>Tabel Tren Pendapatan 7 Hari Terakhir</caption>
        <thead>
          <tr>
            <th scope="col">Hari</th>
            <th scope="col">Tanggal</th>
            <th scope="col">Tarif Dasar</th>
            <th scope="col">Rush & Tip</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.day}</td>
              <td>{item.date}</td>
              <td>Rp {item.baseFare.toLocaleString('id-ID')}</td>
              <td>Rp {item.rushAndTip.toLocaleString('id-ID')}</td>
              <td>Rp {item.total.toLocaleString('id-ID')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
