import Navbar from '../../(components)/Navbar';
import { navItems } from '../../(container)/data';

export default function HeaderSection() {
  return <Navbar navItems={navItems} cartCount={3} />;
}
