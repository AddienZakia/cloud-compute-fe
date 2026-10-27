export type RoleId = 'konsumen' | 'merchant' | 'driver' | 'admin';

export interface Role {
  id: RoleId;
  label: string;
  sublabel: string;
  pill: string;
  infoStrip: string;
  demoEmail: string;
  demoPassword: string;
  redirect: string;
  dotColor: string;
}

export const ROLES: Role[] = [
  {
    id: 'konsumen',
    label: 'Konsumen',
    sublabel: 'Pelanggan',
    pill: 'KONSUMEN',
    infoStrip:
      'Pesan makanan lezat dari restoran pilihan & lacak pengantaran live.',
    demoEmail: 'user@bungkusin.id',
    demoPassword: 'bungkusin123',
    redirect: '/catalog/dashboard',
    dotColor: '#D91E18',
  },
  {
    id: 'merchant',
    label: 'Merchant',
    sublabel: 'Dapur Resto',
    pill: 'MERCHANT',
    infoStrip:
      'Kelola menu, stok, dan pesanan masuk dapur resto Anda secara real-time.',
    demoEmail: 'resto@bungkusin.id',
    demoPassword: 'bungkusin123',
    redirect: '/merchant',
    dotColor: '#F97316',
  },
  {
    id: 'driver',
    label: 'Driver',
    sublabel: 'Armada Kurir',
    pill: 'DRIVER',
    infoStrip:
      'Terima orderan terdekat dan pantau rute pengantaran armada kurir.',
    demoEmail: 'driver@bungkusin.id',
    demoPassword: 'bungkusin123',
    redirect: '/driver',
    dotColor: '#65a30d',
  },
  {
    id: 'admin',
    label: 'Admin',
    sublabel: 'Sistem Pusat',
    pill: 'ADMIN',
    infoStrip:
      'Pantau seluruh ekosistem, mitra, dan aliran event sistem pusat.',
    demoEmail: 'admin@bungkusin.id',
    demoPassword: 'bungkusin123',
    redirect: '/admin',
    dotColor: '#334155',
  },
];

export function getRoleById(id: RoleId): Role {
  return ROLES.find((r) => r.id === id)!;
}
