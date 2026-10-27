import Typography from '@/components/Typography';
import Link from 'next/link';
import * as React from 'react';
import { BreadcrumbItem } from '../_data/topbar';

interface TopbarBreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function TopbarBreadcrumb({ items }: TopbarBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={`${item.label}-${index}`}>
            {index > 0 && (
              <span className="text-neutral-50 select-none text-xs">/</span>
            )}

            {isLast || !item.href ? (
              <Typography
                as="span"
                variant="m"
                weight={isLast ? 'bold' : 'regular'}
                className={isLast ? 'text-neutral-100' : 'text-neutral-60'}
              >
                {item.label}
              </Typography>
            ) : (
              <Link
                href={item.href}
                className="hover:text-merchant-primary transition-colors"
              >
                <Typography
                  as="span"
                  variant="m"
                  weight="regular"
                  className="text-neutral-60 hover:text-merchant-primary"
                >
                  {item.label}
                </Typography>
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
