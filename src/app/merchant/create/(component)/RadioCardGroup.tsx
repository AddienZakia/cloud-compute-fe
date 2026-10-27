'use client';

import Typography from '@/components/Typography';
import { Controller, useFormContext } from 'react-hook-form';
import { RadioOption } from '../_data/pricing-data';
import RadioCard from './RadioCard';

type Props = {
  name: 'estimasiMasak' | 'statusAwal';
  legend: string;
  options: RadioOption[];
};

export default function RadioCardGroup({ name, legend, options }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <fieldset className="flex flex-col gap-2">
          <legend className="mb-1">
            <Typography
              as="span"
              variant="s"
              weight="bold"
              className="text-neutral-90"
            >
              {legend}
            </Typography>
          </legend>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {options.map((option) => (
              <RadioCard
                key={option.id}
                name={name}
                option={option}
                isSelected={field.value === option.id}
                onSelect={(val) => field.onChange(val)}
              />
            ))}
          </div>
        </fieldset>
      )}
    />
  );
}
