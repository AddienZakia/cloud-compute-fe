import { Camera, Heart } from 'lucide-react';
import Image from 'next/image';
import { MenuDetail } from '../(container)/data';

interface Props {
  menu: MenuDetail;
}

export default function MenuGallery({ menu }: Props) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100">
      <Image
        src={menu.image}
        alt={menu.name}
        fill
        sizes="(max-width:768px) 100vw, 45vw"
        className={`object-cover ${menu.soldOut ? 'grayscale' : ''}`}
        priority
      />
      {menu.soldOut && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50">
          <span className="rounded-xl bg-slate-900/80 px-6 py-3 text-xl font-extrabold text-white">
            Habis
          </span>
        </div>
      )}
      <div className="absolute left-3 top-3 flex flex-col gap-2">
        {menu.badges.map((b) => (
          <span
            key={b}
            className="rounded-full bg-gradient-to-r from-[#D91E18] to-[#F97316] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-white shadow"
          >
            {b}
          </span>
        ))}
        <span className="flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
          <Heart size={11} className="text-rose-400 fill-rose-400" />
          {menu.satisfaction}% Konsumen Puas
        </span>
      </div>
      <button className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-2 text-[11px] font-semibold text-white backdrop-blur-sm transition hover:bg-slate-900">
        <Camera size={12} />
        Foto Asli Resto
      </button>
    </div>
  );
}
