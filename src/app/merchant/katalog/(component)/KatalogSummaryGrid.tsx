import { AlertTriangle, CheckCircle2, ClipboardList } from 'lucide-react';
import { MenuItem, menuItems } from '../_data/menu-items';
import KatalogStreamCard from './KatalogStreamCard';
import KatalogSummaryCard from './KatalogSummaryCard';

export type KatalogSummaryGridProps = {
  items?: MenuItem[];
};

export default function KatalogSummaryGrid({
  items = menuItems,
}: KatalogSummaryGridProps) {
  const total = items.length;
  const aktif = items.filter((m) => m.status === 'tersedia').length;
  const habis = items.filter((m) => m.status === 'habis').length;

  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
      <KatalogSummaryCard
        label="TOTAL MENU RESTO"
        value={total}
        unit="Pilihan"
        icon={ClipboardList}
        variant="neutral"
      />
      <KatalogSummaryCard
        label="AKTIF & TERSEDIA"
        value={aktif}
        unit="Siap Pesan"
        icon={CheckCircle2}
        variant="success"
      />
      <KatalogSummaryCard
        label="HABIS HARI INI"
        value={habis}
        unit="Perlu Restok"
        icon={AlertTriangle}
        variant="danger"
      />
      <KatalogStreamCard />
    </div>
  );
}
