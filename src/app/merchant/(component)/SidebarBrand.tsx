import Typography from '@/components/Typography';

export default function SidebarBrand() {
  return (
    <div className="border-neutral-30 flex items-center gap-2 border-b px-4 py-4">
      <div className="bg-merchant-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-md">
        <Typography as="span" variant="hs" weight="bold" className="text-white">
          B
        </Typography>
      </div>
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <Typography
            as="span"
            variant="m"
            weight="bold"
            className="text-neutral-100"
          >
            Bungkusin
          </Typography>
          <span className="text-merchant-primary border-merchant-primary rounded border px-1 py-0.5 text-[9px] leading-none font-bold">
            RESTO
          </span>
        </div>
        <Typography as="span" variant="s" className="text-neutral-60">
          PORTAL MERCHANT
        </Typography>
      </div>
    </div>
  );
}
