'use client';

import { Coins } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import {
  estimasiMasakOptions,
  pricingText,
  statusAwalOptions,
} from '../_data/pricing-data';
import { calculateSavingPercentage } from '../_utils/pricing-calculator';
import FormSection from './FormSection';
import NetIncomeHint from './NetIncomeHint';
import PriceField from './PriceField';
import RadioCardGroup from './RadioCardGroup';
import SavingBadge from './SavingBadge';

export default function PricingSection() {
  const { watch } = useFormContext();
  const hargaJual = watch('hargaJual') || 0;
  const hargaCoret = watch('hargaCoret');
  const savingPct = calculateSavingPercentage(hargaJual, hargaCoret);

  const komisiBadge = (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-warning-surface text-warning-main border border-warning-border">
      {pricingText.badgeKomisi}
    </span>
  );

  return (
    <FormSection
      icon={Coins}
      title={pricingText.title}
      subtitle={pricingText.subtitle}
      badge={komisiBadge}
    >
      <div className="flex flex-col gap-5">
        {/* Row 1: Harga Jual & Harga Coret */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PriceField
            name="hargaJual"
            label={pricingText.labelHargaJual}
            required
            helperText={pricingText.helpHargaJual}
          />
          <PriceField
            name="hargaCoret"
            label={pricingText.labelHargaCoret}
            helperText={pricingText.helpHargaCoret}
            rightElement={<SavingBadge percentage={savingPct} />}
          />
        </div>

        {/* Row 1b: Perkiraan Pendapatan Neto */}
        <NetIncomeHint />

        {/* Row 2: Estimasi Waktu Masak */}
        <RadioCardGroup
          name="estimasiMasak"
          legend={pricingText.legendEstimasi}
          options={estimasiMasakOptions}
        />

        {/* Row 3: Status Ketersediaan Awal */}
        <RadioCardGroup
          name="statusAwal"
          legend={pricingText.legendStatus}
          options={statusAwalOptions}
        />
      </div>
    </FormSection>
  );
}
