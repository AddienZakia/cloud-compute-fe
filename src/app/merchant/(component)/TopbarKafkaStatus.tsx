import Typography from '@/components/Typography';

interface TopbarKafkaStatusProps {
  label: string;
  isLive?: boolean;
}

export default function TopbarKafkaStatus({
  label,
  isLive = true,
}: TopbarKafkaStatusProps) {
  return (
    <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-10 border border-neutral-30 shadow-xs">
      <span className="relative flex h-2 w-2 shrink-0">
        {isLive && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-main opacity-75" />
        )}
        <span className="relative inline-flex rounded-full h-2 w-2 bg-success-main" />
      </span>
      <Typography
        as="span"
        variant="s"
        weight="bold"
        className="text-neutral-80 whitespace-nowrap"
      >
        {label}
      </Typography>
    </div>
  );
}
