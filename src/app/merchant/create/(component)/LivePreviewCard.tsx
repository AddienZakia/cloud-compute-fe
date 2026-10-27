import Typography from '@/components/Typography';
import { Eye } from 'lucide-react';
import { sidebarText } from '../_data/sidebar-data';
import EventStreamNote from './EventStreamNote';
import PreviewMenuCard from './PreviewMenuCard';

export default function LivePreviewCard() {
  return (
    <div className="flex flex-col gap-3 p-4 rounded-2xl bg-neutral-10 border border-neutral-30 shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Eye className="size-4 text-danger-main" />
          <Typography
            as="h2"
            variant="m"
            weight="bold"
            className="text-neutral-100"
          >
            {sidebarText.previewTitle}
          </Typography>
        </div>
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-neutral-20 text-neutral-70 border border-neutral-30">
          {sidebarText.previewBadge}
        </span>
      </div>

      <Typography as="p" variant="xs" className="text-neutral-60">
        {sidebarText.previewDesc}
      </Typography>

      {/* Live preview menu card */}
      <PreviewMenuCard />

      {/* Event stream note */}
      <EventStreamNote />
    </div>
  );
}
