import { Checkbox } from '@/components/ui/checkbox';
import { TableCell, TableRow } from '@/components/ui/table';
import { MenuItem } from '../_data/menu-items';
import AvailabilityCell from './AvailabilityCell';
import CategoryBadge from './CategoryBadge';
import MenuCell from './MenuCell';
import PriceCell from './PriceCell';
import RatingCell from './RatingCell';

export type MenuRowProps = {
  item: MenuItem;
  isSelected: boolean;
  onToggleSelect: (id: string) => void;
  onToggleAvailability: (id: string, newStatus: 'tersedia' | 'habis') => void;
};

export default function MenuRow({
  item,
  isSelected,
  onToggleSelect,
  onToggleAvailability,
}: MenuRowProps) {
  return (
    <TableRow
      data-state={isSelected ? 'selected' : undefined}
      className="border-neutral-30 hover:bg-neutral-20/50"
    >
      <TableCell className="w-10 pl-4 pr-0">
        <Checkbox
          checked={isSelected}
          onCheckedChange={() => onToggleSelect(item.id)}
          aria-label={`Pilih menu ${item.nama}`}
        />
      </TableCell>
      <TableCell className="py-3 pr-4">
        <MenuCell item={item} />
      </TableCell>
      <TableCell className="py-3 px-4 align-middle">
        <CategoryBadge kategori={item.kategori} />
      </TableCell>
      <TableCell className="py-3 px-4 align-middle">
        <PriceCell harga={item.harga} margin={item.margin} />
      </TableCell>
      <TableCell className="py-3 px-4 align-middle">
        <RatingCell rating={item.rating} jumlahUlasan={item.jumlahUlasan} />
      </TableCell>
      <TableCell className="py-3 px-4 align-middle">
        <AvailabilityCell
          menuId={item.id}
          menuNama={item.nama}
          status={item.status}
          sisaPorsi={item.sisaPorsi}
          onToggle={onToggleAvailability}
        />
      </TableCell>
    </TableRow>
  );
}
