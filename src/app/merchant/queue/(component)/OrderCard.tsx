import { Order, calculateOrderTotal } from '../_schema/order-schema';
import BuyerNote from './BuyerNote';
import CookProgress from './CookProgress';
import CourierInfoBox from './CourierInfoBox';
import DriverInfoBox from './DriverInfoBox';
import OrderHeader from './OrderHeader';
import OrderItemList from './OrderItemList';
import OrderSummaryBox from './OrderSummaryBox';
import PaymentBox from './PaymentBox';
import PendingActions from './PendingActions';
import PickupPinBox from './PickupPinBox';
import PreparingActions from './PreparingActions';
import ReadyActions from './ReadyActions';

type Props = {
  order: Order;
};

export default function OrderCard({ order }: Props) {
  const total = calculateOrderTotal(order.items);
  const isPending = order.status === 'PENDING';
  const isPreparing = order.status === 'PREPARING';
  const isReady = order.status === 'READY_FOR_PICKUP';

  const readyBadgeText = order.courier?.isArrived
    ? 'Bungkus Selesai'
    : 'Menunggu Driver';
  const readyBadgeVariant = order.courier?.isArrived ? 'success' : 'warning';

  return (
    <article
      aria-label={`Pesanan #${order.id}`}
      className="flex flex-col gap-3.5 bg-neutral-10 border border-neutral-30 rounded-2xl p-4 shadow-xs hover:border-neutral-40 transition-colors"
    >
      {/* Header Kartu */}
      <OrderHeader
        id={order.id}
        customerName={order.customerName}
        isVip={order.isVip}
        timeWib={order.timeWib}
        timeAgo={isPending ? order.timeAgo : undefined}
        statusBadge={
          isPreparing ? 'Memasak' : isReady ? readyBadgeText : undefined
        }
        statusBadgeVariant={
          isPreparing ? 'danger' : isReady ? readyBadgeVariant : 'danger'
        }
      />

      {/* PENDING: Info Pembayaran & Daftar Item */}
      {isPending && <PaymentBox payment={order.payment} total={total} />}
      {(isPending || isPreparing) && <OrderItemList items={order.items} />}

      {/* Catatan Khusus Pembeli */}
      {order.buyerNote && <BuyerNote note={order.buyerNote} />}

      {/* PREPARING: Progres Masak & Info Kurir */}
      {isPreparing && <CookProgress progress={order.cookingProgress} />}
      {isPreparing && <CourierInfoBox courier={order.courier} />}

      {/* READY_FOR_PICKUP: Kotak Ringkasan, Info Driver, & PIN Pickup */}
      {isReady && (
        <>
          <OrderSummaryBox
            items={order.items}
            total={total}
            packagingInfo={order.packagingInfo}
          />
          <DriverInfoBox courier={order.courier} />
          <PickupPinBox
            pin={order.pickupPin}
            isDriverArrived={order.courier?.isArrived}
          />
        </>
      )}

      {/* Tombol Aksi Sesuai Status */}
      {isPending && <PendingActions orderId={order.id} />}
      {isPreparing && <PreparingActions orderId={order.id} />}
      {isReady && <ReadyActions orderId={order.id} />}
    </article>
  );
}
