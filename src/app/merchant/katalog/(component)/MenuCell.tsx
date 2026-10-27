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
      <div className="bg-neutral-30 border-neutral-30 relative size-14 shrink-0 overflow-hidden rounded-lg border">
        <Image
          src={item.foto}
          alt={item.nama}
          width={56}
          height={56}
          className={cn(
            'size-full object-cover transition-all',
            isHabis && 'opacity-60 grayscale',
          )}
        />
        <span className="text-neutral-10 absolute inset-x-0 bottom-0 bg-neutral-100/70 py-0.5 text-center text-[8px] leading-none font-bold">
          Foto HD
        </span>
      </div>

      {/* Info Menu */}
      <div className="flex max-w-[320px] min-w-[200px] flex-col gap-0.5">
        <div className="flex flex-wrap items-center gap-2">
          <Typography
            as="span"
            variant="m"
            weight="bold"
            className={cn(
              isHabis ? 'text-neutral-60 line-through' : 'text-neutral-100',
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

        <div className="text-neutral-60 mt-0.5 flex items-center gap-1.5 text-[11px]">
          <span className="text-neutral-70 font-semibold">SKU: {item.sku}</span>
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
