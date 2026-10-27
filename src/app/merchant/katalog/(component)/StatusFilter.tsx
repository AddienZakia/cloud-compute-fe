import Typography from '@/components/Typography';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export type StatusFilterProps = {
  value: string;
  onChange: (value: string) => void;
  counts: {
    all: number;
    tersedia: number;
    habis: number;
  };
};

export default function StatusFilter({
  value,
  onChange,
  counts,
}: StatusFilterProps) {
  return (
    <div className="flex items-center gap-2">
      <Typography as="span" variant="s" className="text-neutral-70 shrink-0">
        Status:
      </Typography>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="h-10 px-3 bg-neutral-10 border-neutral-30 text-sm font-semibold text-neutral-100 min-w-[160px] rounded-lg cursor-pointer">
          <SelectValue placeholder="Pilih Status" />
        </SelectTrigger>
        <SelectContent className="bg-neutral-10 border-neutral-30">
          <SelectItem value="all" className="cursor-pointer">
            Semua Status ({counts.all})
          </SelectItem>
          <SelectItem value="tersedia" className="cursor-pointer">
            Tersedia ({counts.tersedia})
          </SelectItem>
          <SelectItem value="habis" className="cursor-pointer">
            Habis ({counts.habis})
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
