'use client';
import SectionLayout from '../shared/SectionLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const text = 'Build a SmartSite Today'.split(' ');

  return (
    <SectionLayout bg={'bg-transparent'}>
      <div className='flex flex-col-reverse md:flex-row items-center z-50 gap-6'>
        <motion.div
          className='flex-1'
          initial='hidden'
          animate='visible'
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <h1
            className={`text-[30px] md:text-[56px] font-[750] text-black text-center leading-tight tracking-normal `}
          >
            {text.map((word, index) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, delay: index / 10 }}
                key={index}
              >
                {word}{' '}
              </motion.span>
            ))}
          </h1>
          <motion.p
            variants={variants}
            className='text-black text-2xl md:text-[36px] mt-2 md:mt-2 text-center'
          >
            And Get Paid to Network
          </motion.p>

          <motion.div
            variants={variants}
            className='mt-5 md:mt-6 flex justify-center'
          >
            <Link
              href={'tel:(863)-599-6735'}
              className='text-black bg-none hover:bg-black hover:text-white font-medium text-md md:text-lg px-6 md:px-10 py-2 me-0 md:me-6 mb-2 border-2 border-black items-center justify-center flex rounded-xl'
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
        <div className='flex justify-center flex-1'>
          <div className='w-[70%]'>
            <video autoPlay loop muted playsInline>
              <source
                src={'/assets/home/hero-bg-jvideo.mp4'}
                type='video/mp4'
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default HeroSection;
