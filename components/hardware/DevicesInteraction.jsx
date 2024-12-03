import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";
import ProductCards from "./ProductCards";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import Image from "next/image";

const productInfo = [
  {
    size: "20mm",
    img: "/assets/hardware/products/business-cards.png",
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
    img: "/assets/hardware/products/customize2.png",
    title: "Customize",
    slug: "customize",
    decs: `Upgrade from traditional paper cards with Swop’s reusable digital cards that collect data for your company`,
  },
  {
    size: "20mm",
    img: "/assets/hardware/products/stickers.png",
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
  return (
    <SectionLayout className="relative">
      <ScrollMotionEffect effect="fade-up" duration="2000">
        <h2
          className={`text-stone-950 font-normal text-5xl md:text-4xl text-center !leading-none py-5`}
        >
          Devices for Any <span className="block">Interaction</span>
        </h2>
        <div className="2xl:block hidden">
          <Image
            src="/assets/star.svg"
            alt="star"
            width={50}
            height={50}
            className="absolute top-0 left-96 animate-bounce"
          />
        </div>
        <div className="2xl:block hidden">
          <Image
            src="/assets/star.svg"
            alt="star"
            width={40}
            height={40}
            className="absolute top-40 left-72 animate-bounce"
          />
        </div>
        <div className="2xl:block hidden">
          <Image
            src="/assets/star.svg"
            alt="star"
            width={30}
            height={30}
            className="absolute top-0 right-72 animate-bounce"
          />
        </div>
        <div className="2xl:block hidden">
          <Image
            src="/assets/star.svg"
            alt="star"
            width={30}
            height={30}
            className="absolute top-20 right-[600px] animate-bounce"
          />
        </div>
        <div className="2xl:block hidden">
          <Image
            src="/assets/star.svg"
            alt="star"
            width={45}
            height={45}
            className="absolute top-44 right-[400px] animate-bounce"
          />
        </div>
      </ScrollMotionEffect>

      <ScrollMotionEffect effect="fade-up" duration="2000">
        <p className="text-lg text-stone-950 text-center mt-4 max-w-[600px] mx-auto">
          Program the devices with the Swop App. Will tap on other devices with
          or without the swop app downloaded.
        </p>
      </ScrollMotionEffect>

      <ScrollMotionEffect effect="fade-up" duration="2000">
        <div className="flex justify-center mt-8 md:mt-5 mx-auto">
          <Link
            href={""}
            className="text-black bg-none hover:bg-black hover:text-white font-medium text-md md:text-lg px-0 md:px-8 py-2 flex items-center justify-center rounded-full w-48 bg-[#F5F5F5] mb-6"
          >
            Swop Store
          </Link>
        </div>
      </ScrollMotionEffect>

      <div className="mt-8 2xl:px-20">
        <ProductCards productList={productInfo} />
      </div>

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
    </SectionLayout>
  );
};

export default DevicesInteraction;
