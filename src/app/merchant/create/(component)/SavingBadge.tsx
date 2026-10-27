type Props = {
  percentage: number | null;
};

export default function SavingBadge({ percentage }: Props) {
  if (!percentage || percentage <= 0) {
    return null;
  }

  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-success-surface text-success-main border border-success-border">
      Hemat {percentage}%
    </span>
  );
}
