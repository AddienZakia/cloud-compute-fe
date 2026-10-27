import BrandHeader from '../(components)/BrandHeader';
import PrototypeNote from '../(components)/PrototypeNote';
import TelemetryCard from '../(components)/TelemetryCard';

export default function BrandPanelSection() {
  return (
    <div className="flex flex-col gap-5 rounded-3xl bg-gradient-to-b from-[#FFF1EE] via-[#FFF1EE] to-orange-50 p-6">
      <BrandHeader />
      <div className="hidden sm:block">
        <TelemetryCard />
      </div>
      <div className="hidden sm:block">
        <PrototypeNote />
      </div>
    </div>
  );
}
