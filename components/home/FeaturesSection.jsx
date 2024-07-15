import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import Image from 'next/image';


const featuresInfoLeft = [
  {
    title: 'Share Social Media',
    text: 'Instantly share your social account in one tap with everyone.',
  },
  {
    title: 'Message',
    text: 'Instantly connect with friends and family through real-time text communication.',
  },
  {
    title: 'Transactions',
    text: 'Securely manage and track your financial transactions with ease and precision.',
  },
  {
    title: 'Audio Music',
    text: 'Easily share your favorite music tracks with friends and connections.',
  },
];

const featuresInfoRight = [
  {
    title: 'Share Social Media',
    text: 'Easily share your favorite music tracks with friends and connections.',
  },
  {
    title: 'Redeem links',
    text: 'Redeem links seamlessly for accessing exclusive offers and rewards.',
  },
  {
    title: 'Products Sell',
    text: 'Easily list and sell products to a wide audience effortlessly.',
  },
  {
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
        <div className={``}>
          {featuresInfoLeft?.map((el, index) => (
            <div className='my-10 bg-[#EFEFEF] p-4 rounded-lg' key={index}>
              <h2 className='mb-2 text-xl text-stone-950 text-center md:text-left font-bold'>
                {el.title}
              </h2>
              <p className='text-lg text-stone-950 text-center md:text-left mt-1'>
                {el.text}
              </p>
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

        <div className={``}>
          {featuresInfoRight?.map((el, index) => (
            <div className='my-10 bg-[#EFEFEF] p-4 rounded-lg' key={index}>
              <h2 className='mb-2 text-xl text-stone-950 text-center md:text-left font-bold'>
                {el.title}
              </h2>
              <p className='text-lg text-stone-950 text-center md:text-left mt-1'>
                {el.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default FeaturesSection;
