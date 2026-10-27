import type { CSSProperties } from 'react';
import KatalogHeader from './(component)/KatalogHeader';
import KatalogInfoGrid from './(component)/KatalogInfoGrid';
import KatalogContentContainer from './(container)/KatalogContentContainer';

export default function KatalogPage() {
  return (
    <div
      className="font-nunitoSans flex min-h-full flex-col gap-6 bg-[#fff8f6] p-6 text-[#5b4138]"
      style={
        {
          '--color-merchant-primary': '#b50303',
          '--color-merchant-primary-hover': '#8f0202',
          '--color-merchant-primary-surface': '#fbf2f0',
          '--color-merchant-primary-border': '#f0e5e3',
          '--color-danger-main': '#b50303',
          '--color-danger-hover': '#8f0202',
          '--color-danger-surface': '#fff3f2',
          '--color-danger-border': '#f0c5c0',
          '--color-neutral-20': '#f5ecea',
          '--color-neutral-30': '#eadfdd',
          '--color-neutral-60': '#8a756e',
          '--color-neutral-70': '#715b53',
          '--color-neutral-80': '#5f483f',
          '--color-neutral-100': '#2d211d',
        } as CSSProperties
      }
    >
      <KatalogHeader />
      <KatalogContentContainer />
      <KatalogInfoGrid />
    </div>
  );
}
