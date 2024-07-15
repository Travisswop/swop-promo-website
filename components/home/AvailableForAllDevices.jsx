import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import Image from 'next/image';

const AvailableForAllDevices = () => {
  return (
    <SectionLayout bg={'bg-[#F8F8F8]'}>
      <div className='flex flex-col-reverse md:flex-row justify-center items-center bg-white md:mx-20 md:my-6 p-5 md:p-16'>
        <div className={`flex-1`}>
          <h2
            className={`text-stone-950 font-bold text-3xl md:text-5xl mt-16 md:mt-5 mb-2 text-center md:text-left !leading-tight`}
          >
            Available <br />
            For All Devices
          </h2>
          <h6 className='text-md md:text-xl text-stone-950 text-center md:text-left font-semibold'>
            Add web3 compatibility to your business to engage and grow with the
            blockchain economy with over 100 million wallets globally. Truly
            borderless interactions.
          </h6>
          <div className='mt-8'>
            <h6 className='text-xl text-stone-950 text-center md:text-left font-bold'>
              DOWNLOAD NOW ON:
            </h6>
            <div className='flex gap-2 mt-2 justify-center md:justify-start mb-10'>
              <Image
                width={200}
                height={50}
                src='/assets/home/google-play.png'
                alt='Available For All Devices'
                className='w-[120px] h-auto'
              />
              <Image
                width={200}
                height={50}
                src='/assets/home/app-store.png'
                alt='Available For All Devices'
                className='w-[120px] h-auto'
              />
            </div>
          </div>
        </div>
        <div className={`flex-1`}>
          <Image
            width={500}
            height={450}
            src={'/assets/home/all-devices.png'}
            alt='Available For All Devices'
            className='mx-auto'
          />
        </div>
      </div>
    </SectionLayout>
  );
};

export default AvailableForAllDevices;
