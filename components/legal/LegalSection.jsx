'use client';
import React, { useState } from 'react';
import SectionLayout from '../shared/SectionLayout';
import { Tabs, Tab } from '@nextui-org/react';

const LegalSection = () => {
  return (
    <SectionLayout>
      <h2
        className={`text-stone-950 font-normal text-xl md:text-4xl text-center !leading-none`}
      >
        <strong>Legal</strong>
      </h2>

      <p className='text-lg text-stone-950 text-center mt-4 max-w-[620px] mx-auto'>
        Discover rewarding career paths, innovative work environments, and the
        chance to grow with us. Find your perfect job and start making an impact
        today.
      </p>
      <div className='md:mx-32 mt-16 mx-auto'>
        <div className='flex flex-wrap gap-4 justify-center'>
          <Tabs
            key={1}
            variant={'underlined'}
            aria-label='Tabs variants'
            className='text-lg'
          >
            <Tab key='photos' title='Privacy Policy' className='text-xl' />
            <Tab key='music' title='Returns' className='text-xl' />
            <Tab key='videos' title='Terms & Conditions' className='text-xl' />
          </Tabs>
        </div>
      </div>
    </SectionLayout>
  );
};

export default LegalSection;
