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
      className="border-neutral-30 bg-neutral-15/50 hover:bg-neutral-20/60 text-danger-main flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed px-4 py-3.5 transition-colors"
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
