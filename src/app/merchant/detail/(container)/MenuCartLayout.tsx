'use client';

import { useState } from 'react';
import CartSection from './CartSection';
import MenuSection from './MenuSection';
import { CartItem, MenuItem } from './data';

export default function MenuCartLayout() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addItem = (m: MenuItem) => {
    if (m.soldOut) return;
    setCart((prev) =>
      prev.some((c) => c.id === m.id)
        ? prev.map((c) => (c.id === m.id ? { ...c, qty: c.qty + 1 } : c))
        : [
            ...prev,
            {
              id: m.id,
              name: m.name,
              option: m.defaultOption,
              price: m.price,
              qty: 1,
            },
          ],
    );
  };

  const changeQty = (id: number, qty: number) =>
    setCart((prev) =>
      qty <= 0
        ? prev.filter((c) => c.id !== id)
        : prev.map((c) => (c.id === id ? { ...c, qty } : c)),
    );

  return (
    <section className="mx-auto grid w-full max-w-[1200px] items-start gap-6 px-4 pt-6 lg:grid-cols-[2fr_1fr]">
      <MenuSection onAdd={addItem} />
      <CartSection items={cart} onQtyChange={changeQty} />
    </section>
  );
}
