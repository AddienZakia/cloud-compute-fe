type CategoryChipProps = {
  label: string;
  icon: string;
  active?: boolean;
  onClick?: () => void;
};

export default function CategoryChip({
  label,
  icon,
  active = false,
  onClick,
}: CategoryChipProps) {
  return (
    <button
      onClick={onClick}
      className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 active:scale-95 ${
        active
          ? 'border-[#D91E18] bg-[#D91E18] text-white shadow-md shadow-red-200'
          : 'border-slate-200 bg-white text-slate-700 hover:border-red-200 hover:bg-red-50 hover:text-[#D91E18]'
      }`}
    >
      <span className="text-base leading-none">{icon}</span>
      <span>{label}</span>
    </button>
  );
}
