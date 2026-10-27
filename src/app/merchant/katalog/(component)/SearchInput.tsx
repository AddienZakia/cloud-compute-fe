import { Search, X } from 'lucide-react';

export type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function SearchInput({
  value,
  onChange,
  placeholder = 'Cari nama menu atau SKU (contoh: AGB-019...)',
}: SearchInputProps) {
  return (
    <div className="relative flex-1 min-w-[260px]">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-60 pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-10 pl-9 pr-9 text-sm rounded-lg bg-neutral-10 border border-neutral-30 text-neutral-100 placeholder:text-neutral-60 outline-none transition-colors focus:border-merchant-primary"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-60 hover:text-neutral-90 cursor-pointer"
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  );
}
