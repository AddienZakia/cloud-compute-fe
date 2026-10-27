'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import SidebarBrand from '../(component)/SidebarBrand';
import SidebarFooter from '../(component)/SidebarFooter';
import SidebarNavList from '../(component)/SidebarNavList';
import SidebarStoreInfo from '../(component)/SidebarStoreInfo';

export default function MerchantSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [notifOn, setNotifOn] = useState(true);

  function handleLogout() {
    // Placeholder: replace with actual auth signout when ready
    router.push('/auth');
  }

  return (
    <aside
      className="border-neutral-30 sticky top-0 flex h-screen w-60 shrink-0 flex-col overflow-hidden border-r bg-white"
      // Override Switch active colour for the merchant context only
      style={
        {
          '--switch-active-color': 'var(--color-merchant-primary)',
        } as React.CSSProperties
      }
    >
      <SidebarBrand />
      <SidebarStoreInfo />
      <SidebarNavList activePath={pathname} />
      <SidebarFooter
        notifOn={notifOn}
        onToggleNotif={setNotifOn}
        onLogout={handleLogout}
      />
    </aside>
  );
}
