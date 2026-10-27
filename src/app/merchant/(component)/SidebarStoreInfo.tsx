import Typography from '@/components/Typography';
import { storeInfo } from '../_data/sidebar-nav';

export default function SidebarStoreInfo() {
  return (
    <div className="border-neutral-30 flex items-center gap-2 border-b px-4 py-3">
      <div className="bg-merchant-primary-surface border-merchant-primary-border flex h-9 w-9 shrink-0 items-center justify-center rounded-full border">
        <Typography
          as="span"
          variant="m"
          weight="bold"
          className="text-merchant-primary"
        >
          {storeInfo.name.charAt(0)}
        </Typography>
      </div>
      <div className="flex min-w-0 flex-col">
        <Typography
          as="p"
          variant="m"
          weight="bold"
          className="truncate text-neutral-100"
        >
          {storeInfo.name}
        </Typography>
        <Typography as="p" variant="s" className="text-neutral-60 truncate">
          {storeInfo.branch}
        </Typography>
      </div>
      <span
        className={`ml-auto shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold ${
          storeInfo.isOpen
            ? 'bg-success-surface text-success-main border-success-border border'
            : 'bg-danger-surface text-danger-main border-danger-border border'
        }`}
      >
        {storeInfo.isOpen ? storeInfo.openLabel : storeInfo.closedLabel}
      </span>
    </div>
  );
}
