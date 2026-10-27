import GallerySection from './GallerySection';
import MenuOrderSection from './MenuOrderSection';
import { MenuDetail } from './data';

interface Props {
  menu: MenuDetail;
}

export default function MenuDetailLayout({ menu }: Props) {
  return (
    <section className="mx-auto grid w-full max-w-[1200px] items-start gap-6 px-4 py-6 lg:grid-cols-[2fr_3fr]">
      <GallerySection menu={menu} />
      <MenuOrderSection menu={menu} />
    </section>
  );
}
