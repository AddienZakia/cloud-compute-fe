import { Flame, Leaf, Shield } from 'lucide-react';
import { MenuDetail, rp } from '../(container)/data';

interface Props {
  menu: MenuDetail;
}

const chipIcons: Record<string, React.ReactNode> = {
  Kkal: <Flame size={11} className="text-orange-500" />,
  Halal: <Shield size={11} className="text-green-600" />,
  Segel: <Leaf size={11} className="text-blue-500" />,
};

function chipIcon(chip: string) {
  for (const [key, icon] of Object.entries(chipIcons)) {
    if (chip.includes(key)) return icon;
  }
  return <Leaf size={11} className="text-slate-400" />;
}

export default function MenuTitleBlock({ menu }: Props) {
  const discount = menu.originalPrice
    ? Math.round((1 - menu.price / menu.originalPrice) * 100)
    : null;

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <h1 className="text-xl font-extrabold leading-snug text-slate-900">
        {menu.name}
      </h1>
      <div className="mt-2 flex items-baseline gap-3 flex-wrap">
        <span className="text-2xl font-extrabold text-[#D91E18]">
          {rp(menu.price)}
        </span>
        {menu.originalPrice && (
          <span className="text-sm text-slate-400 line-through">
            {rp(menu.originalPrice)}
          </span>
        )}
        {discount && (
          <span className="rounded-full bg-red-50 px-2 py-0.5 text-[11px] font-bold text-[#D91E18]">
            Hemat {discount}%
          </span>
        )}
      </div>
      <p className="mt-3 text-[13px] leading-relaxed text-slate-500">
        {menu.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {menu.chips.map((chip) => (
          <span
            key={chip}
            className="flex items-center gap-1 rounded-full border border-slate-200 px-2.5 py-1 text-[10px] font-semibold text-slate-600"
          >
            {chipIcon(chip)}
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}
