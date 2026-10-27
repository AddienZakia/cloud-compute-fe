'use client';

import { useGetAllCatalogs } from '@/hooks/catalog';
import { useGetAllMerchants } from '@/hooks/merchant';
import { useCreateOrder } from '@/hooks/order';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import CartListSection from './CartListSection';
import DeliverySection from './DeliverySection';
import FeatureSection from './FeatureSection';
import NoteSection from './NoteSection';
import PageHeadSection from './PageHeadSection';
import SummarySection from './SummarySection';
import { CheckoutItem, FEES, initialItems } from './data';

export default function CheckoutLayout() {
  const router = useRouter();
  const [items, setItems] = useState<CheckoutItem[]>(initialItems);
  const [coupon, setCoupon] = useState(true);
  const [note, setNote] = useState('');

  const { mutate: createOrder, isPending } = useCreateOrder();
  const { merchants } = useGetAllMerchants({ take: 1 });
  const { catalogs } = useGetAllCatalogs({ take: 5 });

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

  const handleCheckout = () => {
    const merchantId =
      merchants?.[0]?.id || 'b1b01e4a-4a67-4e6c-9c7a-8fbc4c82b123';
    const catalogId =
      catalogs?.[0]?.id || 'c1a01e4a-1111-2222-3333-8fbc4c82b123';

    createOrder(
      {
        merchantId,
        deliveryAddress: note.trim()
          ? `Alamat Utama (${note.trim()})`
          : 'Jl. Teknik Kimia No. 12, Sukolilo, Surabaya',
        items: items.map((it, idx) => ({
          catalogId: catalogs?.[idx]?.id || catalogId,
          quantity: it.qty,
        })),
      },
      {
        onSuccess: () => {
          toast.success('Pesanan berhasil dibuat & diproses ke dapur!');
          router.push('/catalog/riwayat');
        },
        onError: () => {
          // Demo fallback
          toast.info('Simulasi order checkout berhasil dialirkan.');
          router.push('/catalog/riwayat');
        },
      },
    );
  };

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
            onCheckout={handleCheckout}
            isSubmitting={isPending}
          />
          <DeliverySection />
        </div>
      </section>
    </>
  );
}
