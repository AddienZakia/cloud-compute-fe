import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { MenuItem } from '../_data/menu-items';
import MenuBadge from './MenuBadge';

export type MenuCellProps = {
  item: MenuItem;
};

export default function MenuCell({ item }: MenuCellProps) {
  const isHabis = item.status === 'habis';

  return (
    <div className="flex items-center gap-3 py-1">
      {/* Thumbnail Foto Menu */}
      <div className="relative size-14 shrink-0 rounded-lg overflow-hidden bg-neutral-30 border border-neutral-30">
        <Image
          src={item.foto}
          alt={item.nama}
          width={56}
          height={56}
          className={cn(
            'size-full object-cover transition-all',
            isHabis && 'grayscale opacity-60',
          )}
        />
        <span className="absolute bottom-0 inset-x-0 bg-neutral-100/70 text-neutral-10 text-[8px] text-center font-bold py-0.5 leading-none">
          Foto HD
        </span>
      </div>

      {/* Info Menu */}
      <div className="flex flex-col gap-0.5 min-w-[200px] max-w-[320px]">
        <div className="flex items-center gap-2 flex-wrap">
          <Typography
            as="span"
            variant="m"
            weight="bold"
            className={cn(
              isHabis ? 'line-through text-neutral-60' : 'text-neutral-100',
            )}
          >
            {item.nama}
          </Typography>
          <MenuBadge
            badge={item.badge}
            sisaPorsi={item.sisaPorsi}
            status={item.status}
          />
        </div>

        <Typography as="p" variant="xs" className="text-neutral-60 truncate">
          {item.deskripsi}
        </Typography>

        <div className="flex items-center gap-1.5 text-[11px] text-neutral-60 mt-0.5">
          <span className="font-semibold text-neutral-70">SKU: {item.sku}</span>
          <span>•</span>
          {isHabis ? (
            <span className="text-danger-main font-semibold">
              Dapur habis {item.jamHabis ?? 'pkl 13:40'}
            </span>
          ) : (
            <span>Porsi Satuan</span>
          )}
        </div>
      </div>
    </div>
  );
}
