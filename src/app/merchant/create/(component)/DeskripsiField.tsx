'use client';

import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';
import { useFormContext } from 'react-hook-form';
import { createMenuText } from '../_data/create-menu-data';
import FieldLabel from './FieldLabel';

export default function DeskripsiField() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const deskripsi = watch('deskripsi') || '';
  const charCount = deskripsi.length;
  const isOverLimit = charCount > 300;
  const error = errors.deskripsi?.message as string | undefined;

  return (
    <div className="flex flex-col">
      <FieldLabel
        htmlFor="deskripsi"
        label={createMenuText.labelDeskripsi}
        required
        rightElement={
          <span
            className={cn(
              'text-xs font-mono font-medium',
              isOverLimit ? 'text-danger-main' : 'text-neutral-60',
            )}
          >
            {charCount} / 300 Karakter
          </span>
        }
      />

      <textarea
        {...register('deskripsi')}
        id="deskripsi"
        rows={4}
        maxLength={300}
        placeholder="Tuliskan komposisi bahan, rasa khas, dan saran penyajian..."
        className={cn(
          'w-full rounded-lg border border-neutral-30 bg-neutral-10 p-3 text-sm text-neutral-90 placeholder:text-neutral-50',
          'focus:outline-none focus:border-merchant-primary focus:ring-1 focus:ring-merchant-primary transition-all resize-none',
          error &&
            'border-danger-main focus:border-danger-main focus:ring-danger-main',
        )}
      />

      <div className="flex items-center justify-between mt-1.5">
        <Typography
          as="p"
          variant="xs"
          className={cn(error ? 'text-danger-main' : 'text-neutral-60')}
        >
          {error || createMenuText.helpDeskripsi}
        </Typography>
      </div>
    </div>
  );
}
