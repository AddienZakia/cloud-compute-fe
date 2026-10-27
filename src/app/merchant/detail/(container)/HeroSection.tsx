import MerchantHero from '../(components)/MerchantHero';
import { merchant } from './data';

export default function HeroSection() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 pt-4">
      <MerchantHero merchant={merchant} />
    </section>
  );
}
