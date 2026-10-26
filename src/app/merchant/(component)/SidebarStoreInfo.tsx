import Typography from '@/components/Typography';
import { storeInfo } from '../_data/sidebar-nav';

export default function SidebarStoreInfo() {
  return (
    <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-30">
      <div className="flex items-center justify-center w-9 h-9 rounded-full bg-merchant-primary-surface border border-merchant-primary-border shrink-0">
        <Typography
          as="span"
          variant="m"
          weight="bold"
          className="text-merchant-primary"
        >
          {storeInfo.name.charAt(0)}
        </Typography>
      </div>
      <div className="flex flex-col min-w-0">
        <Typography
          as="p"
          variant="m"
          weight="bold"
          className="text-neutral-100 truncate"
        >
          {storeInfo.name}
        </Typography>
        <Typography as="p" variant="s" className="text-neutral-60 truncate">
          {storeInfo.branch}
        </Typography>
      </div>
      <span
        className={`ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0 ${
          storeInfo.isOpen
            ? 'bg-success-surface text-success-main border border-success-border'
            : 'bg-danger-surface text-danger-main border border-danger-border'
        }`}
      >
        {storeInfo.isOpen ? storeInfo.openLabel : storeInfo.closedLabel}
      </span>
    </div>
  );
}
