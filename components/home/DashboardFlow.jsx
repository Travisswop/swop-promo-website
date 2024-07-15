import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import Image from 'next/image';

const DashboardFlow = () => {
  return (
    <SectionLayout>
      <h2
        className={`text-stone-950 font-medium text-xl md:text-3xl mt-5 mb-14 text-center !leading-normal`}
      >
        One
        <>
          <strong> Dashboard </strong>
        </>
        To manage your teams links <br />
        and entire customer Interaction <strong>flow</strong>
      </h2>

      <div className=''>
        <div className={` rounded-md p-4 flex justify-center mx-auto`}>
          <Image
            width={900}
            height={750}
            src={'/assets/home/dashboard-flow.jpg'}
            alt='Dashboard Flow'
            className='mx-auto'
          />
        </div>
      </div>
    </SectionLayout>
  );
};

export default DashboardFlow;
