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
        'flex items-center gap-3 px-4 py-2.5 rounded-lg mx-2 transition-colors duration-150 group',
        isActive
          ? 'bg-merchant-primary text-white'
          : 'text-neutral-70 hover:bg-merchant-primary-surface hover:text-merchant-primary',
      )}
    >
      <Icon
        className={cn(
          'w-4 h-4 shrink-0',
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
            'text-[10px] font-bold px-1.5 py-0.5 rounded-full',
            isActive
              ? 'bg-white text-merchant-primary'
              : 'bg-merchant-primary text-white',
          )}
        >
          {item.badge}
        </span>
      )}
    </Link>
  );
}
