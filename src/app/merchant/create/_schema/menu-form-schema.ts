import { z } from 'zod';
import { varianGroupSchema } from './variant-schema';

export const createMenuSchema = z.object({
  // Bagian 1: Informasi Dasar
  nama: z.string().min(3, 'Nama hidangan minimal 3 karakter'),
  sku: z.string().min(1, 'SKU wajib terisi'),
  kategori: z.string().min(1, 'Kategori menu wajib dipilih'),
  tags: z.array(z.string()),
  deskripsi: z
    .string()
    .min(10, 'Deskripsi minimal 10 karakter')
    .max(300, 'Deskripsi maksimal 300 karakter'),

  // Bagian 2: Penetapan Harga & Manajemen Stok
  hargaJual: z.number().min(1000, 'Harga jual minimal Rp 1.000'),
  hargaCoret: z.number().optional(),
  estimasiMasak: z.enum(['5-10', '12-15', '20-25']),
  statusAwal: z.enum(['tersedia', 'stok_terbatas', 'habis_sementara']),

  // Bagian 3: Pengaturan Varian & Opsi Konsumen
  varianGroups: z.array(varianGroupSchema),

  // Foto Hidangan
  fotoUrl: z.string().optional(),
});

export type CreateMenuFormValues = z.infer<typeof createMenuSchema>;
