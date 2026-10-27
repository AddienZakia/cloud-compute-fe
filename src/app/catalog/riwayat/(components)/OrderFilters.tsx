import { Calendar, Search } from 'lucide-react';

type OrderFiltersProps = {
  searchValue: string;
  onSearchChange: (val: string) => void;
};

export default function OrderFilters({
  searchValue,
  onSearchChange,
}: OrderFiltersProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      {/* Search */}
      <div className="relative flex-1">
        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Cari nama restoran / ID..."
          className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-700 transition placeholder:text-slate-400 focus:border-red-300 focus:outline-none focus:ring-2 focus:ring-red-100"
        />
      </div>

      {/* Date filter */}
      <button className="flex shrink-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:border-slate-300">
        <Calendar className="h-4 w-4 text-slate-400" />
        Bulan Ini (Okt 2025)
      </button>
    </div>
  );
}
