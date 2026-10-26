import Typography from '@/components/Typography';

export default function MerchantDashboardPage() {
  return (
    <div className="p-6">
      <Typography
        as="h1"
        variant="hl"
        weight="bold"
        className="text-neutral-100"
      >
        Dashboard
      </Typography>
      <Typography as="p" variant="l" className="text-neutral-60 mt-1">
        Selamat datang di Portal Merchant.
      </Typography>
    </div>
  );
}
