import { z } from 'zod';

export const driverProfileSchema = z.object({
  id: z.string(),
  name: z.string(),
  badge: z.string(),
  vehicle: z.string(),
  vehicleType: z.string(),
  fleetStatus: z.string(),
  avatarUrl: z.string().optional(),
});

export const driverStatusSchema = z.object({
  isOnline: z.boolean(),
  isOpen: z.boolean(),
  brokerLagMs: z.number().nonnegative(),
  kafkaConsumer: z.string(),
  kafkaLatency: z.string(),
});

export const driverBalanceSchema = z.object({
  amount: z.number().nonnegative(),
  incentiveAmount: z.number().nonnegative(),
  autoDisburseActive: z.boolean(),
});

export const driverStatItemSchema = z.object({
  id: z.string(),
  label: z.string(),
  value: z.string(),
  subtext: z.string(),
  subtextColor: z.enum(['green', 'default']).default('default'),
});

export const deliveryStatusEnum = z.enum([
  'MENJEMPUT',
  'TIBA_DI_RESTO',
  'MENGANTAR',
  'SELESAI',
]);

export const deliveryItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  qty: z.number().int().positive(),
  notes: z.string().optional(),
});

export const routePointSchema = z.object({
  pointNumber: z.number().int(),
  title: z.string(),
  label: z.string().optional(),
  name: z.string(),
  address: z.string(),
  notes: z.string().optional(),
  primaryActionLabel: z.string(),
  secondaryActionLabel: z.string(),
  primaryActionDisabled: z.boolean().optional(),
  secondaryActionDisabled: z.boolean().optional(),
  disabledReason: z.string().optional(),
});

export const activeDeliverySchema = z.object({
  id: z.string(),
  orderNumber: z.string(),
  trackingSyncId: z.string(),
  customerName: z.string(),
  paymentMethod: z.string(),
  status: deliveryStatusEnum,
  etaResto: z.string(),
  pickupPoint: routePointSchema,
  dropoffPoint: routePointSchema,
  sealStatus: z.string(),
  items: z.array(deliveryItemSchema),
  deliveryFee: z.number().nonnegative(),
});

export const newOfferItemSchema = z.object({
  id: z.string(),
  orderNumber: z.string(),
  restaurantName: z.string(),
  deliveryFee: z.number().nonnegative(),
  customerName: z.string(),
  tripDistance: z.string(),
  itemsSummary: z.string(),
  initialSeconds: z.number().int().positive(),
});

export const surgeNoticeSchema = z.object({
  area: z.string(),
  surgeAmount: z.number().nonnegative(),
  validUntil: z.string(),
});

export const driverDashboardSchema = z.object({
  profile: driverProfileSchema,
  status: driverStatusSchema,
  balance: driverBalanceSchema,
  stats: z.array(driverStatItemSchema),
  activeDeliveries: z.array(activeDeliverySchema).default([]),
  newOffers: z.array(newOfferItemSchema).default([]),
  surgeNotice: surgeNoticeSchema,
});

export type DriverProfile = z.infer<typeof driverProfileSchema>;
export type DriverStatus = z.infer<typeof driverStatusSchema>;
export type DriverBalance = z.infer<typeof driverBalanceSchema>;
export type DriverStatItem = z.infer<typeof driverStatItemSchema>;
export type DeliveryStatus = z.infer<typeof deliveryStatusEnum>;
export type DeliveryItem = z.infer<typeof deliveryItemSchema>;
export type RoutePoint = z.infer<typeof routePointSchema>;
export type ActiveDelivery = z.infer<typeof activeDeliverySchema>;
export type NewOfferItem = z.infer<typeof newOfferItemSchema>;
export type SurgeNoticeData = z.infer<typeof surgeNoticeSchema>;
export type DriverDashboardData = z.infer<typeof driverDashboardSchema>;
