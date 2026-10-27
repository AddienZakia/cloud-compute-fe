import Navbar from '@/app/catalog/dashboard/(components)/Navbar';
import { navItems } from '@/app/catalog/dashboard/(container)/data';

export default function HeaderSection() {
  return <Navbar navItems={navItems} cartCount={3} />;
}
