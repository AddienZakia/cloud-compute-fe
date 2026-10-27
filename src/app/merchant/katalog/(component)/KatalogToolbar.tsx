import { CATEGORIES } from '../(container)/useMenuFilter';
import BulkActionButton from './BulkActionButton';
import CategoryChip from './CategoryChip';
import SearchInput from './SearchInput';
import StatusFilter from './StatusFilter';

export type KatalogToolbarProps = {
  search: string;
  onSearchChange: (value: string) => void;
  status: string;
  onStatusChange: (status: string) => void;
  statusCounts: { all: number; tersedia: number; habis: number };
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categoryCounts: Record<string, number>;
};

export default function KatalogToolbar({
  search,
  onSearchChange,
  status,
  onStatusChange,
  statusCounts,
  selectedCategory,
  onCategoryChange,
  categoryCounts,
}: KatalogToolbarProps) {
  return (
    <div className="flex flex-col gap-3 p-4 rounded-xl bg-neutral-10 border border-neutral-30 shadow-xs">
      {/* Baris Atas: Pencarian, Status Filter, Ubah Status Massal */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        <SearchInput value={search} onChange={onSearchChange} />
        <div className="flex items-center gap-3 shrink-0">
          <StatusFilter
            value={status}
            onChange={onStatusChange}
            counts={statusCounts}
          />
          <BulkActionButton />
        </div>
      </div>

      {/* Baris Bawah: Chip Kategori */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pt-1">
        {CATEGORIES.map((cat) => (
          <CategoryChip
            key={cat}
            label={cat}
            count={categoryCounts[cat] ?? 0}
            isActive={selectedCategory === cat}
            onClick={() => onCategoryChange(cat)}
          />
        ))}
      </div>
    </div>
  );
}
