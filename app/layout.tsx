import type { Metadata } from 'next';
import { Playfair_Display, Dancing_Script, Lato } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const dancing = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kanha Bakers — Crafted with Love, Baked with Pride',
  description: 'Premium artisan bakery in newai, Rajasthan. Cakes, pastries, snacks and beverages made fresh daily.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dancing.variable} ${lato.variable} overflow-x-hidden w-full`}>
        <CartProvider>
          <Navbar />
          <main className="page-transition min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
