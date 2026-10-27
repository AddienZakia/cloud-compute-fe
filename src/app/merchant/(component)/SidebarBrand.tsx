import Typography from '@/components/Typography';

export default function SidebarBrand() {
  return (
    <div className="flex items-center gap-2 border-b border-[#f0e5e3] bg-[#fff8f6] px-4 py-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#b50303]">
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
            className="text-[#b50303]"
          >
            Bungkusin
          </Typography>
          <span className="rounded-full bg-[#f7e0d8] px-1.5 py-0.5 text-[9px] leading-none font-bold text-[#754638]">
            RESTO
          </span>
        </div>
        <Typography as="span" variant="xs" className="text-[#754638]">
          PORTAL MERCHANT
        </Typography>
      </div>
    </div>
  );
}
