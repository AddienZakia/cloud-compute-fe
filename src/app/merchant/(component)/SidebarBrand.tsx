import Typography from '@/components/Typography';

export default function SidebarBrand() {
  return (
    <div className="flex items-center gap-2 px-4 py-4 border-b border-neutral-30">
      <div className="flex items-center justify-center w-8 h-8 rounded-md bg-merchant-primary shrink-0">
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
          <span className="text-[9px] font-bold text-merchant-primary border border-merchant-primary rounded px-1 py-0.5 leading-none">
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
