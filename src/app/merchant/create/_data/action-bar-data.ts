export const actionBarText = {
  cancelBtn: 'Batal & Kembali ke Menu',
  draftBtn: 'Simpan sebagai Draf',
  publishBtn: 'Publikasikan Menu Sekarang (Broadcast Event)',
  progressLabel: (n: number) => `${n}/3 Bagian Formulir Lengkap`,
  dialogTitle: 'Yakin Ingin Keluar?',
  dialogBody:
    'Ada perubahan yang belum disimpan. Keluar sekarang akan membuang semua perubahan.',
  dialogConfirm: 'Ya, Keluar',
  dialogCancel: 'Tetap di Halaman',
} as const;

export const SECTION_LABELS = [
  'Informasi Dasar',
  'Harga & Stok',
  'Varian & Opsi',
] as const;
