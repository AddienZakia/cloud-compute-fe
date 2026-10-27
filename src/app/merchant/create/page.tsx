import type { CSSProperties } from 'react';
import CreateMenuBreadcrumb from './(component)/CreateMenuBreadcrumb';
import CreateMenuHeader from './(component)/CreateMenuHeader';
import CreateMenuContainer from './(container)/CreateMenuContainer';

export default function CreateMenuPage() {
  return (
    <div
      className="font-nunitoSans mx-auto flex min-h-full w-full max-w-7xl flex-col gap-6 bg-[#fff8f6] p-6 pb-28 text-[#5b4138]"
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
      <CreateMenuBreadcrumb />
      <CreateMenuHeader />
      <CreateMenuContainer />
    </div>
  );
}
