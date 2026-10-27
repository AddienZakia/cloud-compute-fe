import type { DeliveryHistoryItem } from '../_schema/history-schema';

const RESTOS = [
  'Nasi Uduk Kebon Kacang',
  'Bebek Kaleyo Tebet',
  'Mie Gacoan Tebet',
  "Soto Betawi H. Ma'ruf",
  'Dapur Solo Matraman',
  'Martabak Pecenongan 78',
  'Nasi Padang Garuda',
];

const CUSTOMERS = [
  ['Budi Santoso', 'Menteng Dalam'],
  ['Dimas Prasetyo', 'Tebet Barat'],
  ['Fajar Nugraha', 'Manggarai'],
  ['Hendra Wijaya', 'Cikini'],
  ['Dewi Lestari', 'Setiabudi'],
  ['Rian Hidayat', 'Matraman'],
  ['Lina Marlina', 'Kalibata'],
] as const;

const RATINGS = [5.0, 4.8, 4.9, 5.0, 4.7, 5.0, 4.9];
const TIPS = [3000, null, 2000, null, null, 4000, 5000];
const EARNINGS = [19000, 17000, 15000, 22000, 16000, 21000, 25000];
const NOTES = [
  'Termasuk peak rate',
  'Tarif flat regular',
  'Tarif flat regular',
  'Jarak jauh (7.5 km)',
  'Tarif flat regular',
  'Termasuk peak rate',
  'Jarak jauh (8.8 km)',
];

export function generateDeterministicHistory(): DeliveryHistoryItem[] {
  const items: DeliveryHistoryItem[] = [];

  for (let i = 0; i < 42; i++) {
    const day = Math.max(1, 10 - Math.floor((i * 10) / 42));
    const dayStr = day.toString().padStart(2, '0');
    const hour = (22 - (i % 16)).toString().padStart(2, '0');
    const minute = ((i * 13) % 60).toString().padStart(2, '0');

    if (i === 11) {
      items.push({
        id: '#BKS-20251004-9912',
        time: '04 Okt 2025, 20:15 WIB',
        restaurantName: 'Yoshinoya Kota Kasablanka',
        customerName: 'Konsumen Tebet',
        customerLocation: 'Batal oleh Resto',
        status: 'DIBATALKAN',
        rating: null,
        tip: null,
        earning: 6000,
        earningNote: 'Kompensasi Driver',
        monthKey: '2025-10',
      });
      continue;
    }

    const idx = i % RESTOS.length;
    const [cName, cLoc] = CUSTOMERS[idx];

    items.push({
      id: `#BKS-202510${dayStr}-${7000 + i * 47}`,
      time: `${dayStr} Okt 2025, ${hour}:${minute} WIB`,
      restaurantName: RESTOS[idx],
      customerName: cName,
      customerLocation: cLoc,
      status: 'SELESAI',
      rating: RATINGS[idx],
      tip: TIPS[idx],
      earning: EARNINGS[idx],
      earningNote: NOTES[idx],
      monthKey: '2025-10',
    });
  }

  return items;
}
