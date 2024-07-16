import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import Image from 'next/image';

const featuresInfoLeft = [
  {
    icon: '/assets/home/features-icon/image 2172-7.png',
    iconColor: 'bg-[#FFFB95]',
    title: 'Share Social Media',
    text: 'Instantly share your social account in one tap with everyone.',
  },
  {
    icon: '/assets/home/features-icon/image 2172-4.png',
    iconColor: 'bg-[#B4FFB7]',
    title: 'Message',
    text: 'Instantly connect with friends and family through real-time text communication.',
  },
  {
    icon: '/assets/home/features-icon/image 2172-3.png',
    iconColor: 'bg-[#FF9898]',
    title: 'Transactions',
    text: 'Securely manage and track your financial transactions with ease and precision.',
  },
  {
    icon: '/assets/home/features-icon/image 2172-2.png',
    iconColor: 'bg-[#83D0FF]',
    title: 'Audio Music',
    text: 'Easily share your favorite music tracks with friends and connections.',
  },
];

const featuresInfoRight = [
  {
    icon: '/assets/home/features-icon/image 2172-6.png',
    iconColor: 'bg-[#83D0FF]',
    title: 'Share Social Media',
    text: 'Easily share your favorite music tracks with friends and connections.',
  },
  {
    icon: '/assets/home/features-icon/image 2172-5.png',
    iconColor: 'bg-[#B4FFB7]',
    title: 'Redeem links',
    text: 'Redeem links seamlessly for accessing exclusive offers and rewards.',
  },
  {
    icon: '/assets/home/features-icon/image 2172.png',
    iconColor: 'bg-[#FF9898]',
    title: 'Products Sell',
    text: 'Easily list and sell products to a wide audience effortlessly.',
  },
  {
    icon: '/assets/home/features-icon/image 2172-1.png',
    iconColor: 'bg-[#FFFB95]',
    title: 'Blog Posts',
    text: 'Create and share insightful blog posts to engage and inform your audience.',
  },
];

const FeaturesSection = () => {
  return (
    <SectionLayout>
      <h2
        className={`text-stone-950 font-medium text-xl md:text-3xl text-center !leading-normal `}
      >
        <strong>Features</strong>
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-0 md:gap-14 md:mt-10'>
        <div>
          {featuresInfoLeft?.map((el, index) => (
            <div
              className='flex flex-col md:flex-row items-center justify-end my-28 gap-x-10'
              key={index}
            >
              <div className='order-2 md:order-1'>
                <h2 className='mb-2 text-xl text-stone-950 text-center md:text-right font-bold mt-6 md:mt-0'>
                  {el.title}
                </h2>
                <p className='text-lg text-stone-950 text-center md:text-right mt-1'>
                  {el.text}
                </p>
              </div>
              <div
                className={`${el.iconColor} p-6 rounded-2xl w-[100px] h-[80px] order-1 md:order-1 flex justify-center items-center `}
              >
                <Image
                  src={el.icon}
                  alt='Feature icon'
                  className='w-[40px] h-[40px]'
                  width={40}
                  height={40}
                />
              </div>
            </div>
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

        <div>
          {featuresInfoRight?.map((el, index) => (
            <div
              className='flex flex-col md:flex-row items-center justify-start my-28 gap-x-10'
              key={index}
            >
              <div
                className={`${el.iconColor} p-6 rounded-2xl w-[100px] h-[80px] order-1 md:order-1 flex justify-center items-center`}
              >
                <Image
                  src={el.icon}
                  alt='Feature icon'
                  className='w-[40px] h-[40px]'
                  width={40}
                  height={40}
                />
              </div>

              <div className='order-2 md:order-2 mt-6 md:mt-0'>
                <h2 className='mb-2 text-xl text-stone-950 text-center md:text-left font-bold'>
                  {el.title}
                </h2>
                <p className='text-lg text-stone-950 text-center md:text-left mt-1'>
                  {el.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default FeaturesSection;
