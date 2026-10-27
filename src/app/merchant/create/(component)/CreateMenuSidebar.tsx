'use client';

import { usePhotoUpload } from '../(container)/usePhotoUpload';
import LivePreviewCard from './LivePreviewCard';
import PhotoCard from './PhotoCard';

export default function CreateMenuSidebar() {
  const { state, inputRef, triggerPicker, handleChange } = usePhotoUpload();

  return (
    // sticky hanya pada layar tinggi (min-h 800px) agar tidak melebihi viewport
    <div className="xl:col-span-4 flex flex-col gap-6 [@media(min-height:800px)]:xl:sticky [@media(min-height:800px)]:xl:top-20 self-start">
      <PhotoCard
        state={state}
        inputRef={inputRef}
        triggerPicker={triggerPicker}
        handleChange={handleChange}
      />
      <LivePreviewCard />
    </div>
  );
}
