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
          <div className='relative'>
            {/* Background mash gradient */}
            <div className='gradient-circle-top absolute top-[-150px] left-[-800px] w-[100%] h-[1020px] z-1' />
            <div className='text-black overflow-x-hidden'>
              <MainNavbar />
              {/* Main Body Data */}
              <div className='relative z-10'>{children}</div>
              <Analytics />
              <SpeedInsights />
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
