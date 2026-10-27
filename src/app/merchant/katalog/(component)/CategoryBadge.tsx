import { cn } from '@/lib/utils';

export type CategoryBadgeProps = {
  kategori: string;
};

// Konfigurasi warna pill kategori menggunakan token globals.css
const categoryStyles: Record<string, string> = {
  'Paket Nasi & Ayam':
    'bg-cat-paket text-cat-paket-text border border-orange-200',
  'Paket Hemat': 'bg-cat-paket text-cat-paket-text border border-orange-200',
  'Aneka Bebek': 'bg-cat-bebek text-cat-bebek-text border border-amber-200',
  'Lauk Tambahan': 'bg-cat-lauk text-cat-lauk-text border border-neutral-30',
  'Minuman Segar':
    'bg-cat-minuman text-cat-minuman-text border border-cyan-200',
};

export default function CategoryBadge({ kategori }: CategoryBadgeProps) {
  const style =
    categoryStyles[kategori] ??
    'bg-neutral-20 text-neutral-80 border border-neutral-30';

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap',
        style,
      )}
    >
      {kategori}
    </span>
  );
}
