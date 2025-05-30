"use client";

import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";
import ProductCards from "./ProductCards";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import Image from "next/image";
import { cn } from "@nextui-org/react";
import { delay, motion, useInView } from "framer-motion";
import HardwareCollections from "./collections/HardwareCollections";
import CollectionsComingSoon from "./CollectionsComingSoon";
import { usePathname } from "next/navigation";

const productInfo = [
  {
    size: "20mm",
    img: "/assets/hardware/products/businessCards.png",
    title: "Business Cards",
    slug: "business-cards",
    decs: `Upgrade from traditional paper cards with Swop’s reusable digital cards that collect data for your company`,
  },
  {
    size: "30mm",
    img: "/assets/hardware/products/attachments.png",
    title: "Phone Attachments",
    slug: "phone-attachments",
    decs: `Tag¹ facilitates an instant and reliable
connection. Activate ap.`,
  },

  {
    size: "30mm",
    img: "/assets/hardware/products/restaurants.png",
    title: "Hospitality",
    slug: "hospitality",
    decs: `Tag¹ facilitates an instant and reliablemmersive brand
experiences with just a tap.`,
  },
  {
    size: "20mm",
    img: "/assets/hardware/products/customize3.png",
    title: "Customize",
    slug: "customize",
    decs: `Upgrade from traditional paper cards with Swop’s reusable digital cards that collect data for your company`,
  },
  {
    size: "20mm",
    img: "/assets/hardware/products/stickers.svg",
    title: "Stickers",
    slug: "stickers",
    decs: `Tag¹ facilitates an instant and reliable
connection. Activate ap.`,
  },
  {
    size: "20mm",
    img: "/assets/hardware/products/embeddables.png",
    title: "Embeddables",
    slug: "embeddables",
    decs: `Tag¹ facilitates an instant and reliablemmersive brand
experiences with just a tap.`,
  },
];






const DevicesInteraction = () => {
  const path=usePathname()
  const variants = {
    hidden: { opacity: 0, y: 30, blur: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      blur: 0,
      transition: { duration: 0.8, delay: i * 0.03 },
    }),
  };

  const text = "Interaction".split("");
  return (
    <div className="relative container">
      <div
      // effect="fade-up"
      // duration="2000"
      >
        <h2
          className={`text-stone-950 font-bold text-3xl md:text-6xl text-center !leading-none py-5`}
        >
          Devices for Any{" "}
          <span className="block text-[#b3b3b3]">
            {text.map((word, index) => (
              <ScrollMotionEffect
                effect="fade-up"
                duration={(500 + index * 50).toString()}
                delay={500}
                key={index}
                className={cn("font-extrabold inline-block")}
              >
                <motion.div
                  key={index}
                  initial={{ filter: "blur(50px)" }}
                  viewport={{ once: true }}
                  // whileInView={{ filter: "blur(10px)" }}
                  animate={{
                    filter: "blur(0px)",
                    transition: { duration: 1 },
                  }}
                  className={cn(
                    " text-3xl md:text-6xl text-center  text-[#B3B3B3]"
                  )}
                >
                  {word}
                </motion.div>
              </ScrollMotionEffect>
            ))}
          </span>
        </h2>
        {/* <ScrollMotionEffect
          effect="zoom-in"
          duration="2000"
          delay={"500"}
          className="absolute top-[0%] left-[2%]  md:top-0 md:left-[15%]  lg:left-[25%] animate-bounce -z-10"
        >
          <Image
            src="/assets/star.svg"
            alt="star"
            width={50}
            height={50}
            className=""
          />
        </ScrollMotionEffect>
        <ScrollMotionEffect
          effect="zoom-in"
          duration="2000"
          delay={"500"}
          className="absolute top-[8%] left-[7%] md:top-[15%] md:left-[5%] lg:left-[12%]  xl:left-[17%] animate-bounce"
        >
          <Image
            src="/assets/star.svg"
            alt="star"
            width={40}
            height={40}
            className=""
          />
        </ScrollMotionEffect>
        <ScrollMotionEffect
          effect="zoom-in"
          duration="2000"
          delay={"1000"}
          className="absolute top-[-1%] right-[0%] md:top-0 md:right-[20%]  animate-bounce"
        >
          <Image
            src="/assets/star.svg"
            alt="star"
            width={30}
            height={30}
            className=""
          />
        </ScrollMotionEffect>
        <ScrollMotionEffect
          effect="zoom-in"
          duration="2000"
          delay={"500"}
          className="absolute top-[3%] right-[20%] md:top-[6%] md:right-[28%] lg:top-[10%] lg:right-[30%] xl:right-[38%] animate-bounce"
        >
          <Image
            src="/assets/star.svg"
            alt="star"
            width={30}
            height={30}
            className=""
          />
        </ScrollMotionEffect>
        <ScrollMotionEffect
          effect="zoom-in"
          duration="2000"
          delay={"1000"}
          className="absolute top-[10%] right-[10%] md:top-[15%] xl:top-[20%]  md:right-[15%] animate-bounce"
        >
          <Image
            src="/assets/star.svg"
            alt="star"
            width={45}
            height={45}
            className=""
          />
        </ScrollMotionEffect> */}
      </div>

      <div
      //  effect="fade-up"
      //  duration="2000"
      >
        <p className="text-lg text-stone-950 text-center mt-4 max-w-[600px] mx-auto">
          Program our devices in the app. Our devices can be tapped on any
          phone, whether they have the swop app or not.
        </p>
      </div>

      <ScrollMotionEffect effect="zoom-in-up" duration="500">
        <div className="flex justify-center mt-8 md:mt-5 mx-auto">
          <Link
            href={"/hardware"}
            className="text-black bg-none hover:bg-black hover:text-white font-medium text-md md:text-lg px-0 md:px-8 py-2 flex items-center justify-center rounded-full w-48 bg-[#F5F5F5] mb-6"
          >
            Swop Store
          </Link>
        </div>
      </ScrollMotionEffect>

      {path==="/"&&<div className="   m-auto">
        {/* <ProductCards productList={productInfo} /> */}
        <CollectionsComingSoon />
      </div>}

      {/* <div className='grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-10 md:gap-14 md:mt-10'>
        {productInfo?.map((el, index) => (
          <div key={index} className='bg-[#F5F5F5] p-5 rounded-xl'>
            <p className='text-lg text-stone-950 text-center mt-4 max-w-[600px] mx-auto'>
              {el.size}
            </p>
            <h2 className='mt-3 text-2xl text-stone-950 text-center font-bold'>
              {el.title}
            </h2>
            <div>
              <Image
                width={400}
                height={50}
                src={el.img}
                alt='Link icon'
                className='mx-auto'
              />
            </div>

            <p className='text-lg text-stone-950 text-center mt-1'>{el.decs}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default DevicesInteraction;
