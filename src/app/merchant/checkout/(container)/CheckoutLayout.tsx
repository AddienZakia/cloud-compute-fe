'use client';

import { useState } from 'react';
import CartListSection from './CartListSection';
import DeliverySection from './DeliverySection';
import FeatureSection from './FeatureSection';
import NoteSection from './NoteSection';
import PageHeadSection from './PageHeadSection';
import SummarySection from './SummarySection';
import { CheckoutItem, FEES, initialItems } from './data';

export default function CheckoutLayout() {
  const [items, setItems] = useState<CheckoutItem[]>(initialItems);
  const [coupon, setCoupon] = useState(true);
  const [note, setNote] = useState('');

  const handleQtyChange = (id: number, qty: number) => {
    if (qty < 1) return;
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  };

  const handleRemove = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const itemCount = items.reduce((s, i) => s + i.qty, 0);
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const cartEmpty = items.length === 0;
  const delivery = cartEmpty ? 0 : FEES.delivery;
  const service = cartEmpty ? 0 : FEES.service;
  const voucher = coupon && !cartEmpty ? FEES.voucherAmount : 0;
  const total = subtotal + delivery + service - voucher;

  return (
    <>
      <PageHeadSection itemCount={itemCount} />
      <section className="mx-auto grid w-full max-w-[1200px] items-start gap-6 px-4 py-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-5">
          <CartListSection
            items={items}
            onQtyChange={handleQtyChange}
            onRemove={handleRemove}
          />
          <NoteSection value={note} onChange={setNote} />
          <FeatureSection />
        </div>

        <div className="space-y-4 lg:sticky lg:top-24">
          <SummarySection
            couponActive={coupon}
            onRemoveCoupon={() => setCoupon(false)}
            itemCount={itemCount}
            subtotal={subtotal}
            delivery={delivery}
            service={service}
            voucher={voucher}
            total={total}
            cartEmpty={cartEmpty}
          />
          <DeliverySection />
        </div>
      </section>
    </>
  );
}
