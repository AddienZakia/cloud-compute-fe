import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

interface Crumb {
  label: string;
  href?: string;
}

interface Props {
  crumbs: Crumb[];
}

export default function BreadcrumbBar({ crumbs }: Props) {
  return (
    <nav aria-label="breadcrumb" className="flex items-center gap-1 flex-wrap">
      <Home size={13} className="text-slate-400 shrink-0" />
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1">
          <ChevronRight size={12} className="text-slate-300" />
          {crumb.href ? (
            <Link
              href={crumb.href}
              className="text-xs font-semibold text-[#D91E18] hover:underline"
            >
              {crumb.label}
            </Link>
          ) : (
            <span className="text-xs font-bold text-slate-700">
              {crumb.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
