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
      className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl border border-dashed border-neutral-30 bg-neutral-15/50 hover:bg-neutral-20/60 transition-colors text-danger-main cursor-pointer"
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
