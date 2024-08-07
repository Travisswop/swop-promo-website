import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import Image from 'next/image';
import RevealUpMotion from '../motion/RevealUpMotion';

const DashboardFlow = () => {
  return (
    <SectionLayout>
      <RevealUpMotion>
        <h2
          className={`text-stone-950 font-medium text-2xl md:text-4xl mt-5 mb-14 text-center !leading-normal`}
        >
          One
          <>
            <strong> Dashboard </strong>
          </>
          To manage your teams links <br />
          and entire customer Interaction <strong>flow</strong>
        </h2>
      </RevealUpMotion>

      <div className=''>
        <div className={`rounded-md flex justify-center mx-auto mt[]`}>
          <Image
            width={900}
            height={750}
            src={'/assets/home/dashboard-flow.jpg'}
            alt='Dashboard Flow'
            className='mx-auto'
          />
          {/* <video autoPlay loop muted playsInline>
            <source
              src={'/assets/home/laptop-admin-dashboard.mp4'}
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video> */}
        </div>
      </div>
    </SectionLayout>
  );
};

export default DashboardFlow;
