import { navItems } from '../_data/sidebar-nav';
import SidebarNavItem from './SidebarNavItem';

type Props = {
  activePath: string;
};

export default function SidebarNavList({ activePath }: Props) {
  return (
    <nav className="flex flex-col gap-0.5 py-3 flex-1 overflow-y-auto">
      {navItems.map((item) => {
        const isKatalog =
          item.href === '/merchant/katalog' &&
          (activePath === '/merchant/katalog' ||
            activePath.startsWith('/merchant/create'));
        const isDashboard =
          item.href === '/merchant' && activePath === '/merchant';
        const isOther =
          item.href !== '/merchant' &&
          item.href !== '/merchant/katalog' &&
          activePath === item.href;
        const isActive = isKatalog || isDashboard || isOther;

        return <SidebarNavItem key={item.id} item={item} isActive={isActive} />;
      })}
    </nav>
  );
}
