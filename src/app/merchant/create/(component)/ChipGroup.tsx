'use client';

import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';
import { Check, Plus } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { toast } from 'sonner';
import { DEFAULT_TAG_OPTIONS } from '../_data/create-menu-data';

export default function ChipGroup() {
  const { watch, setValue } = useFormContext();
  const currentTags: string[] = watch('tags') || [];

  const handleToggle = (tag: string) => {
    if (currentTags.includes(tag)) {
      setValue(
        'tags',
        currentTags.filter((t) => t !== tag),
        { shouldValidate: true },
      );
    } else {
      setValue('tags', [...currentTags, tag], { shouldValidate: true });
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {DEFAULT_TAG_OPTIONS.map((tag) => {
        const isSelected = currentTags.includes(tag);
        return (
          <button
            key={tag}
            type="button"
            onClick={() => handleToggle(tag)}
            className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors border',
              isSelected
                ? 'bg-merchant-primary/10 text-merchant-primary border-merchant-primary/30 hover:bg-merchant-primary/15'
                : 'bg-neutral-20 text-neutral-70 border-neutral-30 hover:bg-neutral-30 hover:text-neutral-90',
            )}
          >
            <span>{tag}</span>
            {isSelected && <Check className="size-3.5 stroke-[2.5]" />}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => toast.info('Fitur kustom tag segera hadir')}
        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium border border-dashed border-neutral-40 text-neutral-60 hover:text-neutral-90 hover:border-neutral-50 bg-transparent transition-colors"
      >
        <Plus className="size-3.5" />
        <Typography as="span" variant="xs" className="font-medium">
          Tambah Tag
        </Typography>
      </button>
    </div>
  );
}
