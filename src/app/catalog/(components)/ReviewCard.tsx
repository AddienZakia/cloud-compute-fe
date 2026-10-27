import { Star } from 'lucide-react';
import { MenuDetail } from '../(container)/data';

interface Props {
  review: MenuDetail['review'];
}

export default function ReviewCard({ review }: Props) {
  return (
    <div className="rounded-2xl bg-[#FFF1EE] p-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-xs font-bold text-slate-800">
          Ulasan Pembeli Terverifikasi
        </span>
      </div>
      <p className="text-[12px] leading-relaxed text-slate-700 italic">
        &ldquo;{review.text}&rdquo;
      </p>
      <p className="mt-2 text-[11px] text-slate-400">
        — {review.author}, {review.time}
      </p>
    </div>
  );
}
