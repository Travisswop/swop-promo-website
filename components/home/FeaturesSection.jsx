'use client';
import React, { useEffect, useRef } from 'react';
import SectionLayout from '../shared/SectionLayout';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

const mobileImageVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const arrowSignVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
};

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.3,
    },
  },
};

const itemLeft = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const itemRight = {
  hidden: { x: 30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

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
  const centerImageRef = useRef(null);
  const featuresLeftRef = useRef(null);
  const featuresRightRef = useRef(null);

  const centerImageInView = useInView(centerImageRef, { once: false });
  const featuresLeftInView = useInView(featuresLeftRef, { once: false });
  const featuresRightInView = useInView(featuresRightRef, { once: false });

  const centerImageControls = useAnimation();
  const featuresLeftControls = useAnimation();
  const featuresRightControls = useAnimation();

  useEffect(() => {
    if (centerImageInView) {
      centerImageControls.start('visible');
    } else {
      centerImageControls.start('hidden');
    }
  }, [centerImageInView, centerImageControls]);

  useEffect(() => {
    if (centerImageInView) {
      featuresLeftControls.start('visible');
    } else {
      featuresLeftControls.start('hidden');
    }
  }, [centerImageInView, featuresLeftControls]);

  useEffect(() => {
    if (featuresLeftInView) {
      featuresRightControls.start('visible');
    } else {
      featuresRightControls.start('hidden');
    }
  }, [featuresLeftInView, featuresRightControls]);

  return (
    <SectionLayout>
      <motion.div>
        <h2
          className={`text-stone-950 font-medium text-2xl md:text-4xl text-center !leading-normal`}
        >
          <strong>Features</strong>
        </h2>
      </motion.div>
      <motion.div className='grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-0 md:gap-14 md:mt-4'>
        {/* Features Left Part */}
        <motion.div
          ref={featuresLeftRef}
          variants={container}
          initial='hidden'
          animate={featuresLeftControls}
        >
          {featuresInfoLeft.map((el, index) => (
            <motion.div
              key={index}
              className='flex flex-col md:flex-row items-center justify-end xl:my-10 2xl:my-24 gap-x-10 itemRight'
              variants={itemLeft}
            >
              <div className='w-[75%] '>
                <h2 className='mb-2 text-xl text-stone-950 text-center md:text-right font-bold mt-6 md:mt-0'>
                  {el.title}
                </h2>
                <p className='text-lg text-stone-950 text-center md:text-right mt-1'>
                  {el.text}
                </p>
              </div>
              <div>
                <div
                  className={`${el.iconColor} p-5 rounded-3xl flex justify-center items-center`}
                >
                  <Image
                    src={el.icon}
                    alt='Feature icon'
                    className='w-[40px] h-[40px]'
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Center Image Part */}
        <div ref={centerImageRef} className='relative flex justify-center'>
          {/* Mobile Image */}
          <motion.div
            className='relative z-20'
            variants={mobileImageVariants}
            initial='hidden'
            animate={centerImageControls}
          >
            <Image
              width={400}
              height={50}
              src={'/assets/home/features-mobile.png'}
              alt='Link icon'
              className='mx-auto'
            />
          </motion.div>

          {/* Arrow Sign Image */}
          <motion.div
            className='absolute top-16 left-0 right-0 z-10 '
            variants={arrowSignVariants}
            initial='hidden'
            animate={centerImageControls}
          >
            <Image
              width={2900}
              height={1500}
              src={'/assets/home/features-mobile-arrowsign.svg'}
              alt='Link icon'
              className='mx-auto'
            />
          </motion.div>
        </div>

        {/* Features Right Part */}
        <motion.div
          ref={featuresRightRef}
          variants={container}
          initial='hidden'
          animate={featuresRightControls}
        >
          {featuresInfoRight.map((el, index) => (
            <motion.div
              key={index}
              className='flex flex-col md:flex-row items-center justify-start my-24 gap-x-10 itemRight'
              variants={itemRight}
            >
              <div
                className={`${el.iconColor} p-5 rounded-3xl flex justify-center items-center`}
              >
                <Image
                  src={el.icon}
                  alt='Feature icon'
                  className='w-[40px] h-[40px]'
                  width={40}
                  height={40}
                />
              </div>

              <div className='w-[75%]'>
                <h2 className='mb-2 text-xl text-stone-950 text-center md:text-left font-bold'>
                  {el.title}
                </h2>
                <p className='text-lg text-stone-950 text-center md:text-left mt-1'>
                  {el.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionLayout>
  );
};

export default FeaturesSection;
