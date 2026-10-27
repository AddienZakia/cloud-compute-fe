import { CatalogItem } from './catalog';

export type OrderStatus = 'waiting' | 'picked' | 'delivered' | 'cancelled';
export type TransactionStatus = 'pending' | 'failed' | 'success';

export interface OrderItemPayload {
  catalogId: string;
  quantity: number;
}

export interface CreateOrderPayload {
  merchantId: string;
  deliveryAddress: string;
  driverId?: string;
  items: OrderItemPayload[];
}

export interface UpdateOrderStatusPayload {
  status: OrderStatus;
  driverId?: string;
}

export interface UpdateOrderPayload {
  status?: OrderStatus;
  driverId?: string | null;
  deliveryAddress?: string;
}

export interface UpdateTransactionStatusPayload {
  status: TransactionStatus;
}

export interface TransactionItem {
  id: string;
  orderId: string;
  status: TransactionStatus;
  grossAmount: number;
  paidAt?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItemDetail {
  id: string;
  orderId: string;
  catalogId: string;
  quantity: number;
  priceSnapshot: number;
  createdAt: string;
  updatedAt: string;
  catalog?: CatalogItem;
}

export interface OrderDetail {
  id: string;
  userId: string;
  driverId?: string | null;
  merchantId: string;
  status: OrderStatus;
  deliveryAddress: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    id: string;
    name: string;
    email: string;
    phoneNumber?: string | null;
  };
  driver?: {
    id: string;
    name: string;
    email: string;
    isAvailable: boolean;
  } | null;
  merchant?: {
    id: string;
    title: string;
    address: string;
    imageUrl?: string | null;
  };
  orderItems?: OrderItemDetail[];
  transaction?: TransactionItem | null;
}
