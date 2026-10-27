import Typography from '@/components/Typography';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

export type AvailabilityCellProps = {
  menuId: string;
  menuNama: string;
  status: 'tersedia' | 'habis';
  sisaPorsi?: number | null;
  onToggle: (id: string, newStatus: 'tersedia' | 'habis') => void;
};

export default function AvailabilityCell({
  menuId,
  menuNama,
  status,
  sisaPorsi,
  onToggle,
}: AvailabilityCellProps) {
  const isAvailable = status === 'tersedia';

  return (
    <div className="flex flex-col items-start gap-1">
      <Switch
        checked={isAvailable}
        onCheckedChange={(checked) =>
          onToggle(menuId, checked ? 'tersedia' : 'habis')
        }
        aria-label={`Ubah ketersediaan untuk ${menuNama}`}
        className="[--switch-active-color:var(--color-success-main)]"
      />

      <Typography
        as="span"
        variant="xs"
        weight="bold"
        className={cn(isAvailable ? 'text-success-main' : 'text-danger-main')}
      >
        {isAvailable
          ? sisaPorsi
            ? `Tersedia (Sisa ${sisaPorsi})`
            : 'Tersedia'
          : 'Habis Hari Ini'}
      </Typography>
    </div>
  );
}
