import KatalogHeader from './(component)/KatalogHeader';
import KatalogSummaryGrid from './(component)/KatalogSummaryGrid';

export default function KatalogPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <KatalogHeader />
      <KatalogSummaryGrid />
    </div>
  );
}
