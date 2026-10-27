import type { ReactNode } from 'react';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  accentColor?: string; // hex color for the left bar
  rightSlot?: ReactNode;
};

export default function SectionHeader({
  title,
  subtitle,
  accentColor = '#D91E18',
  rightSlot,
}: SectionHeaderProps) {
  return (
    <div className="mb-6 flex items-center justify-between gap-4">
      {/* Left: accent bar + text */}
      <div className="flex items-start gap-3">
        <div
          className="mt-0.5 h-full min-h-[2.5rem] w-1 shrink-0 rounded-full"
          style={{ backgroundColor: accentColor }}
        />
        <div>
          <h2 className="text-lg font-extrabold text-slate-900 sm:text-xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-0.5 text-sm text-slate-500">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Right slot */}
      {rightSlot && <div className="shrink-0">{rightSlot}</div>}
    </div>
  );
}
