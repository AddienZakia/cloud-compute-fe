'use client';

import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';
import { Clock, Plus, Star } from 'lucide-react';
import { useWatch } from 'react-hook-form';
import { estimasiMasakOptions } from '../_data/pricing-data';
import { PHOTO_PLACEHOLDER, PREVIEW_SAMPLE } from '../_data/sidebar-data';
import {
  calculateSavingPercentage,
  formatRupiah,
} from '../_utils/pricing-calculator';

export default function PreviewMenuCard() {
  const [
    nama,
    deskripsi,
    hargaJual,
    hargaCoret,
    estimasiMasak,
    fotoUrl,
    varianGroups,
  ] = useWatch({
    name: [
      'nama',
      'deskripsi',
      'hargaJual',
      'hargaCoret',
      'estimasiMasak',
      'fotoUrl',
      'varianGroups',
    ],
  });

  const savingPct = calculateSavingPercentage(hargaJual, hargaCoret);
  const estimasiLabel =
    estimasiMasakOptions.find((o) => o.id === estimasiMasak)?.title ??
    estimasiMasak;
  const varianCount = Array.isArray(varianGroups) ? varianGroups.length : 0;
  const photoSrc = fotoUrl || PHOTO_PLACEHOLDER;

  return (
    <div className="flex flex-col rounded-2xl border border-neutral-30 overflow-hidden shadow-sm">
      {/* Foto */}
      <div className="relative aspect-[4/3] w-full bg-neutral-20">
        {/* img biasa: src adalah URL blob (createObjectURL) yang tidak kompatibel dengan next/image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          alt={nama || 'Pratinjau menu'}
          className="w-full h-full object-cover"
        />
        {savingPct && (
          <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[11px] font-bold bg-danger-main text-neutral-10">
            HEMAT {savingPct}%
          </span>
        )}
        <span className="absolute bottom-2 right-2 flex items-center gap-1 bg-neutral-90/70 text-neutral-10 text-[11px] font-semibold px-2 py-0.5 rounded-full">
          <Clock className="size-3" />
          {estimasiLabel ?? '—'}
        </span>
      </div>

      {/* Konten */}
      <div className="flex flex-col gap-2 p-3">
        <div className="flex items-center gap-1">
          <Star className="size-3.5 text-warning-main fill-warning-main" />
          <Typography
            as="span"
            variant="xs"
            weight="bold"
            className="text-neutral-80"
          >
            {PREVIEW_SAMPLE.rating}
          </Typography>
          <span className="mx-1 text-neutral-30">·</span>
          <Typography as="span" variant="xs" className="text-neutral-60">
            {PREVIEW_SAMPLE.badge}
          </Typography>
        </div>

        <Typography
          as="h3"
          variant="m"
          weight="bold"
          className="text-neutral-100 leading-snug line-clamp-1"
        >
          {nama || 'Nama Hidangan'}
        </Typography>

        <Typography
          as="p"
          variant="xs"
          className="text-neutral-60 line-clamp-2"
        >
          {deskripsi || 'Deskripsi hidangan akan tampil di sini…'}
        </Typography>

        <div className="flex items-end justify-between mt-1">
          <div className="flex flex-col">
            {hargaCoret > 0 && hargaCoret > hargaJual && (
              <Typography as="s" variant="xs" className="text-neutral-50">
                Rp {formatRupiah(hargaCoret)}
              </Typography>
            )}
            <Typography
              as="span"
              variant="m"
              weight="bold"
              className={cn('text-danger-main text-lg')}
            >
              Rp {formatRupiah(hargaJual || 0)}
            </Typography>
          </div>
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-danger-main text-neutral-10 text-xs font-bold cursor-default"
          >
            <Plus className="size-3.5" /> Tambah
          </button>
        </div>

        {varianCount > 0 && (
          <Typography
            as="p"
            variant="xs"
            className="text-warning-main font-bold"
          >
            Tersedia {varianCount} grup varian untuk disesuaikan pembeli
          </Typography>
        )}
      </div>
    </div>
  );
}
