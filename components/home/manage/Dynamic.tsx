import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";
import Image from "next/image";
import React from "react";

const Dynamic = () => {
  return (
    <ScrollMotionEffect
      effect="zoom-in-up"
      duration="800"
      delay={300}
      className={
        "max-w-[330px] sm:max-w-[390px] h-full  lg:max-w-full md:pt-10  m-auto bg-[#ffffff] rounded-2xl p-6 flex flex-col justify-around items-center"
      }
    >
      {/* <Image
        src="/assets/home/manage/qr.png"
        alt="qr"
        width={600}
        height={600}
        className="text-center md:scale-125 relative md:translate-y-20
        md:pb-20 lg:scale-110 lg:translate-y-16 lg:pt-10 lg:pb-12 xl:scale-[1.20] 2xl:scale-150 xl:pb-16 xl:translate-y-16 w-64"
        quality={100}
      />

      <div className="w-full  m-auto mt-5 md:mt-24">
        <h3 className="font-semibold text-lg text-center pb-1">Dynamic QR</h3>

        <h4 className="text-base text-center text-gray-400">
          Update your Smartsite and your QR infrastructure updates
          automatically.
        </h4>
      </div> */}
      <div className="w-fit h-auto lg:h-[150px] lg:scale-105 xl:h-[300px]  -z-50 flex justify-center items-center">
      <Image
        src="/assets/home/manage/qr.png"
        alt="qr"
        width={600}
        height={600}
        className=" w-full h-auto"
        quality={100}
      /></div>

      <div className="">
        <h3 className="font-semibold text-lg text-center pb-1">Dynamic QR</h3>

        <h4 className="text-base text-center text-gray-400">
          Update your Smartsite and your QR infrastructure updates
          automatically.
        </h4>
      </div>
    </ScrollMotionEffect>
  );
};

export default Dynamic;
