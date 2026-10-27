import FeatureBadge from '../(components)/FeatureBadge';
import { featureBadges } from './data';

export default function FeatureSection() {
  return (
    <div className="flex gap-3">
      {featureBadges.map((b) => (
        <FeatureBadge key={b.title} icon={b.icon} title={b.title} sub={b.sub} />
      ))}
    </div>
  );
}
