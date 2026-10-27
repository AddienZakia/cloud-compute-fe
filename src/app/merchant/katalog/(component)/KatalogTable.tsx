import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { MenuItem } from '../_data/menu-items';
import KatalogTableHeader from './KatalogTableHeader';
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
    isAllSelected ??
    (items.length > 0 && items.every((i) => selectedIds.includes(i.id)));
  const someChecked =
    isSomeSelected ??
    (items.some((i) => selectedIds.includes(i.id)) && !allChecked);
  const checkboxState = allChecked
    ? true
    : someChecked
      ? 'indeterminate'
      : false;

  return (
    <div className="w-full overflow-hidden rounded-xl border border-neutral-30 bg-neutral-10 shadow-xs">
      <div className="overflow-x-auto">
        <Table className="w-full min-w-[760px]">
          <KatalogTableHeader
            checkboxState={checkboxState}
            onToggleAll={onToggleAll}
          />
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
