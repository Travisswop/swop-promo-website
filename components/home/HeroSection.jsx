'use client';
import SectionLayout from '../shared/SectionLayout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const text = 'Build a SmartSite Today'.split(' ');

  return (
    <SectionLayout>
      <div className='flex flex-col-reverse md:flex-row items-center '>
        <motion.div
          className='flex-1'
          initial='hidden'
          animate='visible'
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <h1
            className={`text-[20px] md:text-[42px] font-[800] text-black text-center leading-tight tracking-normal`}
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
            className='text-black text-md md:text-2xl mt-4 md:mt-4 text-center'
          >
            And Get Paid to Network
          </motion.p>

          <motion.div
            variants={variants}
            className='mt-5 md:mt-8 flex justify-center'
          >
            <Link
              href={'tel:(863)-599-6735'}
              className='text-black bg-none hover:bg-black hover:text-white font-medium text-sm md:text-lg px-2 md:px-8 py-2 me-0 md:me-6 mb-2 border-2 border-black items-center justify-center flex rounded-xl'
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
        <div className='flex justify-center flex-1'>
          <div>
            <Image
              width={400}
              height={200}
              src={'/assets/home/hero-video.jpg'}
              alt='Swop QR COde'
              className=''
            />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default HeroSection;
