import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getPaginationRange } from '../../_lib/pagination-range';

import type { HistoryPaginationProps } from '../../_schema/history-schema';

const BTN_STYLE = 'flex size-7 items-center justify-center rounded-md text-xs';

export function HistoryPagination({
  currentPage,
  totalPages,
  totalMonthItems,
  paginatedCount,
  totalFiltered,
  onPageChange,
}: HistoryPaginationProps) {
  const start = totalFiltered === 0 ? 0 : (currentPage - 1) * 10 + 1;
  const end = totalFiltered === 0 ? 0 : start + paginatedCount - 1;
  const range = getPaginationRange(currentPage, totalPages);

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-driver-border/70">
      <p className="text-xs text-neutral-70">
        Menampilkan {start}-{end} dari {totalMonthItems} total pengantaran bulan
        ini
      </p>

      <nav
        aria-label="Paginasi riwayat"
        className="flex items-center gap-1 self-center sm:self-auto"
      >
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          aria-label="Halaman sebelumnya"
          className={`${BTN_STYLE} border border-driver-border text-neutral-70 hover:bg-neutral-20 disabled:cursor-not-allowed disabled:opacity-40`}
        >
          <ChevronLeft className="size-3.5" aria-hidden="true" />
        </button>

        {range.map((page, idx) =>
          page === '...' ? (
            <span key={`el-${idx}`} className="px-1.5 text-xs text-neutral-50">
              ...
            </span>
          ) : (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              aria-current={page === currentPage ? 'page' : undefined}
              className={`${BTN_STYLE} font-semibold ${
                page === currentPage
                  ? 'bg-neutral-100 text-neutral-10 shadow-xs'
                  : 'border border-driver-border text-neutral-80 hover:bg-neutral-20'
              }`}
            >
              {page}
            </button>
          ),
        )}

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          aria-label="Halaman berikutnya"
          className={`${BTN_STYLE} border border-driver-border text-neutral-70 hover:bg-neutral-20 disabled:cursor-not-allowed disabled:opacity-40`}
        >
          <ChevronRight className="size-3.5" aria-hidden="true" />
        </button>
      </nav>
    </div>
  );
}
