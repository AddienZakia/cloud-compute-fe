import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export type KatalogPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  startIndex: number;
  endIndex: number;
  totalItems: number;
};

export default function KatalogPagination({
  currentPage,
  totalPages,
  onPageChange,
  startIndex,
  endIndex,
  totalItems,
}: KatalogPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <Typography
        as="span"
        variant="s"
        className="text-neutral-60 whitespace-nowrap"
      >
        {totalItems === 0
          ? 'Tidak ada menu yang cocok'
          : `Menampilkan ${startIndex}-${endIndex} dari ${totalItems} hidangan`}
      </Typography>

      <div className="flex items-center gap-1.5 shrink-0">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          aria-label="Halaman sebelumnya"
          className="flex items-center justify-center size-8 rounded-lg border border-neutral-30 bg-neutral-10 text-neutral-70 hover:bg-neutral-20 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          <ChevronLeft className="size-4" />
        </button>

        {pages.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => onPageChange(p)}
            aria-label={`Halaman ${p}`}
            aria-current={currentPage === p ? 'page' : undefined}
            className={cn(
              'flex items-center justify-center size-8 rounded-lg text-xs transition-colors cursor-pointer',
              currentPage === p
                ? 'bg-merchant-primary text-neutral-10 font-bold shadow-xs'
                : 'border border-neutral-30 bg-neutral-10 text-neutral-80 hover:bg-neutral-20 font-medium',
            )}
          >
            {p}
          </button>
        ))}

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          aria-label="Halaman berikutnya"
          className="flex items-center justify-center size-8 rounded-lg border border-neutral-30 bg-neutral-10 text-neutral-70 hover:bg-neutral-20 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
