import Navbar from '@/app/(components)/Navbar';
import { navItems } from '@/app/(container)/data';

export default function HeaderSection() {
  return <Navbar navItems={navItems} cartCount={3} />;
}
