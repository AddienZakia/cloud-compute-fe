'use client';

import { useGetAllMerchants } from '@/hooks/merchant';
import { useSearchParams } from 'next/navigation';
import InfoBar from '../(components)/InfoBar';
import { Merchant, merchant as defaultMerchant } from './data';

export default function InfoSection() {
  const searchParams = useSearchParams();
  const merchantId = searchParams.get('id');
  const { merchants } = useGetAllMerchants();

  const apiMerchant = merchantId
    ? merchants?.find((m) => m.id === merchantId) || merchants?.[0]
    : merchants?.[0];

  const currentMerchant: Merchant = apiMerchant
    ? {
        ...defaultMerchant,
        id: apiMerchant.id,
        name: apiMerchant.title,
        shortName: apiMerchant.title,
        address: apiMerchant.address || defaultMerchant.address,
        rating: String(apiMerchant.rating || '5'),
        banner: apiMerchant.imageUrl || defaultMerchant.banner,
        logo: apiMerchant.imageUrl || defaultMerchant.logo,
        store: apiMerchant.title,
      }
    : defaultMerchant;

  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 pt-4">
      <InfoBar merchant={currentMerchant} />
    </section>
  );
}
