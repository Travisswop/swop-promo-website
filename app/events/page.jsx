import React from 'react';
import EventsSections from '@/components/events/EventsSections';

const page = () => {
  return (
    <div className='relative'>
      {/* Background gradient */}
      <div className='absolute left-[-55%] md:left-[-35%] top-[-3%] md:top-[-12%] bottom-0 w-full gradient-circle-top h-[25%] md:h-[90%]' />
      {/* <div className='absolute right-[-70%] md:right-[-50%] top-[55%] md:top-[40%] bottom-0 w-full gradient-circle-left h-[20%] md:h-[70%]' /> */}
      <div className='text-black overflow-x-hidden'>
        {/* Main Body Content */}
        <div className='relative z-20'>
          <EventsSections />
        </div>
      </div>
    </div>
  );
};

export default page;
