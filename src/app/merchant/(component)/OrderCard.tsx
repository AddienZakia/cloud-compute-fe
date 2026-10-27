import { cn } from '@/lib/utils';
import { Order, OrderActionKey, statusVisualConfig } from '../_data/orders';
import OrderCardCustomer from './OrderCardCustomer';
import OrderCardFooter from './OrderCardFooter';
import OrderCardHeader from './OrderCardHeader';
import OrderCardItems from './OrderCardItems';

interface OrderCardProps {
  order: Order;
  onAction: (orderId: string, actionKey: OrderActionKey) => void;
}

export default function OrderCard({ order, onAction }: OrderCardProps) {
  const config = statusVisualConfig[order.status];

  return (
    <article
      className={cn(
        'rounded-xl bg-neutral-10 border border-neutral-30 p-4 shadow-xs space-y-3',
        config.topBorderClass,
      )}
    >
      <OrderCardHeader
        orderNumber={order.orderNumber}
        status={order.status}
        timeInfo={order.timeInfo}
        isTimer={order.isTimer}
        totalPayment={order.totalPayment}
        isTotalPaymentPrimaryColor={order.isTotalPaymentPrimaryColor}
      />

      <OrderCardCustomer
        name={order.customer.name}
        deliveryType={order.customer.deliveryType}
        rightBadgeText={order.customer.rightBadgeText}
        isRightBadgeSuccess={order.customer.isRightBadgeSuccess}
      />

      <OrderCardItems items={order.items} />

      <OrderCardFooter
        customerNote={order.customerNote}
        driverInfo={order.driverInfo}
        actions={order.actions}
        onAction={(key) => onAction(order.id, key)}
      />
    </article>
  );
}
