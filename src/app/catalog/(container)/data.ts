export const rp = (n: number): string =>
  'Rp ' +
  Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const img = (id: string, w = 600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export interface OptionItem {
  id: string;
  label: string;
  desc: string;
  extraPrice?: number;
  default?: boolean;
}

export interface OptionGroupData {
  id: string;
  title: string;
  subtitle: string;
  required: boolean;
  type: 'radio' | 'checkbox';
  options: OptionItem[];
}

export interface MenuDetail {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  badges: string[];
  satisfaction: number;
  cookTime: string;
  halalCert: string;
  packaging: string;
  chips: string[];
  review: { text: string; author: string; time: string };
  optionGroups: OptionGroupData[];
  soldOut?: boolean;
  pairingIds: number[];
}

export const menuDetails: MenuDetail[] = [
  {
    id: 1,
    name: 'Paket Ayam Goreng Kremes Lengkap',
    price: 36000,
    originalPrice: 42000,
    description:
      'Dibuat dari ayam kampung pilihan yang digenjrot dengan bumbu rempah kuning warisan keluarga, digoreng hingga renyah di luar dan juicy di dalam. Disajikan lengkap dengan kremesan gurih ekstra melimpah, nasi uduk harum daun pandan, sambal terasi pedas manis khas Jawa Tengah, serta tahu dan tempe goreng.',
    image: img('photo-1626645738196-c2a7c87a8f58'),
    badges: ['BEST SELLER RESTO'],
    satisfaction: 98,
    cookTime: '12 - 18 Menit',
    halalCert: 'ID31110002981920',
    packaging: 'Paper Box Anti-Lembab & Segel',
    chips: [
      'Estimasi 580 Kkal',
      'Bahan 100% Halal Terverifikasi',
      'Segel Anti Bocor',
    ],
    review: {
      text: 'Kremesnya renyah banget! Nasi uduknya wangi daun pandan, sambal ayamnya meresap sampai ke tulang.',
      author: 'Dinus Wardhana',
      time: '2 jam lalu',
    },
    optionGroups: [
      {
        id: 'bagian',
        title: '1. Pilih Bagian Ayam',
        subtitle: 'Wajib pilih 1 varian potongan ayam',
        required: true,
        type: 'radio',
        options: [
          {
            id: 'paha-bawah',
            label: 'Paha Bawah',
            desc: 'Juicy & empuk',
            default: true,
          },
          { id: 'paha-atas', label: 'Paha Atas', desc: 'Daging tebal' },
          { id: 'dada', label: 'Dada Montok', desc: 'Padat protein' },
        ],
      },
      {
        id: 'pedas',
        title: '2. Tingkat Pedas Sambal Terasi',
        subtitle:
          'Sambal diulek segar dengan cabai rawit merah & terasi matang',
        required: true,
        type: 'radio',
        options: [
          { id: 'sedang', label: 'Sedang', desc: 'Pedas manis nikmat' },
          {
            id: 'pedas-mantap',
            label: 'Pedas Mantap',
            desc: 'Pedas nendang (Level 2)',
            default: true,
          },
          {
            id: 'ekstra-pedas',
            label: 'Ekstra Pedas Gurih',
            desc: 'Rawit gila (Level 3)',
          },
        ],
      },
      {
        id: 'topping',
        title: '3. Tambahan Menu & Topping',
        subtitle: 'Pilihan ekstra untuk santapan yang semakin puas',
        required: false,
        type: 'checkbox',
        options: [
          {
            id: 'kremes',
            label: 'Ekstra Kremes Renyah Melimpah',
            desc: '1 toples besar kremesan gurih asin nagih',
            extraPrice: 4000,
          },
          {
            id: 'nasi',
            label: 'Nasi Uduk Tambah (1 Porsi)',
            desc: 'Nasi uduk pulen bertabur bawang goreng renyah',
            extraPrice: 6000,
          },
          {
            id: 'telur',
            label: 'Telur Dadar Krispi Mengembang',
            desc: 'Garing kering khas masakan Padang, gurih',
            extraPrice: 7000,
          },
        ],
      },
    ],
    pairingIds: [3, 6, 5],
  },
  {
    id: 2,
    name: 'Bebek Goreng Sambal Korek Super Pedas',
    price: 48000,
    description:
      'Bebek kampung pilihan dipotong 4 bagian, diungkep bumbu kuning rempah hingga meresap sempurna, digoreng kering crispy. Disajikan dengan sambal korek rawit merah ulek kasar dan lalapan timun segar.',
    image: img('photo-1544025162-d76694265947'),
    badges: ['PEDAS MANTAP'],
    satisfaction: 94,
    cookTime: '18 - 25 Menit',
    halalCert: 'ID31110002981920',
    packaging: 'Paper Box Anti-Lembab & Segel',
    chips: [
      'Estimasi 720 Kkal',
      'Bahan 100% Halal Terverifikasi',
      'Segel Anti Bocor',
    ],
    review: {
      text: 'Bebeknya empuk banget, nggak amis sama sekali. Sambal koreknya mantap pedasnya!',
      author: 'Faisal Ramadhan',
      time: '5 jam lalu',
    },
    optionGroups: [
      {
        id: 'pedas',
        title: '1. Tingkat Pedas Sambal Korek',
        subtitle: 'Sambal korek ulek kasar dengan rawit merah segar',
        required: true,
        type: 'radio',
        options: [
          {
            id: 'sedang',
            label: 'Sedang',
            desc: 'Pedas pas di lidah',
            default: true,
          },
          { id: 'pedas', label: 'Pedas', desc: 'Nendang pedas gurih' },
          { id: 'ekstra', label: 'Super Pedas', desc: 'Rawit gila level 3' },
        ],
      },
      {
        id: 'topping',
        title: '2. Tambahan Lauk',
        subtitle: 'Lengkapi makan siangmu',
        required: false,
        type: 'checkbox',
        options: [
          {
            id: 'nasi',
            label: 'Nasi Putih Tambah',
            desc: 'Nasi pulen hangat 1 porsi',
            extraPrice: 5000,
          },
          {
            id: 'tahu',
            label: 'Tahu Goreng Crispy (2 pcs)',
            desc: 'Renyah diluar lembut didalam',
            extraPrice: 4000,
          },
        ],
      },
    ],
    pairingIds: [3, 5, 6],
  },
  {
    id: 3,
    name: 'Es Jeruk Kelapa Muda Murni',
    price: 16000,
    description:
      'Perasan jeruk manis dipadu dengan serutan kelapa muda segar pelepas dahaga. Tanpa pengawet, tanpa pewarna buatan, 100% alami dan menyegarkan.',
    image: img('photo-1551024601-bec78aea704b'),
    badges: ['MINUMAN SEGAR'],
    satisfaction: 97,
    cookTime: '3 - 5 Menit',
    halalCert: 'ID31110002981920',
    packaging: 'Cup Sealed Anti Tumpah',
    chips: ['Estimasi 95 Kkal', 'Tanpa Pengawet', 'Sealed Anti Tumpah'],
    review: {
      text: 'Segarnya dapet banget! Kelapa mudanya banyak, jeruknya asli diperas. Cocok banget buat teman makan ayam goreng.',
      author: 'Anisa Putri',
      time: '1 jam lalu',
    },
    optionGroups: [
      {
        id: 'gula',
        title: '1. Tingkat Kemanisan',
        subtitle: 'Sesuaikan kadar gula sesuai selera',
        required: true,
        type: 'radio',
        options: [
          { id: 'less', label: 'Less Sugar', desc: 'Minim gula, lebih sehat' },
          {
            id: 'normal',
            label: 'Gula Normal',
            desc: 'Manis seimbang',
            default: true,
          },
          { id: 'extra', label: 'Extra Manis', desc: 'Manis banget nikmat' },
        ],
      },
      {
        id: 'es',
        title: '2. Pilihan Es',
        subtitle: 'Sesuaikan tingkat kedinginan',
        required: true,
        type: 'radio',
        options: [
          { id: 'no-ice', label: 'Tanpa Es', desc: 'Tanpa es, suhu ruang' },
          {
            id: 'less-ice',
            label: 'Es Sedikit',
            desc: 'Sejuk tapi tidak terlalu dingin',
            default: true,
          },
          { id: 'full-ice', label: 'Full Es', desc: 'Dingin banget nyegerin' },
        ],
      },
    ],
    pairingIds: [1, 2, 4],
  },
  {
    id: 4,
    name: 'Ayam Bakar Madu Pedas Manis Potong 4',
    price: 42000,
    description:
      'Dibakar dengan bumbu madu dan rempah wangi khas resep keluarga Pak Mul selama 45 menit. Ayam potong 4 bagian pilihan, harum aroma bakaran dengan cita rasa manis gurih yang meresap sempurna.',
    image: img('photo-1555939594-58d7cb561ad1'),
    badges: ['REKOMENDASI CHEF'],
    satisfaction: 96,
    cookTime: '20 - 30 Menit',
    halalCert: 'ID31110002981920',
    packaging: 'Paper Box Anti-Lembab & Segel',
    chips: [
      'Estimasi 650 Kkal',
      'Bahan 100% Halal Terverifikasi',
      'Segel Anti Bocor',
    ],
    review: {
      text: 'Ayam bakarnya juicy banget, bumbu madunya meresap sampai ke dalam. Nasi uduknya wangi bgt!',
      author: 'Budi Santoso',
      time: '3 jam lalu',
    },
    optionGroups: [
      {
        id: 'pedas',
        title: '1. Tingkat Pedas',
        subtitle: 'Pilih tingkat kepedasan bumbu bakar',
        required: true,
        type: 'radio',
        options: [
          {
            id: 'manis',
            label: 'Manis Gurih',
            desc: 'Tanpa pedas, pure rempah',
            default: true,
          },
          {
            id: 'sedang',
            label: 'Pedas Sedang',
            desc: 'Sedikit digigit pedasnya',
          },
          {
            id: 'pedas',
            label: 'Pedas Mantap',
            desc: 'Sensasi pedas di lidah',
          },
        ],
      },
      {
        id: 'nasi',
        title: '2. Pilihan Nasi',
        subtitle: 'Pilih jenis nasi pendamping',
        required: true,
        type: 'radio',
        options: [
          {
            id: 'uduk',
            label: 'Nasi Uduk',
            desc: 'Nasi uduk harum daun pandan',
            default: true,
          },
          { id: 'putih', label: 'Nasi Putih', desc: 'Nasi putih pulen biasa' },
        ],
      },
      {
        id: 'topping',
        title: '3. Tambahan Lauk',
        subtitle: 'Tambah lauk untuk makin lengkap',
        required: false,
        type: 'checkbox',
        options: [
          {
            id: 'lalapan',
            label: 'Extra Lalapan Segar',
            desc: 'Timun, kemangi, dan tomat segar',
            extraPrice: 3000,
          },
          {
            id: 'tempe',
            label: 'Tempe Goreng (2 pcs)',
            desc: 'Renyah gurih lauk pendamping',
            extraPrice: 4000,
          },
        ],
      },
    ],
    pairingIds: [3, 5, 6],
  },
  {
    id: 5,
    name: 'Tahu & Tempe Bacem Gurih (Isi 4)',
    price: 12000,
    description:
      'Kombinasi 2 potong tahu dan 2 potong tempe dibacem dengan bumbu ketumbar, gula kelapa asli, dan daun salam hingga bumbu meresap sempurna. Digoreng golden brown dengan aroma manis gurih yang menggugah selera.',
    image: img('photo-1504674900247-0877df9cc836'),
    badges: ['LAUK FAVORIT'],
    satisfaction: 95,
    cookTime: '8 - 12 Menit',
    halalCert: 'ID31110002981920',
    packaging: 'Paper Wrap Grease-Proof',
    chips: [
      'Estimasi 280 Kkal',
      'Bahan 100% Halal Terverifikasi',
      'Bebas Pengawet',
    ],
    review: {
      text: 'Bacemnya enak banget, manisnya pas nggak bikin eneg. Porsinya generous, tahu sama tempenya besar-besar!',
      author: 'Maya Sari',
      time: '4 jam lalu',
    },
    optionGroups: [
      {
        id: 'porsi',
        title: '1. Pilih Porsi',
        subtitle: 'Sesuaikan jumlah porsi tahu tempe bacem',
        required: true,
        type: 'radio',
        options: [
          {
            id: 'normal',
            label: 'Normal (Isi 4)',
            desc: '2 tahu + 2 tempe',
            default: true,
          },
          {
            id: 'double',
            label: 'Double Porsi (Isi 8)',
            desc: '4 tahu + 4 tempe',
            extraPrice: 12000,
          },
        ],
      },
    ],
    pairingIds: [1, 2, 3],
  },
  {
    id: 6,
    name: 'Sayur Asem Khas Betawi',
    price: 14000,
    description:
      'Kuah asam segar bersama jagung manis, kacang tanah, dan daun melinjo empuk. Dimasak dengan asam jawa segar dan rempah pilihan khas Betawi, cocok sebagai pelengkap menu utama.',
    image: img('photo-1547592180-85f173990554'),
    badges: ['KUAH SEGAR'],
    satisfaction: 92,
    cookTime: '10 - 15 Menit',
    halalCert: 'ID31110002981920',
    packaging: 'Cup Sup Anti Tumpah',
    chips: ['Estimasi 120 Kkal', 'Bahan 100% Alami', 'Tanpa MSG'],
    review: {
      text: 'Sayur asemnya seger banget, kuahnya bening tapi rasanya nampol. Pas banget dimakan sama ayam goreng.',
      author: 'Rini Kusuma',
      time: '6 jam lalu',
    },
    optionGroups: [
      {
        id: 'pedas',
        title: '1. Tingkat Pedas',
        subtitle: 'Pilih tingkat kepedasan sayur asem',
        required: true,
        type: 'radio',
        options: [
          {
            id: 'tidak',
            label: 'Tidak Pedas',
            desc: 'Original tanpa cabai',
            default: true,
          },
          {
            id: 'sedang',
            label: 'Sedikit Pedas',
            desc: 'Sedikit cabe rawit segar',
          },
        ],
      },
    ],
    soldOut: true,
    pairingIds: [1, 2, 4],
  },
];

export function getMenuDetail(id: number): MenuDetail | undefined {
  return menuDetails.find((m) => m.id === id);
}
