import Typography from '@/components/Typography';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function RecentOrdersHeader() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-2.5">
        <span className="w-2.5 h-2.5 rounded-full bg-merchant-primary shrink-0" />
        <Typography
          as="h2"
          variant="hl"
          weight="bold"
          className="text-neutral-100 text-lg md:text-xl"
        >
          Pesanan Masuk Terbaru (Realtime Stream)
        </Typography>
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-merchant-primary text-white text-[10px] font-bold tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Live Kafka
        </div>
      </div>

      <Link
        href="/merchant/antrian"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-merchant-primary hover:text-merchant-primary-hover transition-colors"
      >
        Lihat Semua Antrean
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}
