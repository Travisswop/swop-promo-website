'use client';
import React, { useState } from 'react';
import SectionLayout from '../shared/SectionLayout';
import { Accordion, AccordionItem } from '@nextui-org/react';

const JobSection = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['1']));

  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  return (
    <SectionLayout>
      <h2
        className={`text-stone-950 font-normal text-xl md:text-4xl text-center !leading-none`}
      >
        <strong>Jobs</strong>
      </h2>

      <p className='text-lg text-stone-950 text-center mt-4 max-w-[620px] mx-auto'>
        Discover rewarding career paths, innovative work environments, and the
        chance to grow with us. Find your perfect job and start making an impact
        today.
      </p>
      <div className='mx-0 md:mx-32 mt-16'>
        <Accordion
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
          className='border-2 shadow-2xl p-10'
          // style={{ border: '1px solid red' }}
        >
          <AccordionItem key='1' aria-label='Accordion 1' title='Accordion 1'>
            {defaultContent}
          </AccordionItem>
          <AccordionItem key='2' aria-label='Accordion 2' title='Accordion 2'>
            {defaultContent}
          </AccordionItem>
          <AccordionItem key='3' aria-label='Accordion 3' title='Accordion 3'>
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
    </SectionLayout>
  );
};

export default JobSection;
