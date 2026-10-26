import Typography from '@/components/Typography';
import { ExternalLink, Layers, Plus, Zap } from 'lucide-react';
import { QuickActionItem, quickActions } from '../_data/dashboard-right-column';

interface QuickActionsCardProps {
  onAction: (key: QuickActionItem['key']) => void;
}

export default function QuickActionsCard({ onAction }: QuickActionsCardProps) {
  return (
    <div className="rounded-xl bg-neutral-10 border border-neutral-30 p-4 shadow-xs space-y-3">
      <div className="flex items-center justify-between pb-1">
        <Typography
          as="h3"
          variant="m"
          weight="bold"
          className="text-neutral-100"
        >
          Aksi Cepat Restoran
        </Typography>
        <Zap className="size-4 text-neutral-60" />
      </div>

      <div className="flex flex-col gap-2">
        {quickActions.map((action) => {
          const isPrimary = action.variant === 'primary';
          const isWarning = action.variant === 'warning';

          return (
            <button
              key={action.key}
              type="button"
              onClick={() => onAction(action.key)}
              className={`flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                isPrimary
                  ? 'bg-merchant-primary text-white hover:bg-merchant-primary-hover shadow-xs'
                  : isWarning
                    ? 'bg-warning-main text-white hover:bg-warning-hover shadow-xs'
                    : 'border border-neutral-40 bg-neutral-10 text-neutral-80 hover:bg-neutral-20'
              }`}
            >
              {action.key === 'ADD_MENU' && <Plus className="size-4" />}
              {action.key === 'STOCK_TOGGLE' && <Layers className="size-4" />}
              {action.key === 'VIEW_STORE' && (
                <ExternalLink className="size-4" />
              )}
              {action.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
