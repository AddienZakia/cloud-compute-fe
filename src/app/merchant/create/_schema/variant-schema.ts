import { z } from 'zod';

export const varianOptionSchema = z.object({
  id: z.string(),
  nama: z.string().min(1, 'Nama opsi wajib diisi'),
  hargaEkstra: z.number().min(0, 'Harga ekstra tidak boleh negatif'),
});

export const varianGroupSchema = z.object({
  id: z.string(),
  nama: z.string().min(1, 'Nama grup varian wajib diisi'),
  tipe: z.enum(['WAJIB', 'OPSIONAL']),
  maksPilihan: z.number().min(1),
  opsi: z.array(varianOptionSchema).min(1, 'Minimal satu opsi varian'),
});

export type VarianOption = z.infer<typeof varianOptionSchema>;
export type VarianGroup = z.infer<typeof varianGroupSchema>;
