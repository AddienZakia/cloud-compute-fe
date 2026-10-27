import Typography from '@/components/Typography';

export type PriceCellProps = {
  harga: number;
  margin: number;
};

const currencyFormatter = new Intl.NumberFormat('id-ID');

export default function PriceCell({ harga, margin }: PriceCellProps) {
  return (
    <div className="flex flex-col gap-0.5 whitespace-nowrap">
      <div className="flex items-baseline gap-1">
        <Typography as="span" variant="xs" className="text-neutral-70">
          Rp
        </Typography>
        <Typography
          as="span"
          variant="m"
          weight="bold"
          className="text-neutral-100"
        >
          {currencyFormatter.format(harga)}
        </Typography>
      </div>
      <Typography as="span" variant="xs" className="text-neutral-60">
        Margin Net {margin}%
      </Typography>
    </div>
  );
}
