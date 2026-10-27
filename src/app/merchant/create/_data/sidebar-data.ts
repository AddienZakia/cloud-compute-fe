export const PHOTO_PLACEHOLDER = '/images/menu/placeholder.svg';
export const PHOTO_MAX_SIZE_MB = 5;
export const PHOTO_ACCEPTED_TYPES = ['image/jpeg', 'image/png'];
export const PHOTO_ACCEPTED_RATIOS = [
  { w: 1, h: 1, label: '1:1' },
  { w: 4, h: 3, label: '4:3' },
];

export const sidebarText = {
  photoTitle: 'Foto Hidangan',
  photoBadgeHd: 'HD Ready',
  photoOverlay: 'RASIO 1:1 TERVERIFIKASI',
  photoChangeBtn: 'Ganti Foto Hidangan',
  photoHelp: 'Maks 5MB, format JPG/PNG, rasio 4:3 atau 1:1',
  qualityNote:
    'Kualitas Terverifikasi: Kontras cahaya dan ketajaman memenuhi standar etalase Unggulan Bungkusin.',
  previewTitle: 'Live Consumer Preview',
  previewBadge: 'App v3.2 Client',
  previewDesc:
    'Tampilan persis bagaimana menu ini dilihat oleh calon pembeli di feed aplikasi Bungkusin:',
  eventStream:
    'Event stream topic resto.food.v1 akan mereplikasi payload ini ke 4 node edge cache.',
} as const;

export const PREVIEW_SAMPLE = {
  rating: 4.8,
  badge: 'Menu Baru Terpopuler',
} as const;
