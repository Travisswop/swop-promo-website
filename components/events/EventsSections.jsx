'use client';
import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import { InlineWidget } from 'react-calendly';

const EventsSections = () => {
  return (
    <SectionLayout>
      <div className=''>
        <div className=''>
          <InlineWidget
            url='https://calendly.com/arsahak-bayshore/30min'
            styles={{
              height: '700px',
            }}
            pageSettings={{
              backgroundColor: 'ffffff',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: '#0b7788',
              textColor: '4d5055',
            }}
          />
        </div>
      </div>
    </SectionLayout>
  );
};

export default EventsSections;
