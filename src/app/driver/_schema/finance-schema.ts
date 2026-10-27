import { z } from 'zod';

export const dailyEarningsSchema = z.object({
  id: z.string(),
  day: z.string(),
  date: z.string(),
  baseFare: z.number().nonnegative(),
  rushAndTip: z.number().nonnegative(),
  total: z.number().nonnegative(),
  isToday: z.boolean().default(false),
  totalFormatted: z.string(),
});

export const weeklySummarySchema = z.object({
  completedTrips: z.number().int().nonnegative(),
  targetTrips: z.number().int().positive(),
  averagePerTrip: z.number().positive(),
  rating: z.number().positive(),
  bonusAmount: z.number().positive(),
});

export const rushIncentiveSchema = z.object({
  amount: z.number().nonnegative(),
  isActive: z.boolean(),
  eventName: z.string(),
  schedule: z.string(),
  rateRange: z.string(),
  zone: z.string(),
});

export const registeredBankSchema = z.object({
  bankName: z.string(),
  accountMasked: z.string(),
});

export const driverFinanceSchema = z.object({
  syncId: z.string(),
  driverName: z.string(),
  bank: registeredBankSchema,
  weeklySummary: weeklySummarySchema,
  rushIncentive: rushIncentiveSchema,
  dailyEarnings: z.array(dailyEarningsSchema),
});

export type DailyEarningsItem = z.infer<typeof dailyEarningsSchema>;
export type WeeklySummary = z.infer<typeof weeklySummarySchema>;
export type RushIncentive = z.infer<typeof rushIncentiveSchema>;
export type RegisteredBank = z.infer<typeof registeredBankSchema>;
export type DriverFinanceData = z.infer<typeof driverFinanceSchema>;
