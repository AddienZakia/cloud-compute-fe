import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { DriverLayoutShell } from './(component)/DriverLayoutShell';
import { DriverProvider } from './(container)/DriverContext';

export const metadata: Metadata = {
  title: 'Dashboard Driver | Bungkusin',
  description: 'Portal Operasional Pengemudi dan Armada Bungkusin',
};

export default function DriverLayout({ children }: { children: ReactNode }) {
  return (
    <DriverProvider>
      <DriverLayoutShell>{children}</DriverLayoutShell>
    </DriverProvider>
  );
}
