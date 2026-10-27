import { Order } from '../_schema/order-schema';

// TODO: Ganti dengan pemanggilan API nyata saat endpoint KDS tersedia
export const INITIAL_ORDERS: Order[] = [
  // 1. PENDING (BKS-8891)
  {
    id: 'BKS-8891',
    customerName: 'Siti Rahma',
    timeWib: '14:45 WIB',
    timeAgo: '1 mnt lalu',
    isVip: true,
    payment: {
      method: 'BungkusPay',
      status: 'LUNAS',
    },
    items: [
      {
        id: 'item-1',
        qty: 2,
        name: 'Paket Ayam Goreng Kremes',
        variantNote: 'Paha Bawah, Sambal Mantap Super Pedas',
        price: 36000,
      },
      {
        id: 'item-2',
        qty: 1,
        name: 'Bebek Bakar Madu Pedas',
        variantNote: 'Potongan Dada, Lalapan Lengkap',
        price: 45000,
      },
      {
        id: 'item-3',
        qty: 2,
        name: 'Es Jeruk Kelapa Muda Murni',
        variantNote: 'Gula Pisah, Es Sedikit',
        price: 13000,
      },
    ],
    buyerNote:
      'Kremes tolong dipisah di plastik agar tetap renyah! Jangan terlalu basah ayamnya.',
    status: 'PENDING',
  },

  // 2. PENDING (BKS-8894)
  {
    id: 'BKS-8894',
    customerName: 'Rizky Pratama',
    timeWib: '14:43 WIB',
    timeAgo: '3 mnt lalu',
    isVip: false,
    payment: {
      method: 'Bayar Tunai',
      status: 'COD',
    },
    items: [
      {
        id: 'item-4',
        qty: 1,
        name: 'Paket Ayam Goreng Kremes',
        variantNote: 'Dada, Sambal Bawang Sedang',
        price: 36000,
      },
      {
        id: 'item-5',
        qty: 1,
        name: 'Es Teh Manis Jumbo',
        variantNote: 'Manis Normal',
        price: 18000,
      },
    ],
    status: 'PENDING',
  },

  // 3. PREPARING (BKS-8890)
  {
    id: 'BKS-8890',
    customerName: 'Dimas Ardiansyah',
    timeWib: '14:38 WIB',
    timeAgo: '7 mnt lalu',
    isVip: false,
    payment: {
      method: 'BungkusPay',
      status: 'LUNAS',
    },
    items: [
      {
        id: 'item-6',
        qty: 1,
        name: 'Paket Ayam Goreng Kremes',
        variantNote: 'Dada Mentok, Ekstra Sambal Korek Super Pedas',
        price: 36000,
      },
    ],
    status: 'PREPARING',
    cookingProgress: {
      elapsed: '10:15',
      estimate: 'Est 14:00 Mnt',
      percent: 75,
    },
    courier: {
      name: 'Budi Santoso',
      plateNumber: '',
      locationInfo: 'Menuju resto Est tiba dalam 4 mnt',
      isArrived: false,
    },
  },

  // 4. PREPARING (BKS-8888)
  {
    id: 'BKS-8888',
    customerName: 'Farhan Maulana',
    timeWib: '14:41 WIB',
    timeAgo: '4 mnt lalu',
    isVip: false,
    payment: {
      method: 'BungkusPay',
      status: 'LUNAS',
    },
    items: [
      {
        id: 'item-7',
        qty: 2,
        name: 'Bebek Goreng Sambal Korek',
        variantNote: '1 Paha, 1 Dada, Sambal dipisah',
        price: 42000,
      },
    ],
    status: 'PREPARING',
    cookingProgress: {
      elapsed: '05:30',
      estimate: 'Est 15:00 Mnt',
      percent: 35,
    },
    courier: {
      name: '',
      plateNumber: '',
      locationInfo: 'Sistem mencari mitra kurir terdekat...',
      isArrived: false,
    },
  },

  // 5. READY_FOR_PICKUP (BKS-8889)
  {
    id: 'BKS-8889',
    customerName: 'Amanda Putri',
    timeWib: '14:33 WIB',
    timeAgo: '12 mnt lalu',
    isVip: false,
    payment: {
      method: 'BungkusPay',
      status: 'LUNAS',
    },
    items: [
      {
        id: 'item-8',
        qty: 2,
        name: 'Bebek Goreng Sambal Korek + 2x Sayur Asem',
        variantNote: '2 Kantong Tersegel',
        price: 62000,
      },
    ],
    status: 'READY_FOR_PICKUP',
    packagingInfo: '2 Kantong Tersegel',
    courier: {
      name: 'Bambang S.',
      plateNumber: 'B 4910 SGO',
      locationInfo: 'SUDAH DI LOKASI RESTO (Parkiran Depan)',
      isArrived: true,
    },
    pickupPin: '8891',
  },

  // 6. READY_FOR_PICKUP (BKS-8887)
  {
    id: 'BKS-8887',
    customerName: 'Hendra Wijaya',
    timeWib: '14:30 WIB',
    timeAgo: '15 mnt lalu',
    isVip: false,
    payment: {
      method: 'BungkusPay',
      status: 'LUNAS',
    },
    items: [
      {
        id: 'item-9',
        qty: 1,
        name: 'Ayam Goreng Kampung Utuh',
        variantNote: '1 Kotak Box Berkah',
        price: 110000,
      },
    ],
    status: 'READY_FOR_PICKUP',
    packagingInfo: '1 Kotak Box Berkah',
    courier: {
      name: 'Adi Nugroho',
      plateNumber: 'B 3321 TXX',
      locationInfo:
        'ETA 2 mnt Sedang putar balik di Jl. Tebet Barat Dalam Raya',
      isArrived: false,
    },
    pickupPin: '3387',
  },
];
