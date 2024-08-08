import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const slidesData = [
  {
    src: '/assets/faq/faq-video.jpg',
    alt: 'Swop QR Code',
    title: 'How to Activate SWOP',
  },
  {
    src: '/assets/faq/faq-video.jpg',
    alt: 'Swop QR Code',
    title: 'How to SWOP connect an Android',
  },
  { src: '/assets/faq/faq-video.jpg', alt: 'Swop QR Code', title: 'SWOP Pro' },
  {
    src: '/assets/faq/faq-video.jpg',
    alt: 'Swop QR Code',
    title: 'How to Activate SWOP',
  },
  {
    src: '/assets/faq/faq-video.jpg',
    alt: 'Swop QR Code',
    title: 'How to SWOP connect an Android',
  },
];

const FaqSlider = () => {
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
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div>
              <Image
                width={400}
                height={200}
                src={slide.src}
                alt={slide.alt}
                className=''
              />
              <h2
                className={`text-stone-950 font-normal text-lg md:text-2xl text-left !leading-none mt-4 ${index === slidesData.length - 1 ? 'mb-16' : ''}`}
              >
                {slide.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FaqSlider;
