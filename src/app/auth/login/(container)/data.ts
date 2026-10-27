export type RoleId = 'konsumen' | 'merchant' | 'driver';

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
    label: 'Pengguna',
    sublabel: 'User / Pelanggan',
    pill: 'PENGGUNA',
    infoStrip:
      'Masuk sebagai pelanggan untuk memesan kuliner & kelola pesanan.',
    demoEmail: 'user@ets.com',
    demoPassword: 'testing123',
    redirect: '/catalog/dashboard',
    dotColor: '#D91E18',
  },
  {
    id: 'merchant',
    label: 'Mitra Resto',
    sublabel: 'Dapur Merchant',
    pill: 'MERCHANT',
    infoStrip:
      'Masuk sebagai mitra resto untuk mengelola katalog menu & pesanan.',
    demoEmail: 'merchant@ets.com',
    demoPassword: 'testing123',
    redirect: '/merchant',
    dotColor: '#F97316',
  },
  {
    id: 'driver',
    label: 'Driver',
    sublabel: 'Armada Kurir',
    pill: 'DRIVER',
    infoStrip:
      'Masuk sebagai driver kurir untuk menerima dan mengantar pesanan.',
    demoEmail: 'driver@ets.com',
    demoPassword: 'testing123',
    redirect: '/driver',
    dotColor: '#65a30d',
  },
];

export function getRoleById(id: RoleId): Role {
  return ROLES.find((r) => r.id === id) || ROLES[0];
}
