import { z } from 'zod';

export const orderStatusSchema = z.enum([
  'PENDING',
  'PREPARING',
  'READY_FOR_PICKUP',
  'REJECTED',
  'COMPLETED',
]);
export type OrderStatus = z.infer<typeof orderStatusSchema>;

export const orderItemSchema = z.object({
  id: z.string(),
  qty: z.number().int().positive(),
  name: z.string().min(1),
  variantNote: z.string().optional(),
  price: z.number().nonnegative(),
});
export type OrderItem = z.infer<typeof orderItemSchema>;

export const paymentInfoSchema = z.object({
  method: z.string().min(1),
  status: z.enum(['LUNAS', 'COD']),
});
export type PaymentInfo = z.infer<typeof paymentInfoSchema>;

// Helper menghitung total harga dari seluruh item
// TODO: Total asli nantinya bisa memuat ongkir, diskon, biaya platform, dan biaya kemasan
export function calculateOrderTotal(items: OrderItem[]): number {
  return items.reduce((sum, item) => sum + item.qty * item.price, 0);
}

export const cookingProgressSchema = z.object({
  elapsed: z.string(),
  estimate: z.string(),
  percent: z.number().min(0).max(100),
});
export type CookingProgress = z.infer<typeof cookingProgressSchema>;

export const courierInfoSchema = z.object({
  name: z.string().min(1),
  plateNumber: z.string().min(1),
  locationInfo: z.string().optional(),
  isArrived: z.boolean().default(false),
});
export type CourierInfo = z.infer<typeof courierInfoSchema>;

export const orderSchema = z.object({
  id: z.string().min(1),
  customerName: z.string().min(1),
  timeWib: z.string().min(1),
  timeAgo: z.string().min(1),
  isVip: z.boolean().default(false),
  payment: paymentInfoSchema,
  items: z.array(orderItemSchema).min(1),
  buyerNote: z.string().optional(),
  packagingInfo: z.string().optional(),
  status: orderStatusSchema,
  cookingProgress: cookingProgressSchema.optional(),
  courier: courierInfoSchema.optional(),
  pickupPin: z.string().optional(),
});
export type Order = z.infer<typeof orderSchema>;
