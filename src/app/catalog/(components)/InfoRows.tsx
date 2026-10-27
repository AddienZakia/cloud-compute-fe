import { Clock, Package, ShieldCheck } from 'lucide-react';
import { MenuDetail } from '../(container)/data';

interface Props {
  menu: MenuDetail;
}

export default function InfoRows({ menu }: Props) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="divide-y divide-slate-100">
        <div className="flex items-center gap-3 py-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-50">
            <Clock size={16} className="text-[#F97316]" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] text-slate-500">Waktu Masak Rata-rata</p>
            <p className="text-sm font-bold text-slate-900">{menu.cookTime}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 py-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-50">
            <ShieldCheck size={16} className="text-green-600" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] text-slate-500">Sertifikasi Halal</p>
            <p className="text-sm font-bold text-green-600">{menu.halalCert}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 py-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50">
            <Package size={16} className="text-blue-500" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] text-slate-500">Kemasan Spesial</p>
            <p className="text-sm font-bold text-slate-900">{menu.packaging}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
