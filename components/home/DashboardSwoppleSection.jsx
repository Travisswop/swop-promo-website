import React from 'react';
import DashboardFlow from './DashboardFlow';
import SwoppleSection from './SwoppleSection';

const DashboardSwoppleSection = () => {
  return (
    <div className='relative flex justify-center items-center min-h-screen'>
      {/* circle bg gradient right */}
      <div className='absolute right-[-50%] top-[10%] bottom-0 w-[100%] gradient-circle-left' />
      {/* main content */}
      <div className='relative z-10'>
        <DashboardFlow />
        <SwoppleSection />
      </div>
    </div>
  );
};

export default DashboardSwoppleSection;
