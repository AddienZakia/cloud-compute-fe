import { Nunito_Sans, Plus_Jakarta_Sans } from 'next/font/google';

export const NunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  display: 'swap',
  variable: '--font-nunitoSans',
});

export const PlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-plusJakarta',
});
