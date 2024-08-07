import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import Image from 'next/image';
import RevealUpMotion from '../motion/RevealUpMotion';

const linkInfo = [
  {
    img: '/assets/company/Mask group-0.png',
    name: 'Travis Herron',
    title: 'Founder & CEO at SWOP',
  },
  {
    img: '/assets/company/Mask group-1.png',
    name: 'Travis Herron',
    title: 'Founder & CEO at SWOP',
  },
  {
    img: '/assets/company/Mask group-2.png',
    name: 'Travis Herron',
    title: 'Founder & CEO at SWOP',
  },
  {
    img: '/assets/company/Mask group-3.png',
    name: 'Travis Herron',
    title: 'Founder & CEO at SWOP',
  },
  {
    img: '/assets/company/Mask group-4.png',
    name: 'Travis Herron',
    title: 'Founder & CEO at SWOP',
  },
  {
    img: '/assets/company/Mask group-5.png',
    name: 'Travis Herron',
    title: 'Founder & CEO at SWOP',
  },
];

const FoundersSection = () => {
  return (
    <SectionLayout>
      <RevealUpMotion>
        <h2
          className={`text-stone-950 font-semibold text-xl md:text-5xl text-center !leading-normal`}
        >
          Founders
        </h2>
      </RevealUpMotion>

      <RevealUpMotion>
        <p className='text-lg text-stone-950 text-center'>
          Core Values and Ethics in Leadership
        </p>
      </RevealUpMotion>

      <div className='grid grid-cols-1 md:grid-cols-3 items-start justify-center gap-14 mt-24'>
        {linkInfo?.map((el, index) => (
          <RevealUpMotion key={index}>
            <div className=''>
              <div className={``}>
                <Image
                  width={300}
                  height={150}
                  src={el.img}
                  alt='Company'
                  className='mx-auto'
                />
              </div>
              <h2 className='mt-4 text-xl text-stone-950 text-center font-bold'>
                {el.name}
              </h2>
              <p className='text-lg text-stone-950 text-center'>{el.title}</p>
            </div>
          </RevealUpMotion>
        ))}
      </div>
    </SectionLayout>
  );
};

export default FoundersSection;
