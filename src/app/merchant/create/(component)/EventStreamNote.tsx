import Typography from '@/components/Typography';
import { Zap } from 'lucide-react';
import { sidebarText } from '../_data/sidebar-data';

export default function EventStreamNote() {
  return (
    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-20/60 border border-neutral-30">
      <Zap className="size-4 text-warning-main shrink-0 mt-0.5" />
      <div>
        <Typography
          as="p"
          variant="xs"
          className="text-neutral-80 leading-relaxed"
        >
          <span className="font-mono font-bold text-danger-main">
            resto.food.v1
          </span>{' '}
          {sidebarText.eventStream.replace(
            'Event stream topic resto.food.v1 ',
            '',
          )}
        </Typography>
      </div>
    </div>
  );
}
