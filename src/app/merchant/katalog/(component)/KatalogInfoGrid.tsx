import { katalogInfoCards } from '../_data/info-cards';
import KatalogInfoCard from './KatalogInfoCard';

export default function KatalogInfoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {katalogInfoCards.map((card) => (
        <KatalogInfoCard key={card.id} data={card} />
      ))}
    </div>
  );
}
