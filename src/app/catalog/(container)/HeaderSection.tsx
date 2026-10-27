import Navbar from '../dashboard/(components)/Navbar';
import { navItems } from '../dashboard/(container)/data';

export default function HeaderSection() {
  return <Navbar navItems={navItems} cartCount={3} />;
}
