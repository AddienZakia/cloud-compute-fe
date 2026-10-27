import { Search } from 'lucide-react';
import { MenuCategory } from '../(container)/data';

interface Props {
  categories: MenuCategory[];
  active: MenuCategory;
  query: string;
  placeholder: string;
  onSelect: (c: MenuCategory) => void;
  onQuery: (q: string) => void;
}

export default function MenuCategoryTabs({
  categories,
  active,
  query,
  placeholder,
  onSelect,
  onQuery,
}: Props) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => onSelect(c)}
            className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition ${
              c === active
                ? 'bg-[#D91E18] text-white shadow-sm'
                : 'bg-[#FFE8E3] text-slate-600 hover:bg-[#FFD9D1]'
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <label className="flex min-w-0 flex-1 items-center gap-2 rounded-xl bg-[#FFF1EE] px-3 py-2 sm:max-w-xs">
        <Search size={14} className="shrink-0 text-slate-400" />
        <input
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent text-xs text-slate-700 outline-none placeholder:text-slate-400"
        />
      </label>
    </div>
  );
}
