import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { Bell, ChevronDown, ExternalLink } from 'lucide-react';

interface TopbarActionsProps {
  publicStoreLabel: string;
  userName: string;
  userInitials: string;
  onViewPublicStore?: () => void;
  onNotificationsClick?: () => void;
}

export default function TopbarActions({
  publicStoreLabel,
  userName,
  userInitials,
  onViewPublicStore,
  onNotificationsClick,
}: TopbarActionsProps) {
  return (
    <div className="flex items-center gap-3">
      <Button
        variant="outlined"
        size="sm"
        onClick={onViewPublicStore}
        leftIcon={ExternalLink}
        className="h-9 px-3 border-neutral-40 hover:border-merchant-primary-border hover:bg-merchant-primary-surface text-neutral-90 hover:text-merchant-primary transition-colors text-xs font-semibold"
      >
        {publicStoreLabel}
      </Button>

      <button
        type="button"
        onClick={onNotificationsClick}
        aria-label="Notifikasi"
        className="relative flex items-center justify-center w-9 h-9 rounded-md border border-neutral-30 bg-neutral-10 text-neutral-70 hover:text-merchant-primary hover:border-merchant-primary-border hover:bg-merchant-primary-surface transition-colors cursor-pointer"
      >
        <Bell className="size-4.5" />
        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-merchant-primary" />
      </button>

      <div className="h-6 w-px bg-neutral-30" />

      <div className="flex items-center gap-2 pl-1 cursor-pointer group">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-merchant-primary-surface border border-merchant-primary-border text-merchant-primary shrink-0">
          <Typography as="span" variant="s" weight="bold">
            {userInitials}
          </Typography>
        </div>
        <Typography
          as="span"
          variant="m"
          weight="bold"
          className="text-neutral-90 group-hover:text-merchant-primary transition-colors hidden sm:inline-block"
        >
          {userName}
        </Typography>
        <ChevronDown className="size-4 text-neutral-50 group-hover:text-merchant-primary transition-colors" />
      </div>
    </div>
  );
}
