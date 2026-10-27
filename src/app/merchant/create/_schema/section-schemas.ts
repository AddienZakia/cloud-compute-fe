import { z } from 'zod';
import { varianGroupSchema } from './variant-schema';

/** Sub-skema per bagian — dipakai oleh SectionProgress untuk safeParse */
export const section1Schema = z.object({
  nama: z.string().min(3),
  sku: z.string().min(1),
  kategori: z.string().min(1),
  deskripsi: z.string().min(10).max(300),
});

export const section2Schema = z
  .object({
    hargaJual: z.number().positive().min(1000),
    hargaCoret: z.number().optional(),
    estimasiMasak: z.enum(['5-10', '12-15', '20-25']),
    statusAwal: z.enum(['tersedia', 'stok_terbatas', 'habis_sementara']),
  })
  .refine(
    (d) => !d.hargaCoret || d.hargaCoret === 0 || d.hargaCoret > d.hargaJual,
  );

export const section3Schema = z.object({
  varianGroups: z.array(varianGroupSchema).min(1),
});
