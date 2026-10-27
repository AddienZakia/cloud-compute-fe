import type { DriverDashboardData } from '../_schema/driver-schema';

// TODO: Connect with actual Driver REST & WebSocket / Kafka APIs in subsequent stages
export const initialDriverData: DriverDashboardData = {
  profile: {
    id: 'drv-001',
    name: 'Budi Santoso',
    badge: 'MITRA JUARA TEBET',
    vehicle: 'Honda Vario 160 • B 4821 KTF',
    vehicleType: 'Motor',
    fleetStatus: 'Aktif Terhubung',
  },
  status: {
    isOnline: true,
    isOpen: true,
    brokerLagMs: 0,
    kafkaConsumer: 'CONSUMER-DRIVER-JKT-04',
    kafkaLatency: '24ms WIB',
  },
  balance: {
    amount: 284500,
    incentiveAmount: 48000,
    autoDisburseActive: true,
  },
  stats: [
    {
      id: 'stat-trip',
      label: 'TRIP SELESAI HARI INI',
      value: '8 Order',
      subtext: 'Target harian: 12 order (Sisa 4)',
      subtextColor: 'default',
    },
    {
      id: 'stat-income',
      label: 'PENDAPATAN BERSIH',
      value: 'Rp 144.000',
      subtext: '+15% dibanding kemarin',
      subtextColor: 'green',
    },
    {
      id: 'stat-rating',
      label: 'RATING PENGEMUDI',
      value: '★ 4.9',
      subtext: 'Berdasarkan 1.420 ulasan pelanggan',
      subtextColor: 'default',
    },
    {
      id: 'stat-acceptance',
      label: 'TINGKAT PENERIMAAN',
      value: '98.5%',
      subtext: 'Prioritas penugasan tinggi',
      subtextColor: 'green',
    },
  ],
  activeDeliveries: [
    {
      id: 'act-001',
      orderNumber: '#BKS-20251024-8891',
      trackingSyncId: 'TRACK-SYNC #BKS-8891',
      customerName: 'Siti Rahma',
      paymentMethod: 'BungkusPay Cashless',
      status: 'MENJEMPUT',
      etaResto: '4 Menit',
      pickupPoint: {
        pointNumber: 1,
        title: '1. TITIK PENJEMPUTAN',
        label: '1.8 km dari posisi',
        name: 'Ayam Goreng Berkah Pak Mul - Tebet',
        address:
          'Jl. Tebet Barat Raya No. 42, RT.03/RW.02, Tebet Barat, Jakarta Selatan',
        secondaryActionLabel: 'Hubungi Resto',
        primaryActionLabel: 'Buka Google Maps',
      },
      dropoffPoint: {
        pointNumber: 2,
        title: '2. TITIK PENGANTARAN',
        label: 'Drop-off Point',
        name: 'Apartemen Tebet Valley',
        address: 'Tower B, Unit 1205, Jl. Tebet Barat Dalam Raya',
        notes: 'Lobby Selatan, titip ke resepsionis jika tidak di tempat',
        secondaryActionLabel: 'Chat Konsumen',
        primaryActionLabel: 'Hubungi Siti',
      },
      sealStatus: 'Kantong Tersegel Segel Resmi Bungkusin',
      items: [
        {
          id: 'item-1',
          name: 'Paket Ayam Goreng Kremes',
          qty: 2,
          notes: 'Sambal bawang pedas terpisah, kremesan garing ekstra',
        },
        {
          id: 'item-2',
          name: 'Bebek Bakar Madu',
          qty: 1,
          notes: 'Bumbu bakar madu manis legit, lalapan komplit',
        },
        {
          id: 'item-3',
          name: 'Es Jeruk Peras Segar',
          qty: 2,
          notes: 'Gula murni terpisah, es batu sedikit',
        },
      ],
      deliveryFee: 18000,
    },
  ],
  // TODO: newOffers will be streamed real-time via Kafka dispatcher / WebSocket
  // TODO: expiresAt will be provided by server timestamp in production
  newOffers: [
    {
      id: 'off-8894',
      orderNumber: '#BKS-20251024-8894',
      initialSeconds: 20,
      restaurantName: 'Bakmi Gloria Senopati',
      deliveryFee: 16000,
      customerName: 'Pemesan: Rizky Pratama',
      tripDistance: '2.4 km total trip',
      itemsSummary: '3 Item (Makanan Panas)',
    },
    {
      id: 'off-8896',
      orderNumber: '#BKS-20251024-8896',
      initialSeconds: 28,
      restaurantName: 'Sate Khas Senayan',
      deliveryFee: 22000,
      customerName: 'Pemesan: Farhan',
      tripDistance: '3.8 km total trip',
      itemsSummary: '2 Item (Box Besar)',
    },
  ],
  surgeNotice: {
    area: 'Tebet Raya',
    surgeAmount: 3000,
    validUntil: '14:00 WIB',
  },
};

// TODO: data ini nanti dari API/server; saat ini placeholder
export const offerDeliveryDetailsFallback: Record<
  string,
  {
    pickupAddress: string;
    dropoffAddress: string;
    dropoffNotes: string;
    items: Array<{ id: string; name: string; qty: number; notes?: string }>;
  }
> = {
  'off-8894': {
    pickupAddress: 'Jl. Senopati Raya (Nomor gedung belum tersedia) —',
    dropoffAddress: 'Jl. Suryo No. — (Menunggu detail alamat konsumen)',
    dropoffNotes: '—',
    items: [
      {
        id: 'item-8894-1',
        name: 'Bakmi Spesial Komplit (TODO: data API)',
        qty: 2,
        notes: 'Porsi reguler, kuah terpisah',
      },
      {
        id: 'item-8894-2',
        name: 'Pangsit Goreng Crispy (TODO: data API)',
        qty: 1,
        notes: 'Saus asam manis',
      },
    ],
  },
  'off-8896': {
    pickupAddress: 'Jl. Senayan Utama No. — (Nomor outlet belum tersedia)',
    dropoffAddress: 'Alamat Tujuan Belum Lengkap —',
    dropoffNotes: '—',
    items: [
      {
        id: 'item-8896-1',
        name: 'Sate Ayam Bumbu Kacang (TODO: data API)',
        qty: 1,
        notes: '10 tusuk, lontong terpisah',
      },
      {
        id: 'item-8896-2',
        name: 'Sate Kambing Campur (TODO: data API)',
        qty: 1,
        notes: '10 tusuk, bumbu kecap pedas',
      },
    ],
  },
};
