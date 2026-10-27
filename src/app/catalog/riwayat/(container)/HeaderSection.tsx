'use client';

import Navbar from '../../../(components)/Navbar';
import { navItems } from '../../../(container)/data';

// Riwayat page doesn't have a CartProvider, so we default cart to 0.
// Swap cartCount for a real context value if you add one later.
export default function HeaderSection() {
  return <Navbar navItems={navItems} cartCount={0} activeItem="riwayat" />;
}
