import Typography from '@/components/Typography';
import { Camera, ImageOff } from 'lucide-react';
import { type PhotoState } from '../(container)/usePhotoUpload';
import { sidebarText } from '../_data/sidebar-data';

type Props = {
  state: PhotoState;
};

export default function PhotoDropArea({ state }: Props) {
  const { previewUrl, fileName, fileSizeMb, error } = state;

  if (!previewUrl) {
    return (
      <div className="aspect-square w-full rounded-xl border-2 border-dashed border-neutral-30 bg-neutral-20/50 flex flex-col items-center justify-center gap-3">
        <div className="size-12 rounded-full bg-neutral-30 flex items-center justify-center">
          <ImageOff className="size-6 text-neutral-50" />
        </div>
        <div className="flex flex-col items-center gap-1 px-4 text-center">
          <Typography
            as="p"
            variant="s"
            weight="bold"
            className="text-neutral-60"
          >
            Belum Ada Foto
          </Typography>
          <Typography as="p" variant="xs" className="text-neutral-50">
            {sidebarText.photoHelp}
          </Typography>
        </div>
        {error && (
          <Typography
            as="p"
            variant="xs"
            className="text-danger-main px-4 text-center"
            role="alert"
          >
            {error}
          </Typography>
        )}
      </div>
    );
  }

  return (
    <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-neutral-30">
      {/* img biasa dipakai karena src adalah URL blob (createObjectURL), bukan path statis */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={previewUrl}
        alt="Pratinjau foto hidangan"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 bg-neutral-90/70 backdrop-blur-sm py-2 px-3">
        <Typography
          as="p"
          variant="xs"
          weight="bold"
          className="text-neutral-10 tracking-widest uppercase"
        >
          {sidebarText.photoOverlay}
        </Typography>
        <div className="flex items-center gap-1.5 mt-0.5">
          <Camera className="size-3 text-neutral-40" />
          <Typography as="p" variant="xs" className="text-neutral-40 truncate">
            {fileName} ({fileSizeMb} MB)
          </Typography>
        </div>
      </div>
      {error && (
        <Typography
          as="p"
          variant="xs"
          className="text-danger-main px-3 pt-1"
          role="alert"
        >
          {error}
        </Typography>
      )}
    </div>
  );
}
