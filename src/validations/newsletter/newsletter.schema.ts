import { z } from 'zod';

export const newsletterSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});

export type NewsletterPayloadType = z.infer<typeof newsletterSchema>;

export interface NewsletterResponseType {
  id: string;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface SubscriberPayloadType {
  email: string;
}

export type SubscribeNewsletterPayloadType = SubscriberPayloadType;

export interface SubscriberResponseType {
  id: string;
  email: string;
  isVerified?: boolean;
}

export interface VerifySubscriberPayloadType {
  token: string;
}
