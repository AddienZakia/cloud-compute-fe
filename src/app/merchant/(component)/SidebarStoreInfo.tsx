import Typography from '@/components/Typography';
import { storeInfo } from '../_data/sidebar-nav';

export default function SidebarStoreInfo() {
  return (
    <div className="mx-3 my-2 flex items-center gap-2 rounded-xl border border-[#f0e5e3] bg-white px-3 py-2 shadow-xs">
      <div className="flex min-w-0 flex-1 flex-col">
        <Typography
          as="p"
          variant="s"
          weight="bold"
          className="truncate text-neutral-100"
        >
          {storeInfo.name}
        </Typography>
        <Typography as="p" variant="xs" className="truncate text-neutral-60">
          {storeInfo.branch}
        </Typography>
      </div>
      <span
        className={`ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0 ${
          storeInfo.isOpen
            ? 'border border-success-border bg-success-surface text-success-main'
            : 'bg-danger-surface text-danger-main border border-danger-border'
        }`}
      >
        {storeInfo.isOpen && (
          <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-success-main" />
        )}
        {storeInfo.isOpen ? storeInfo.openLabel : storeInfo.closedLabel}
      </span>
    </div>
  );
}
