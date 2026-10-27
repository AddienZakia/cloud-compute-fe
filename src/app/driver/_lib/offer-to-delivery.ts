import { offerDeliveryDetailsFallback } from '../_data/driver-data';
import type { ActiveDelivery, NewOfferItem } from '../_schema/driver-schema';

export function offerToDelivery(offer: NewOfferItem): ActiveDelivery {
  const fallback = offerDeliveryDetailsFallback[offer.id];
  const rawCustomerName = offer.customerName.replace(/^Pemesan:\s*/, '').trim();
  const customerFirstName = rawCustomerName.split(' ')[0] || rawCustomerName;

  // TODO: data ini nanti dari API/server; saat ini placeholder
  const pickupAddress =
    fallback?.pickupAddress ?? 'Alamat penjemputan belum tersedia —';
  const dropoffAddress =
    fallback?.dropoffAddress ?? 'Alamat pengantaran belum tersedia —';
  const dropoffNotes = fallback?.dropoffNotes ?? '—';
  const items = fallback?.items ?? [
    {
      id: `${offer.id}-item-1`,
      name: `${offer.itemsSummary} — (TODO: Nama item dari API)`,
      qty: 1,
      notes: '—',
    },
  ];

  return {
    id: offer.id,
    orderNumber: offer.orderNumber,
    trackingSyncId: `TRACK-SYNC ${offer.orderNumber}`,
    customerName: rawCustomerName,
    paymentMethod: 'BungkusPay Cashless',
    status: 'MENJEMPUT',
    // TODO: data ini nanti dari API/server; saat ini placeholder
    etaResto: 'Estimasi tiba belum tersedia —',
    pickupPoint: {
      pointNumber: 1,
      title: '1. TITIK PENJEMPUTAN',
      label: offer.tripDistance,
      name: offer.restaurantName,
      address: pickupAddress,
      primaryActionLabel: 'Buka Google Maps',
      secondaryActionLabel: 'Hubungi Resto',
      primaryActionDisabled: pickupAddress.includes('—'),
      secondaryActionDisabled: false,
      disabledReason: 'Detail lokasi penjemputan belum lengkap',
    },
    dropoffPoint: {
      pointNumber: 2,
      title: '2. TITIK PENGANTARAN',
      label: 'Drop-off Point',
      name: `Tujuan: ${rawCustomerName}`,
      address: dropoffAddress,
      notes: dropoffNotes,
      primaryActionLabel: `Hubungi ${customerFirstName}`,
      secondaryActionLabel: 'Chat Konsumen',
      primaryActionDisabled: dropoffAddress.includes('—'),
      secondaryActionDisabled: false,
      disabledReason: 'Detail alamat pengantaran belum lengkap',
    },
    sealStatus: 'Kantong Tersegel Segel Resmi Bungkusin',
    items,
    deliveryFee: offer.deliveryFee,
  };
}
