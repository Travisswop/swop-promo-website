import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SITECONFIG } from '@/config/site';
import SectionLayout from './shared/SectionLayout';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <footer className='bg-[#ffffff]'>
        <SectionLayout>
          <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 justify-center md:justify-between items-center'>
              <div className='flex flex-1 justify-center md:justify-start'>
                <Link
                  href='/'
                  className='flex items-center justify-start cursor-pointer'
                >
                  <Image
                    width={180}
                    height={100}
                    src={'/assets/site-logo/swop-logo.png'}
                    alt='Swop'
                    className='object-cover'
                  />
                </Link>
              </div>
              <div className='flex flex-1 justify-center'>
                <ul className='text-black font-normal text-lg md:text-lg list-none ml-0 flex flex-col md:flex-row items-center justify-center text-center'>
                  {SITECONFIG?.footer?.quick_links?.map((el, index) => (
                    <li className='mb-4 flex items-center ' key={index}>
                      <Link href={el.slug} className='hover:underline'>
                        {el.title}
                      </Link>
                      {index < SITECONFIG.footer.quick_links.length - 1 && (
                        <span className='mx-4 hidden md:block'>|</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className='flex flex-1 justify-center md:justify-end'>
                <div className=''>
                  <Image
                    width={110}
                    height={80}
                    src={'/assets/site-logo/qr-code.png'}
                    alt='Swop QR COde'
                    className=''
                  />
                  <p className='text-black font-normal text-md md:text-lg text-center w-28 !leading-5 mt-2'>
                    Scan To Get The App
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className='my-6 border-gray-600 sm:mx-auto dark:border-gray-700 lg:my-8' />
          <div className='flex flex-col md:flex-row items-center justify-center md:justify-between'>
            <p className='text-black font-normal text-md md:text-lg text-center mb-4 md:mb-0'>
              ©2024 Swop ®All Rights Reserved.
            </p>
            <div className='flex items-center gap-x-2'>
              <div className='bg-black rounded-full p-2'>
                <FaFacebookF className='text-white w-5 h-5' />
              </div>
              <div className='bg-black rounded-full p-2'>
                <FaLinkedinIn className='text-white w-5 h-5' />
              </div>
              <div className='bg-black rounded-full p-2'>
                <FaInstagram className='text-white w-5 h-5' />
              </div>
            </div>
          </div>
        </SectionLayout>
      </footer>
    </>
  );
};

export default Footer;
