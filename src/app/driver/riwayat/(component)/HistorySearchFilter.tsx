import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar, Search } from 'lucide-react';
import { availableMonths } from '../../_data/delivery-history-data';

interface HistorySearchFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedMonth: string;
  onMonthChange: (month: string) => void;
}

export function HistorySearchFilter({
  searchQuery,
  onSearchChange,
  selectedMonth,
  onMonthChange,
}: HistorySearchFilterProps) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
      <div className="flex items-center gap-1.5 rounded-xl border border-driver-border bg-neutral-10 px-2 py-0.5">
        <Calendar
          className="size-4 shrink-0 text-neutral-60"
          aria-hidden="true"
        />
        <Select value={selectedMonth} onValueChange={onMonthChange}>
          <SelectTrigger className="h-8 border-0 text-xs font-medium text-neutral-80 shadow-none focus-visible:ring-0">
            <SelectValue placeholder="Pilih Bulan" />
          </SelectTrigger>
          <SelectContent>
            {availableMonths.map((m) => (
              <SelectItem key={m.value} value={m.value} className="text-xs">
                {m.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="relative">
        <label htmlFor="history-search" className="sr-only">
          Cari ID pesanan, resto...
        </label>
        <Search
          className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-neutral-50"
          aria-hidden="true"
        />
        <input
          id="history-search"
          type="search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Cari ID pesanan, resto..."
          className="w-full sm:w-56 rounded-xl border border-driver-border bg-neutral-10 py-1.5 pl-8 pr-3 text-xs text-neutral-100 placeholder:text-neutral-50 focus:border-driver-primary focus:outline-none focus:ring-1 focus:ring-driver-primary"
        />
      </div>
    </div>
  );
}
