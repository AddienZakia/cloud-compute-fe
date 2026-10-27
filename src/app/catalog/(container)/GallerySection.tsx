import InfoRows from '../(components)/InfoRows';
import MenuGallery from '../(components)/MenuGallery';
import ReviewCard from '../(components)/ReviewCard';
import { MenuDetail } from './data';

interface Props {
  menu: MenuDetail;
}

export default function GallerySection({ menu }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <MenuGallery menu={menu} />
      <InfoRows menu={menu} />
      <ReviewCard review={menu.review} />
    </div>
  );
}
