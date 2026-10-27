import InfoBar from '../(components)/InfoBar';
import VoucherCard from '../(components)/VoucherCard';
import { merchant, voucher } from './data';

export default function InfoSection() {
  return (
    <section className="mx-auto grid w-full max-w-[1200px] gap-4 px-4 pt-4 md:grid-cols-[1.4fr_1fr]">
      <InfoBar merchant={merchant} />
      <VoucherCard {...voucher} />
    </section>
  );
}
