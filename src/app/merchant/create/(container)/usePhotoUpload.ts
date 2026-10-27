'use client';

import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import {
  PHOTO_ACCEPTED_RATIOS,
  PHOTO_ACCEPTED_TYPES,
  PHOTO_MAX_SIZE_MB,
} from '../_data/sidebar-data';
import { CreateMenuFormValues } from '../_schema/menu-form-schema';

export type PhotoState = {
  previewUrl: string | null;
  fileName: string | null;
  fileSizeMb: string | null;
  error: string | null;
};

const TOLERANCE = 0.07;

function checkRatio(img: HTMLImageElement): boolean {
  const ratio = img.naturalWidth / img.naturalHeight;
  return PHOTO_ACCEPTED_RATIOS.some(
    ({ w, h }) => Math.abs(ratio - w / h) <= TOLERANCE,
  );
}

export function usePhotoUpload() {
  const { setValue } = useFormContext<CreateMenuFormValues>();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [state, setState] = React.useState<PhotoState>({
    previewUrl: null,
    fileName: null,
    fileSizeMb: null,
    error: null,
  });

  const currentUrlRef = React.useRef<string | null>(null);

  React.useEffect(() => {
    return () => {
      if (currentUrlRef.current) URL.revokeObjectURL(currentUrlRef.current);
    };
  }, []);

  const handleFile = React.useCallback(
    (file: File) => {
      if (!PHOTO_ACCEPTED_TYPES.includes(file.type)) {
        setState((s) => ({ ...s, error: 'Format harus JPG atau PNG.' }));
        return;
      }
      if (file.size > PHOTO_MAX_SIZE_MB * 1024 * 1024) {
        setState((s) => ({
          ...s,
          error: `Ukuran file maks ${PHOTO_MAX_SIZE_MB}MB.`,
        }));
        return;
      }

      const blobUrl = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        if (!checkRatio(img)) {
          URL.revokeObjectURL(blobUrl);
          setState((s) => ({ ...s, error: 'Rasio harus 1:1 atau 4:3.' }));
          return;
        }
        // Revoke previous blob — fotoUrl hanya berlaku selama sesi ini
        if (currentUrlRef.current) URL.revokeObjectURL(currentUrlRef.current);
        currentUrlRef.current = blobUrl;
        setValue('fotoUrl', blobUrl);
        setState({
          previewUrl: blobUrl,
          fileName: file.name,
          fileSizeMb: (file.size / (1024 * 1024)).toFixed(1),
          error: null,
        });
      };
      img.onerror = () => {
        URL.revokeObjectURL(blobUrl);
        setState((s) => ({ ...s, error: 'File gambar tidak valid.' }));
      };
      img.src = blobUrl;
    },
    [setValue],
  );

  const triggerPicker = () => inputRef.current?.click();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
    // Reset input so same file can be reselected
    e.target.value = '';
  };

  return { state, inputRef, triggerPicker, handleChange };
}
