import { Baloo_2 } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import MainNavbar from '@/components/MainNavbar';
import Footer from '@/components/Footer';

const baloo = Baloo_2({ subsets: ['latin'] });

export const metadata = {
  title: 'Swop Website',
  description: '',
  // metadataBase: new URL('https://trip-law-new-website.vercel.app'),
  // alternates: {
  //   canonical: '/',
  //   languages: {
  //     'en-US': '/en-USA',
  //   },
  // },
  // openGraph: {
  //   images: '/opengraph-image.jpg',
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={baloo.className}>
        <Providers>
          <div className='text-black bg-white overflow-x-hidden'>
            <MainNavbar />
            {children}
            <Analytics />
            <SpeedInsights />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
