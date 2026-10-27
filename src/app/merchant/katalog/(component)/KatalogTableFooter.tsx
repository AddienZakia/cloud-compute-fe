import Typography from '@/components/Typography';
import { KAFKA_OFFSET } from '../_data/katalog';
import KatalogPagination, { KatalogPaginationProps } from './KatalogPagination';

export type KatalogTableFooterProps = {
  totalAktif: number;
  totalHabis: number;
  pagination: KatalogPaginationProps;
};

export default function KatalogTableFooter({
  totalAktif,
  totalHabis,
  pagination,
}: KatalogTableFooterProps) {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 py-2">
      {/* Sisi Kiri: Status Sinkronisasi & Ringkasan Cepat */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 flex-wrap text-xs text-neutral-80">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="size-2 rounded-full bg-success-main shrink-0" />
            Total Menu Aktif:{' '}
            <strong className="font-bold">{totalAktif} item</strong>
          </span>
          <span className="text-neutral-40">•</span>
          <span className="flex items-center gap-1.5 font-medium">
            <span className="size-2 rounded-full bg-danger-main shrink-0" />
            Menu Habis: <strong className="font-bold">{totalHabis} item</strong>
          </span>
          <span className="text-neutral-40">•</span>
        </div>

        <Typography
          as="span"
          variant="xs"
          className="text-neutral-60 font-mono text-[11px]"
        >
          Sinkronisasi Katalog Kafka: OK [Offset {KAFKA_OFFSET}]
        </Typography>
      </div>

      {/* Sisi Kanan: Pagination */}
      <KatalogPagination {...pagination} />
    </div>
  );
}
