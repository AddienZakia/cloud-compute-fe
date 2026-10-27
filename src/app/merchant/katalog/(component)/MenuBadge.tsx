import { cn } from '@/lib/utils';

export type MenuBadgeProps = {
  badge?: string;
  sisaPorsi?: number | null;
  status: 'tersedia' | 'habis';
};

// Konfigurasi varian badge dalam satu objek (tanpa if-else bertingkat di JSX)
const badgeConfig: Record<string, { label: string; className: string }> = {
  FAVORIT: {
    label: 'FAVORIT',
    className:
      'bg-badge-favorit-surface text-badge-favorit border border-merchant-primary-border',
  },
  'BEST SELLER': {
    label: 'BEST SELLER',
    className:
      'bg-badge-bestseller-surface text-badge-bestseller border border-success-border',
  },
  HABIS: {
    label: 'HABIS',
    className:
      'bg-badge-habis-surface text-badge-habis border border-danger-border',
  },
};

export default function MenuBadge({
  badge,
  sisaPorsi,
  status,
}: MenuBadgeProps) {
  // Jika habis atau sisa porsi terdefinisi
  const key =
    status === 'habis'
      ? 'HABIS'
      : (badge ??
        (sisaPorsi !== null && sisaPorsi !== undefined ? 'SISA' : ''));

  if (!key) return null;

  if (
    key === 'SISA' ||
    key === 'Sisa 3' ||
    (sisaPorsi !== null && sisaPorsi !== undefined && sisaPorsi > 0)
  ) {
    return (
      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-badge-stock-surface text-badge-stock border border-warning-border">
        Sisa {sisaPorsi ?? 3} Porsi
      </span>
    );
  }

  const config = badgeConfig[key];
  if (!config) return null;

  return (
    <span
      className={cn(
        'inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold',
        config.className,
      )}
    >
      {config.label}
    </span>
  );
}
