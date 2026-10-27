import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { MenuItem } from '../_data/menu-items';
import MenuRow from './MenuRow';

export type KatalogTableProps = {
  items: MenuItem[];
  selectedIds: string[];
  isAllSelected?: boolean;
  isSomeSelected?: boolean;
  onToggleSelect: (id: string) => void;
  onToggleAll: () => void;
  onToggleAvailability: (id: string, newStatus: 'tersedia' | 'habis') => void;
};

export default function KatalogTable({
  items,
  selectedIds,
  isAllSelected,
  isSomeSelected,
  onToggleSelect,
  onToggleAll,
  onToggleAvailability,
}: KatalogTableProps) {
  const allChecked =
    isAllSelected !== undefined
      ? isAllSelected
      : items.length > 0 && items.every((i) => selectedIds.includes(i.id));

  const someChecked =
    isSomeSelected !== undefined
      ? isSomeSelected
      : items.some((i) => selectedIds.includes(i.id)) && !allChecked;

  const checkboxState = allChecked
    ? true
    : someChecked
      ? 'indeterminate'
      : false;

  return (
    <div className="w-full overflow-hidden rounded-xl border border-neutral-30 bg-neutral-10 shadow-xs">
      <div className="overflow-x-auto">
        <Table className="w-full min-w-[760px]">
          <TableHeader className="bg-neutral-20/60 border-b border-neutral-30">
            <TableRow className="border-b border-neutral-30 hover:bg-transparent">
              <TableHead className="w-10 pl-4 pr-0">
                <Checkbox
                  checked={checkboxState}
                  onCheckedChange={onToggleAll}
                  aria-label="Pilih semua menu di halaman ini"
                  className="data-[state=indeterminate]:bg-merchant-primary data-[state=indeterminate]:border-merchant-primary data-[state=checked]:bg-merchant-primary data-[state=checked]:border-merchant-primary"
                />
              </TableHead>
              <TableHead className="text-xs font-bold tracking-wider text-neutral-60 py-3.5 pr-4">
                MENU & FOTO
              </TableHead>
              <TableHead className="text-xs font-bold tracking-wider text-neutral-60 py-3.5 px-4">
                KATEGORI
              </TableHead>
              <TableHead className="text-xs font-bold tracking-wider text-neutral-60 py-3.5 px-4">
                HARGA JUAL
              </TableHead>
              <TableHead className="text-xs font-bold tracking-wider text-neutral-60 py-3.5 px-4">
                RATING & PERFORMA
              </TableHead>
              <TableHead className="text-xs font-bold tracking-wider text-neutral-60 py-3.5 px-4">
                STATUS KETERSEDIAAN
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {items.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="h-32 text-center text-neutral-60 text-sm"
                >
                  Tidak ada menu yang sesuai dengan filter.
                </TableCell>
              </TableRow>
            ) : (
              items.map((item) => (
                <MenuRow
                  key={item.id}
                  item={item}
                  isSelected={selectedIds.includes(item.id)}
                  onToggleSelect={onToggleSelect}
                  onToggleAvailability={onToggleAvailability}
                />
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
