'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Controller, useFormContext } from 'react-hook-form';
import { KATEGORI_OPTIONS, createMenuText } from '../_data/create-menu-data';
import ChipGroup from './ChipGroup';
import FieldLabel from './FieldLabel';

export default function CategoryTagFields() {
  const { control } = useFormContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* Kategori Menu */}
      <div className="md:col-span-5">
        <FieldLabel
          htmlFor="kategori"
          label={createMenuText.labelKategori}
          required
        />
        <Controller
          name="kategori"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger
                id="kategori"
                className="w-full bg-neutral-10 border-neutral-30"
              >
                <SelectValue placeholder="Pilih Kategori Menu" />
              </SelectTrigger>
              <SelectContent>
                {KATEGORI_OPTIONS.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>

      {/* Label Filter Pencarian Konsumen */}
      <div className="md:col-span-7">
        <FieldLabel label={createMenuText.labelTags} />
        <ChipGroup />
      </div>
    </div>
  );
}
