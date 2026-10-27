export const ROUTES = {
  login: '/auth/login',
  dashboard: '/catalog/dashboard',
  riwayat: '/catalog/riwayat',
  merchantDetail: '/merchant/detail',
  checkout: '/merchant/checkout',
  menu: (id: number | string) => `/catalog/${id}`,
} as const;
