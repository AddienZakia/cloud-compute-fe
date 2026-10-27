import Typography from '@/components/Typography';
import { Utensils } from 'lucide-react';

export default function QueueHeader() {
  return (
    <div className="flex flex-col gap-1.5">
      {/* Eyebrow */}
      <div className="flex items-center gap-2">
        <Utensils className="size-4 text-merchant-primary stroke-[2.5]" />
        <Typography
          as="span"
          variant="xs"
          weight="bold"
          className="text-merchant-primary tracking-wide uppercase"
        >
          AYAM GORENG BERKAH PAK MUL • CABANG TEBET
        </Typography>
      </div>

      {/* Main Title */}
      <Typography
        as="h1"
        variant="hl"
        weight="bold"
        className="text-neutral-100 tracking-tight"
      >
        Antrean Dapur & Pesanan Masuk (KDS)
      </Typography>
    </div>
  );
}
