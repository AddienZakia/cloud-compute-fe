export type OrderStatus =
  | 'WAITING_CONFIRMATION'
  | 'PREPARING'
  | 'READY_FOR_PICKUP';

export type OrderActionKey = 'REJECT' | 'CONFIRM' | 'READY' | 'CALL_DRIVER';

export type OrderItem = {
  id: string;
  quantity: number;
  name: string;
  price: string;
};

export type Order = {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  timeInfo: string;
  isTimer?: boolean;
  totalPayment: string;
  isTotalPaymentPrimaryColor?: boolean;
  customer: {
    name: string;
    deliveryType?: string;
    rightBadgeText: string;
    isRightBadgeSuccess?: boolean;
  };
  items: OrderItem[];
  customerNote?: string;
  driverInfo?: {
    message?: string;
    driverName?: string;
    estimatedArrival?: string;
  };
  actions: {
    key: OrderActionKey;
    label: string;
    variant: 'danger-outlined' | 'primary' | 'ready-outlined';
  }[];
};

export const statusVisualConfig: Record<
  OrderStatus,
  {
    topBorderClass: string;
    badgeLabel: string;
    badgeClass: string;
  }
> = {
  WAITING_CONFIRMATION: {
    topBorderClass: 'border-t-4 border-t-warning-main',
    badgeLabel: 'MENUNGGU KONFIRMASI',
    badgeClass:
      'bg-warning-surface text-warning-main border border-warning-border',
  },
  PREPARING: {
    topBorderClass: 'border-t-4 border-t-merchant-primary',
    badgeLabel: 'SEDANG DISIAPKAN',
    badgeClass:
      'bg-merchant-primary-surface text-merchant-primary border border-merchant-primary-border',
  },
  READY_FOR_PICKUP: {
    topBorderClass: 'border-t-4 border-t-order-ready',
    badgeLabel: 'SIAP DIAMBIL DRIVER',
    badgeClass:
      'bg-order-ready-surface text-order-ready border border-order-ready-border',
  },
};

export const initialOrders: Order[] = [
  {
    id: 'ord-1',
    orderNumber: '#BKS-20251024-8891',
    status: 'WAITING_CONFIRMATION',
    timeInfo: '14:42 WIB (3 mnt lalu)',
    totalPayment: 'Rp 143.000',
    isTotalPaymentPrimaryColor: true,
    customer: {
      name: 'Siti Rahma',
      deliveryType: 'Pengantaran Reguler (Driver Auto-match)',
      rightBadgeText: '3 Macam Menu',
    },
    items: [
      {
        id: 'item-1',
        quantity: 2,
        name: 'Paket Ayam Goreng Kremes (Nasi + Sambal Terasi)',
        price: 'Rp 72.000',
      },
      {
        id: 'item-2',
        quantity: 1,
        name: 'Bebek Bakar Madu Pedas Manis (Dada)',
        price: 'Rp 42.000',
      },
      {
        id: 'item-3',
        quantity: 2,
        name: 'Es Jeruk Kelapa Muda Murni',
        price: 'Rp 32.000',
      },
    ],
    customerNote:
      'Catatan Pemesan: "Kremes tolong dipisah di wadah plastik ya mas, jangan dibasahin."',
    actions: [
      { key: 'REJECT', label: 'Tolak Pesanan', variant: 'danger-outlined' },
      {
        key: 'CONFIRM',
        label: 'Terima & Masak (CONFIRM)',
        variant: 'primary',
      },
    ],
  },
  {
    id: 'ord-2',
    orderNumber: '#BKS-20251024-8890',
    status: 'PREPARING',
    timeInfo: '08:24 menit berjalan',
    isTimer: true,
    totalPayment: 'Rp 36.000',
    customer: {
      name: 'Dimas Ardiansyah',
      deliveryType: 'Takeaway Driver Express',
      rightBadgeText: 'Pembayaran QRIS Lunas',
      isRightBadgeSuccess: true,
    },
    items: [
      {
        id: 'item-4',
        quantity: 1,
        name: 'Paket Ayam Goreng Kremes (Paha Atas + Lalapan Ekstra)',
        price: 'Rp 36.000',
      },
    ],
    driverInfo: {
      message: 'Driver sudah dalam radius 1.2 km menuju resto',
    },
    actions: [
      {
        key: 'READY',
        label: 'Tandai Siap Pickup (READY)',
        variant: 'primary',
      },
    ],
  },
  {
    id: 'ord-3',
    orderNumber: '#BKS-20251024-8889',
    status: 'READY_FOR_PICKUP',
    timeInfo: 'Selesai Masak: 14:38 WIB',
    totalPayment: 'Rp 124.000',
    customer: {
      name: 'Amanda Putri',
      rightBadgeText: '2 Menu (4 Item)',
    },
    items: [
      {
        id: 'item-5',
        quantity: 2,
        name: 'Bebek Goreng Sambal Korek Super Pedas',
        price: 'Rp 96.000',
      },
      {
        id: 'item-6',
        quantity: 2,
        name: 'Sayur Asem Khas Sunda',
        price: 'Rp 28.000',
      },
    ],
    driverInfo: {
      driverName: 'Driver: Budi Santoso (Honda Vario • B 4920 SKJ)',
      estimatedArrival: 'Tiba di resto dalam perkiraan 2 menit',
    },
    actions: [
      {
        key: 'CALL_DRIVER',
        label: 'Panggil Driver',
        variant: 'ready-outlined',
      },
    ],
  },
];
