import CouponCard from '../(components)/CouponCard';
import PaymentSummary from '../(components)/PaymentSummary';

interface Props {
  couponActive: boolean;
  onRemoveCoupon: () => void;
  itemCount: number;
  subtotal: number;
  delivery: number;
  service: number;
  voucher: number;
  total: number;
  cartEmpty: boolean;
}

export default function SummarySection({
  couponActive,
  onRemoveCoupon,
  itemCount,
  subtotal,
  delivery,
  service,
  voucher,
  total,
  cartEmpty,
}: Props) {
  return (
    <div className="space-y-4">
      <CouponCard active={couponActive} onRemove={onRemoveCoupon} />
      <PaymentSummary
        itemCount={itemCount}
        subtotal={subtotal}
        delivery={delivery}
        service={service}
        voucher={voucher}
        total={total}
        cartEmpty={cartEmpty}
      />
    </div>
  );
}
