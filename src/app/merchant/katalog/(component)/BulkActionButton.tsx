import Typography from '@/components/Typography';
import { SlidersHorizontal } from 'lucide-react';
import { toast } from 'sonner';

export type BulkActionButtonProps = {
  onClick?: () => void;
};

export default function BulkActionButton({ onClick }: BulkActionButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      toast.info('Fitur Ubah Status Massal segera hadir');
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-2 h-10 px-3.5 rounded-lg border border-neutral-30 bg-neutral-10 hover:bg-neutral-20 text-neutral-90 transition-colors cursor-pointer shrink-0"
    >
      <SlidersHorizontal className="size-4 text-neutral-70" />
      <Typography
        as="span"
        variant="s"
        weight="bold"
        className="text-neutral-90"
      >
        Ubah Status Massal
      </Typography>
    </button>
  );
}
