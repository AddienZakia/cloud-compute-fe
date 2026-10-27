'use client';

import { removeToken } from '@/lib/cookie';
import { usePathname, useRouter } from 'next/navigation';
import SidebarBrand from '../(component)/SidebarBrand';
import SidebarFooter from '../(component)/SidebarFooter';
import SidebarNavList from '../(component)/SidebarNavList';
import SidebarStoreInfo from '../(component)/SidebarStoreInfo';

export default function MerchantSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  function handleLogout() {
    removeToken();
    router.push('/auth/login');
  }

  return (
    <aside
      className="border-neutral-30 sticky top-0 flex h-screen w-60 shrink-0 flex-col overflow-hidden border-r bg-white"
      style={
        {
          '--switch-active-color': 'var(--color-merchant-primary)',
        } as React.CSSProperties
      }
    >
      <SidebarBrand />
      <SidebarStoreInfo />
      <SidebarNavList activePath={pathname} />
      <SidebarFooter onLogout={handleLogout} />
    </aside>
  );
}
