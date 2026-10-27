'use client';

import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { formatRupiah, parsePriceNumber } from '../_utils/pricing-calculator';
import FieldLabel from './FieldLabel';

type Props = {
  name: 'hargaJual' | 'hargaCoret';
  label: string;
  required?: boolean;
  placeholder?: string;
  helperText?: string;
  rightElement?: React.ReactNode;
};

export default function PriceField({
  name,
  label,
  required,
  placeholder = '0',
  helperText,
  rightElement,
}: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const val = field.value;
        const displayValue =
          val && Number(val) > 0 ? formatRupiah(Number(val)) : '';

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const raw = e.target.value;
          const parsed = parsePriceNumber(raw);
          field.onChange(
            raw === '' && name === 'hargaCoret' ? undefined : parsed,
          );
        };

        return (
          <div className="flex flex-col">
            <FieldLabel
              htmlFor={name}
              label={label}
              required={required}
              rightElement={rightElement}
            />
            <div className="relative flex items-center">
              <span className="absolute left-3 text-sm font-semibold text-neutral-50 pointer-events-none select-none">
                Rp
              </span>
              <input
                id={name}
                type="text"
                inputMode="numeric"
                value={displayValue}
                onChange={handleChange}
                placeholder={placeholder}
                className={cn(
                  'w-full rounded-lg border border-neutral-30 bg-neutral-10 pl-10 pr-3 py-2 text-sm font-mono text-neutral-90 placeholder:text-neutral-50',
                  'focus:outline-none focus:border-merchant-primary focus:ring-1 focus:ring-merchant-primary transition-all',
                  error &&
                    'border-danger-main focus:border-danger-main focus:ring-danger-main',
                )}
              />
            </div>
            {(error || helperText) && (
              <div className="mt-1">
                <Typography
                  as="p"
                  variant="xs"
                  className={error ? 'text-danger-main' : 'text-neutral-60'}
                >
                  {error?.message || helperText}
                </Typography>
              </div>
            )}
          </div>
        );
      }}
    />
  );
}
