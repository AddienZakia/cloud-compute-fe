'use client';

import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';
import { CheckCircle, Circle } from 'lucide-react';
import { useSectionValidity } from '../(container)/useSectionValidity';
import { SECTION_LABELS, actionBarText } from '../_data/action-bar-data';

export default function SectionProgress() {
  const validity = useSectionValidity();
  const completed = validity.filter(Boolean).length;

  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="flex items-center gap-1.5">
        {completed === 3 ? (
          <CheckCircle className="size-4 text-success-main stroke-[2.5]" />
        ) : (
          <Circle className="size-4 text-neutral-40" />
        )}
        <Typography
          as="span"
          variant="s"
          weight="bold"
          className={cn(
            completed === 3 ? 'text-success-main' : 'text-neutral-70',
          )}
        >
          {actionBarText.progressLabel(completed)}
        </Typography>
      </div>
      <div className="flex items-center gap-3">
        {SECTION_LABELS.map((label, i) => (
          <div key={label} className="flex items-center gap-1">
            {validity[i] ? (
              <CheckCircle className="size-3 text-success-main" />
            ) : (
              <Circle className="size-3 text-neutral-40" />
            )}
            <Typography
              as="span"
              variant="xs"
              className={validity[i] ? 'text-success-main' : 'text-neutral-50'}
            >
              {label}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
