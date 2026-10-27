import Typography from '@/components/Typography';
import * as React from 'react';

export type FormSectionProps = {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  badge?: React.ReactNode;
  children: React.ReactNode;
};

export default function FormSection({
  icon: Icon,
  title,
  subtitle,
  badge,
  children,
}: FormSectionProps) {
  return (
    <div className="flex flex-col p-5 rounded-2xl bg-neutral-10 border border-neutral-30 shadow-xs">
      {/* Header Seksi */}
      <div className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-30">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center size-8 rounded-lg bg-danger-surface text-danger-main border border-danger-border shrink-0">
            <Icon className="size-4" />
          </div>
          <div className="flex flex-col">
            <Typography
              as="h2"
              variant="m"
              weight="bold"
              className="text-neutral-100"
            >
              {title}
            </Typography>
            <Typography as="p" variant="xs" className="text-neutral-60">
              {subtitle}
            </Typography>
          </div>
        </div>

        {badge && <div className="shrink-0">{badge}</div>}
      </div>

      {/* Konten Seksi Form */}
      <div className="pt-4">{children}</div>
    </div>
  );
}
