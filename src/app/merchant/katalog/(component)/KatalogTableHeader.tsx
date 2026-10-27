import { Checkbox } from '@/components/ui/checkbox';
import { TableHead, TableHeader, TableRow } from '@/components/ui/table';

export type KatalogTableHeaderProps = {
  checkboxState: boolean | 'indeterminate';
  onToggleAll: () => void;
};

export default function KatalogTableHeader({
  checkboxState,
  onToggleAll,
}: KatalogTableHeaderProps) {
  return (
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
  );
}
