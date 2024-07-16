'use client';
import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import Image from 'next/image';
import { PiCardsThreeLight } from 'react-icons/pi';

import { IoIosWatch } from 'react-icons/io';
import { GrTransaction } from 'react-icons/gr';
import { IoRestaurantOutline, IoCodeSharp } from 'react-icons/io5';
import { RiChatSettingsLine } from 'react-icons/ri';

const featuresInfoLeft = [
  { icon: IoIosWatch, title: 'Business Cards' },
  { icon: IoIosWatch, title: 'Wearables' },
  { icon: GrTransaction, title: 'Transactions' },
];

const featuresInfoRight = [
  { icon: IoRestaurantOutline, title: 'Hospitality' },
  { icon: RiChatSettingsLine, title: 'Customize' },
  { icon: IoCodeSharp, title: 'Embeddables' },
];

const FeatureItem = ({ icon: Icon, title }) => (
  <div className='p-2 bg-white rounded-full w-40 h-40 flex flex-col items-center justify-center border border-[#737373]'>
    <Icon className='w-8 h-8 text-[#737373]' />
    <h2 className='mt-2 text-lg text-[#737373] text-center font-normal'>
      {title}
    </h2>
  </div>
);

const ConectMobileSection = () => {
  return (
    <SectionLayout>
      <h2 className='text-stone-950 font-normal text-xl md:text-4xl text-center leading-none'>
        <strong>Hardware</strong> built to connect
        <br /> you with your <strong>customers</strong>.
      </h2>
      <p className='text-lg text-stone-950 text-center mt-4 max-w-[700px] mx-auto'>
        Attach your Everything Link to devices to route customers where they
        need to go, keeping everything organized and making it easier to
        generate leads, gather reviews, take payments, offer promotions, and
        more.
      </p>
      <div className='mt-16 mb-12 md:mb-0'>
        <Image
          width={120}
          height={120}
          src={'/assets/hardware/products/topicon.png'}
          alt='Link icon'
          className='mx-auto'
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-0 md:gap-14 md:mt-10'>
        <div className='flex flex-col justify-center gap-10 md:gap-28 mx-auto'>
          {featuresInfoLeft.map((el, index) => (
            <FeatureItem key={index} icon={el.icon} title={el.title} />
          ))}
        </div>
        <div>
          <Image
            width={400}
            height={50}
            src={'/assets/home/features-mobile.png'}
            alt='Link icon'
            className='mx-auto md:mt-8'
          />
        </div>
        <div className='flex flex-col justify-center gap-10 md:gap-28 mx-auto'>
          {featuresInfoRight.map((el, index) => (
            <FeatureItem key={index} icon={el.icon} title={el.title} />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default ConectMobileSection;
