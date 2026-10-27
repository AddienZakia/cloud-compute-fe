'use client';

import { Input } from '@/components/ui/input';
import { Check, Lock } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { createMenuText } from '../_data/create-menu-data';
import FieldLabel from './FieldLabel';

export default function NamaSkuFields() {
  const {
    watch,
    formState: { errors },
  } = useFormContext();

  const namaValue = watch('nama') || '';
  const isNamaValid = !errors.nama && namaValue.trim().length >= 3;

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* Field: Nama Hidangan */}
      <div className="md:col-span-8">
        <FieldLabel
          htmlFor="nama"
          label={createMenuText.labelNama}
          required
          rightElement={
            isNamaValid ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-success-surface text-success-main border border-success-border">
                <Check className="size-3 stroke-[2.5]" />
                {createMenuText.badgeGuideline}
              </span>
            ) : null
          }
        />
        <div className="relative">
          <Input
            id="nama"
            placeholder="Contoh: Ayam Bakar Madu Spesial"
            helperText={createMenuText.helpNama}
            className="pr-9"
          />
          {isNamaValid && (
            <div className="absolute right-3 top-2.5 pointer-events-none text-success-main">
              <Check className="size-4 stroke-[2.5]" />
            </div>
          )}
        </div>
      </div>

      {/* Field: SKU / Kode Menu */}
      <div className="md:col-span-4">
        <FieldLabel
          htmlFor="sku"
          label={createMenuText.labelSku}
          rightElement={
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-neutral-20 text-neutral-60 border border-neutral-30">
              {createMenuText.badgeAuto}
            </span>
          }
        />
        <div className="relative">
          <Input
            id="sku"
            disabled
            helperText={createMenuText.helpSku}
            className="pr-9 bg-neutral-20 text-neutral-80 font-mono text-xs font-semibold cursor-not-allowed"
          />
          <div className="absolute right-3 top-2.5 pointer-events-none text-neutral-50">
            <Lock className="size-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
