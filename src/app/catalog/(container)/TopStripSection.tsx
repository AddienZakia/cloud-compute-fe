import { ROUTES } from '@/lib/routes';
import BreadcrumbBar from '../(components)/BreadcrumbBar';
import { MenuDetail } from './data';

interface Props {
  menu: MenuDetail;
}

export default function TopStripSection({ menu }: Props) {
  const crumbs = [
    { label: 'Beranda', href: ROUTES.dashboard },
    { label: 'Restoran', href: ROUTES.dashboard },
    { label: 'Ayam Goreng Berkah Pak Mul', href: ROUTES.merchantDetail },
    { label: 'Detail Menu' },
    { label: menu.name },
  ];

  return (
    <div className="mx-auto max-w-[1200px] px-4 pt-4 pb-2">
      <BreadcrumbBar crumbs={crumbs} />

      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-2xl bg-[#FFF1EE] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F97316] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#F97316]" />
          </span>
          <p className="text-[12px] text-slate-700">
            Sedang ramai dipesan:{' '}
            <strong className="text-[#D91E18]">28 pesanan</strong> dilakukan di
            Tebet dalam 1 jam terakhir.
          </p>
        </div>
        <span className="flex items-center gap-1.5 self-start sm:self-auto shrink-0 rounded-full bg-slate-800 px-3 py-1.5 text-[10px] font-semibold text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
          Kafka Stream: order-events-jkt.tebet.partition-04
        </span>
      </div>
    </div>
  );
}
