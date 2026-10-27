import MenuGallery from '../(components)/MenuGallery';
import { MenuDetail } from './data';

interface Props {
  menu: MenuDetail;
}

export default function GallerySection({ menu }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <MenuGallery menu={menu} />
    </div>
  );
}
