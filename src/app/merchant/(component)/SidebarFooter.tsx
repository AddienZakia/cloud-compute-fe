import Typography from '@/components/Typography';
import { Switch } from '@/components/ui/switch';
import { LogOut } from 'lucide-react';
import { footerInfo } from '../_data/sidebar-nav';

type Props = {
  notifOn: boolean;
  onToggleNotif: (val: boolean) => void;
  onLogout: () => void;
};

export default function SidebarFooter({
  notifOn,
  onToggleNotif,
  onLogout,
}: Props) {
  return (
    <div className="flex flex-col gap-3 border-t border-[#f0e5e3] bg-[#fff8f6] px-4 py-3">
      {/* Notification toggle */}
      <div className="flex items-center justify-between gap-2">
        <Typography as="span" variant="s" className="text-[#754638]">
          {footerInfo.notificationLabel}
        </Typography>
        <Switch
          checked={notifOn}
          onCheckedChange={onToggleNotif}
          aria-label={footerInfo.notificationLabel}
        />
      </div>

      {/* Logout */}
      <button
        type="button"
        onClick={onLogout}
        className="text-danger-main hover:text-danger-hover flex cursor-pointer items-center gap-2 transition-colors duration-150"
      >
        <LogOut className="h-4 w-4" />
        <Typography
          as="span"
          variant="m"
          weight="bold"
          className="text-danger-main"
        >
          {footerInfo.logoutLabel}
        </Typography>
      </button>
    </div>
  );
}
