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
      className="sticky top-0 flex flex-col w-60 h-screen bg-white border-r border-neutral-30 shrink-0 overflow-hidden"
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
