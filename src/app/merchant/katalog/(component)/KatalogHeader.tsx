'use client';

import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { Plus, Settings } from 'lucide-react';
import { toast } from 'sonner';
import { katalogHeader } from '../_data/katalog';

export default function KatalogHeader() {
  return (
    <div className="flex flex-col gap-1">
      {/* Section label + Merchant ID */}
      <div className="flex items-center gap-2">
        <Typography
          as="span"
          variant="xs"
          weight="bold"
          className="text-neutral-60 tracking-wider"
        >
          {katalogHeader.sectionLabel}
        </Typography>
        <span className="text-neutral-50">•</span>
        <Typography as="span" variant="xs" className="text-neutral-60">
          Merchant ID: {katalogHeader.merchantId}
        </Typography>
      </div>

      {/* Title + Buttons row */}
      <div className="flex items-start justify-between gap-4 mt-1">
        <div className="flex flex-col gap-1">
          <Typography
            as="h1"
            variant="hl"
            weight="bold"
            className="text-neutral-100"
          >
            {katalogHeader.title}
          </Typography>
          <Typography as="p" variant="m" className="text-neutral-60 max-w-xl">
            {katalogHeader.description}
          </Typography>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="outlined"
            size="sm"
            leftIcon={Settings}
            onClick={() =>
              toast.info('Fitur Atur Variasi/Topping segera hadir')
            }
          >
            {katalogHeader.buttonVariasi}
          </Button>
          <Button
            size="sm"
            leftIcon={Plus}
            className="bg-merchant-primary hover:bg-merchant-primary-hover"
            onClick={() => toast.info('Fitur Tambahkan Menu Baru segera hadir')}
          >
            {katalogHeader.buttonTambahMenu}
          </Button>
        </div>
      </div>
    </div>
  );
}
