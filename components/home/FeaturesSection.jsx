'use client';
import React, { useEffect, useRef } from 'react';
import SectionLayout from '../shared/SectionLayout';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import RevealUpMotion from '../motion/RevealUpMotion';

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

  // sm: md: lg: xl: 2xl:

  return (
    <SectionLayout>
      <RevealUpMotion>
        <h2
          className={`text-stone-950 font-medium text-2xl md:text-4xl text-center !leading-normal mb-6 md:mb-0`}
        >
          <strong>Features</strong>
        </h2>
      </RevealUpMotion>
      <motion.div className='grid grid-cols-3 items-center justify-between gap-0 md:gap-14'>
        {/* Features Left Part */}
        <motion.div
          ref={featuresLeftRef}
          variants={container}
          initial='hidden'
          animate={featuresLeftControls}
          className='mt-[-10px] sm:mt-5 md:mt-0 lg:mt-[-45px] xl:mt-[-75px] 2xl:mt-0'
        >
          {featuresInfoLeft?.map((el, index) => (
            <motion.div
              key={index}
              className='flex flex-col md:flex-row items-center justify-end  my-5 sm:my-10 md:my-8 lg:my-10 xl:my-[70px] 2xl:my-24 gap-x-10 '
              variants={itemLeft}
            >
              <div className='w-[15%] lg:w-[75%] hidden lg:block'>
                <h2 className='mb-2 md:text-sm lg:text-md xl:text-lg 2xl:text-xl  text-stone-950 text-center md:text-right font-bold mt-6 md:mt-0'>
                  {el.title}
                </h2>
                <p className='md:text-xs lg:text-xs xl:text-md 2xl:text-lg  text-stone-950 text-center md:text-right mt-1'>
                  {el.text}
                </p>
              </div>
              <div>
                <div
                  className={`${el.iconColor} p-2 sm:p-3 md:p-3 lg:p-4 xl:p-5 2xl:p-5 rounded-md sm:rounded-2xl md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl flex justify-center items-center`}
                >
                  <Image
                    src={el.icon}
                    alt='Feature icon'
                    className='w-[15px] sm:w-[20px] md:w-[30px] lg:w-[30px] xl:w-[40px] 2xl:w-[40px] h-[15px] sm:h-[20px] md:h-[30px] lg:h-[30px] xl:h-[40px] 2xl:h-[40px]'
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
            className='absolute top-8 sm:top-16 md:top-16 lg:top-16 xl:top-16 2xl:top-16 left-0 right-0 z-10 '
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
          ref={featuresLeftRef}
          variants={container}
          initial='hidden'
          animate={featuresLeftControls}
          className='mt-[-10px] sm:mt-5 md:mt-0 lg:mt-[-45px] xl:mt-[-75px] 2xl:mt-0'
        >
          {featuresInfoRight?.map((el, index) => (
            <motion.div
              key={index}
              className='flex flex-col md:flex-row items-center justify-start  my-5 sm:my-10 md:my-8 lg:my-10 xl:my-[70px] 2xl:my-24 gap-x-10'
              variants={itemLeft}
            >
              <div>
                <div
                  className={`${el.iconColor} p-2 sm:p-3 md:p-3 lg:p-4 xl:p-5 2xl:p-5 rounded-md sm:rounded-2xl md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl flex justify-center items-center`}
                >
                  <Image
                    src={el.icon}
                    alt='Feature icon'
                    className='w-[15px] sm:w-[20px] md:w-[30px] lg:w-[30px] xl:w-[40px] 2xl:w-[40px] h-[15px] sm:h-[20px] md:h-[30px] lg:h-[30px] xl:h-[40px] 2xl:h-[40px]'
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <div className='w-[15%] lg:w-[75%] hidden lg:block'>
                <h2 className='mb-2 md:text-sm lg:text-md xl:text-lg 2xl:text-xl  text-stone-950 text-center md:text-left font-bold mt-6 md:mt-0'>
                  {el.title}
                </h2>
                <p className='md:text-xs lg:text-xs xl:text-md 2xl:text-lg  text-stone-950 text-center md:text-left mt-1'>
                  {el.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* <motion.div
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
        </motion.div> */}
      </motion.div>
      <div className='mt-8 lg:hidden'>
        {featuresInfoRight.map((el, index) => (
          <RevealUpMotion key={index}>
            <div className='flex flex-col items-center bg-[#EFEFEF] p-4 rounded-md my-4'>
              {/* <div
              className={`${el.iconColor} p-5 rounded-3xl flex justify-center items-center`}
            >
              <Image
                src={el.icon}
                alt='Feature icon'
                className='w-[40px] h-[40px]'
                width={40}
                height={40}
              />
            </div> */}

              <div className='w-[100%]'>
                <h2 className='mb-1 text-lg text-stone-950 ttext-left font-bold'>
                  {el.title}
                </h2>
                <p className='text-md text-stone-950 text-left mt-0'>
                  {el.text}
                </p>
              </div>
            </div>
          </RevealUpMotion>
        ))}
      </div>
    </SectionLayout>
  );
};

export default FeaturesSection;
