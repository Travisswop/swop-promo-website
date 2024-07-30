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
          {/* Background mash gradient */}
          {/* <div className='gradient-circle-top absolute top-[-10px] left-[-800px] w-[100%] h-[1020px] z-1' /> */}
          {/* <div className='absolute left-[-35%] top-[25%] md:top-[-5%] bottom-0 w-full gradient-circle-top h-[20%] md:h-[25%]' /> */}
          {/* 
              <MainNavbar /> */}
          {/* Main Body Data */}
          <div className='text-black overflow-x-hidden'>
            <MainNavbar />
            <div className=''>{children}</div>
            <Analytics />
            <SpeedInsights />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
