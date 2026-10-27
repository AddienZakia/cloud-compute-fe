'use client';

import Navbar from '../(components)/Navbar';
import { useCart } from './CartProvider';
import { navItems } from './data';

export default function HeaderSection() {
  const { cartCount } = useCart();

  return (
    <Navbar navItems={navItems} cartCount={cartCount} activeItem="beranda" />
  );
}
