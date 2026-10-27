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
      className={cn(
        'group mx-2 flex items-center gap-3 rounded-lg px-4 py-2.5 transition-colors duration-150',
        isActive
          ? 'bg-merchant-primary text-white'
          : 'text-neutral-70 hover:bg-merchant-primary-surface hover:text-merchant-primary',
      )}
    >
      <Icon
        className={cn(
          'h-4 w-4 shrink-0',
          isActive
            ? 'text-white'
            : 'text-neutral-60 group-hover:text-merchant-primary',
        )}
      />
      <Typography
        as="span"
        variant="m"
        weight={isActive ? 'bold' : 'regular'}
        className={cn(
          'flex-1',
          isActive
            ? 'text-white'
            : 'text-neutral-80 group-hover:text-merchant-primary',
        )}
      >
        {item.label}
      </Typography>
      {item.badge && (
        <span
          className={cn(
            'rounded-full px-1.5 py-0.5 text-[10px] font-bold',
            isActive
              ? 'text-merchant-primary bg-white'
              : 'bg-merchant-primary text-white',
          )}
        >
          {item.badge}
        </span>
      )}
    </Link>
  );
}
