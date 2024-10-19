import type { Metadata } from 'next';
import { Inter as FontSans, Henny_Penny } from 'next/font/google';
import './globals.css';
import 'toastify-js/src/toastify.css';

import { cn } from '@/lib/utils';

const henneyPenny = Henny_Penny({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-henny-penny',
});

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Spooky Trips',
  description:
    'Artificial intelligence-powered interactive application where users can upload vacation photos and turn them into spooky stories.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body
        className={cn(
          'min-h-screen font-sans antialiased',
          fontSans.variable,
          henneyPenny.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
