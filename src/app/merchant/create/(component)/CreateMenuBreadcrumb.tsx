import Typography from '@/components/Typography';
import Link from 'next/link';
import { createMenuText } from '../_data/create-menu-data';

export default function CreateMenuBreadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2">
      <Link
        href="/merchant/katalog"
        className="text-neutral-60 hover:text-merchant-primary transition-colors"
      >
        <Typography
          as="span"
          variant="s"
          className="text-neutral-60 hover:text-merchant-primary"
        >
          {createMenuText.breadcrumbParent}
        </Typography>
      </Link>
      <span className="text-neutral-40 text-xs">/</span>
      <Typography
        as="span"
        variant="s"
        weight="bold"
        className="text-neutral-100"
      >
        {createMenuText.breadcrumbCurrent}
      </Typography>
    </nav>
  );
}
