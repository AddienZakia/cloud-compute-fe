import Typography from '@/components/Typography';
import { MessageSquareText } from 'lucide-react';

type Props = {
  note?: string;
};

export default function BuyerNote({ note }: Props) {
  if (!note || note.trim().length === 0) return null;

  return (
    <div className="flex flex-col gap-1 p-3 rounded-xl bg-merchant-primary-surface/70 border border-merchant-primary-border/50">
      <div className="flex items-center gap-1.5 text-merchant-primary">
        <MessageSquareText className="size-3.5 stroke-[2.5]" />
        <Typography
          as="span"
          variant="xs"
          weight="bold"
          className="tracking-wider text-[10px] uppercase font-mono"
        >
          CATATAN PEMBELI:
        </Typography>
      </div>

      <Typography
        as="p"
        variant="xs"
        className="italic text-neutral-80 leading-relaxed text-[12px]"
      >
        “{note}”
      </Typography>
    </div>
  );
}
