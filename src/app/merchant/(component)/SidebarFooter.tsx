import Typography from '@/components/Typography';
import { Switch } from '@/components/ui/switch';
import { LogOut, Wifi } from 'lucide-react';
import { footerInfo, kafkaStatus } from '../_data/sidebar-nav';

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
    <div className="border-t border-neutral-30 px-4 py-3 flex flex-col gap-3">
      {/* Kafka status */}
      <div className="flex items-center gap-2">
        <Wifi className="w-3.5 h-3.5 text-success-main shrink-0" />
        <Typography as="span" variant="s" className="text-neutral-70">
          {kafkaStatus.name} ·{' '}
          <span className="text-success-main font-bold">
            {kafkaStatus.status}
          </span>
        </Typography>
        <Typography
          as="span"
          variant="xs"
          className="text-neutral-50 ml-auto truncate"
        >
          {kafkaStatus.clusterId}
        </Typography>
      </div>

      {/* Notification toggle */}
      <div className="flex items-center justify-between gap-2">
        <Typography as="span" variant="s" className="text-neutral-80">
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
        className="flex items-center gap-2 text-danger-main hover:text-danger-hover transition-colors duration-150 cursor-pointer"
      >
        <LogOut className="w-4 h-4" />
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
