import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const FaqSilder = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div>
            <Image
              width={400}
              height={200}
              src={'/assets/faq/faq-video.jpg'}
              alt='Swop QR COde'
              className=''
            />
            <h2
              className={`text-stone-950 font-normal text-lg md:text-2xl text-left !leading-none mt-4`}
            >
              How to Active SWOP
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              width={400}
              height={200}
              src={'/assets/faq/faq-video.jpg'}
              alt='Swop QR COde'
              className=''
            />
            <h2
              className={`text-stone-950 font-normal text-lg md:text-2xl text-left !leading-none mt-4`}
            >
              How to SWOP connect an Android
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              width={400}
              height={200}
              src={'/assets/faq/faq-video.jpg'}
              alt='Swop QR COde'
              className=''
            />
            <h2
              className={`text-stone-950 font-normal text-lg md:text-2xl text-left !leading-none mt-4`}
            >
              SWOP pro
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              width={400}
              height={200}
              src={'/assets/faq/faq-video.jpg'}
              alt='Swop QR COde'
              className=''
            />
            <h2
              className={`text-stone-950 font-normal text-lg md:text-2xl text-left !leading-none mt-4`}
            >
              How to Active SWOP
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              width={400}
              height={200}
              src={'/assets/faq/faq-video.jpg'}
              alt='Swop QR COde'
              className=''
            />
            <h2
              className={`text-stone-950 font-normal text-lg md:text-2xl text-left !leading-none mt-4 mb-16`}
            >
              How to SWOP connect an Android
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default FaqSilder;
