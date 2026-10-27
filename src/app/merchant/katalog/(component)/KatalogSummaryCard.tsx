/**
 * KatalogSummaryCard — Kartu ringkasan ringan untuk halaman katalog.
 *
 * Dibuat terpisah dari dashboard StatCard karena:
 * 1. Struktur lebih sederhana — hanya label, value, unit, icon (tanpa footer/trend/badge).
 * 2. StatCard terikat ketat ke tipe StatCardData dengan footer variants yang kompleks.
 * 3. Menghindari prop-sprawl dan conditional rendering berlebihan di satu komponen.
 */
import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';
import * as React from 'react';

const iconVariants = {
  neutral: 'bg-neutral-30 text-neutral-80',
  success: 'bg-success-surface text-success-main border border-success-border',
  danger: 'bg-danger-surface text-danger-main border border-danger-border',
} as const;

export type KatalogSummaryCardProps = {
  label: string;
  value: number;
  unit: string;
  icon: React.ElementType;
  variant: keyof typeof iconVariants;
};

export default function KatalogSummaryCard({
  label,
  value,
  unit,
  icon: Icon,
  variant,
}: KatalogSummaryCardProps) {
  return (
    <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-10 border border-neutral-30 shadow-xs">
      <div className="flex items-center justify-between">
        <Typography
          as="span"
          variant="xs"
          weight="bold"
          className="text-neutral-60 tracking-wider"
        >
          {label}
        </Typography>
        <div
          className={cn(
            'flex items-center justify-center w-7 h-7 rounded-lg shrink-0',
            iconVariants[variant],
          )}
        >
          <Icon className="size-4" />
        </div>
      </div>

      <div className="flex items-baseline gap-1.5">
        <Typography
          as="span"
          variant="hl"
          weight="bold"
          className={
            variant === 'danger' ? 'text-danger-main' : 'text-neutral-100'
          }
        >
          {value}
        </Typography>
        <Typography as="span" variant="s" className="text-neutral-60">
          {unit}
        </Typography>
      </div>
    </div>
  );
}
