import KatalogHeader from './(component)/KatalogHeader';
import KatalogContentContainer from './(container)/KatalogContentContainer';

export default function KatalogPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <KatalogHeader />
      <KatalogContentContainer />
    </div>
  );
}
