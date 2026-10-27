import HygieneBanner from '../(components)/HygieneBanner';
import { merchant } from './data';

export default function HygieneSection() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 py-8">
      <HygieneBanner licenseNo={merchant.licenseNo} />
    </section>
  );
}
