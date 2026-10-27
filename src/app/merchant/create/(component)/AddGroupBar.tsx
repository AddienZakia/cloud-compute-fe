import Typography from '@/components/Typography';
import { ListPlus } from 'lucide-react';

type Props = {
  onAdd: () => void;
};

export default function AddGroupBar({ onAdd }: Props) {
  return (
    <button
      type="button"
      onClick={onAdd}
      className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#f0e5e3] bg-[#fbf2f0] px-4 py-3.5 text-danger-main transition-colors hover:bg-[#f5ecea]"
    >
      <ListPlus className="size-4 stroke-[2.5]" />
      <Typography
        as="span"
        variant="s"
        weight="bold"
        className="text-danger-main"
      >
        + Tambah Grup Varian Baru (Contoh: Ukuran Porsi, Pilihan Saus)
      </Typography>
    </button>
  );
}
