import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { type NavItem } from '../_data/sidebar-nav';

type Props = {
  item: NavItem;
  isActive: boolean;
};

export default function SidebarNavItem({ item, isActive }: Props) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'group mx-2 flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-150',
        isActive
          ? 'bg-[#e3261c] font-bold text-white shadow-sm'
          : 'text-[#754638] hover:bg-[#f7e0d8] hover:text-[#b50303]',
      )}
    >
      <Icon
        className={cn(
          'h-3.5 w-3.5 shrink-0',
          isActive ? 'text-white' : 'text-[#754638] group-hover:text-[#b50303]',
        )}
      />
      <Typography
        as="span"
        variant="s"
        weight={isActive ? 'bold' : 'regular'}
        className={cn(
          'flex-1',
          isActive ? 'text-white' : 'text-[#754638] group-hover:text-[#b50303]',
        )}
      >
        {item.label}
      </Typography>
      {item.badge && (
        <span
          className={cn(
            'text-[10px] font-bold px-1.5 py-0.5 rounded-full',
            isActive ? 'bg-white text-[#b50303]' : 'bg-[#b50303] text-white',
          )}
        >
          {item.badge}
        </span>
      )}
    </Link>
  );
}
