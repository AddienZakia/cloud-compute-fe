import CartPanel, { CartTotals } from '../(components)/CartPanel';
import { CartItem, FEES, merchant } from './data';

interface Props {
  items: CartItem[];
  onQtyChange: (id: number, qty: number) => void;
}

export default function CartSection({ items, onQtyChange }: Props) {
  const count = items.reduce((s, i) => s + i.qty, 0);
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const empty = items.length === 0;
  const voucher =
    subtotal >= FEES.voucherMin ? Math.round(subtotal * FEES.voucherRate) : 0;
  const delivery = empty ? 0 : FEES.delivery;
  const service = empty ? 0 : FEES.service;

  const totals: CartTotals = {
    count,
    subtotal,
    delivery,
    service,
    voucher,
    total: subtotal + delivery + service - voucher,
    progress: Math.min(100, Math.floor((subtotal / FEES.voucherMin) * 100)),
    remaining: Math.max(0, FEES.voucherMin - subtotal),
  };

  return (
    <CartPanel
      items={items}
      totals={totals}
      store={merchant.store}
      deliverTo={merchant.deliverTo}
      onQtyChange={onQtyChange}
    />
  );
}
