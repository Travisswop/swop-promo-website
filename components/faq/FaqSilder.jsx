"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css"; // Ensure this contains minimal, necessary styles

// Import Swiper modules
import { Navigation, Pagination } from "swiper/modules";

import Image from "next/image";

const slidesData = [
  {
    src: "https://www.youtube.com/embed/iiBDBhY-TMg",
    alt: "Microsite Tutorial",
    title: "Microsite Tutorial",
  },
  {
    src: "https://www.youtube.com/embed/ycGsDI_W4Rg",
    alt: "How to use bypass",
    title: "How to use bypass",
  },
  {
    src: "https://www.youtube.com/embed/Vb2GHXDQuYo",
    alt: "How to create custom QR code",
    title: "How to create custom QR code",
  },
  {
    src: "https://www.youtube.com/embed/EHS7L8vljLo",
    alt: "Swop NFC tutorial",
    title: "Swop NFC tutorial",
  },
  // {
  //   src: "/assets/faq/faq-video.jpg",
  //   alt: "Swop QR Code",
  //   title: "How to SWOP connect an Android",
  // },
];

const FaqSlider = () => {
  return (
    <Swiper
      slidesPerView={1} // Default for mobile
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
      className="mySwiper"
    >
      {slidesData?.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center w-[1700px] h-auto">
            {/* <Image */}
            {/*   src={slide.src} */}
            {/*   alt={slide.alt} */}
            {/*   width={800} */}
            {/*   height={200} */}
            {/*   layout="responsive" */}
            {/*   objectFit="cover" */}
            {/*   quality={100} */}
            {/* /> */}
            <iframe
              src={slide.src}
              allowFullScreen
              width={260}
              height={200}
              loading="lazy"
              className={"rounded-xl"}
            />
            <h2 className="text-stone-950 font-normal text-lg md:text-2xl text-center mt-4 mb-12">
              {slide.title}
            </h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FaqSlider;
