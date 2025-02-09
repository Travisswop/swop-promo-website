import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";
import Image from "next/image";
import React from "react";

const Earn = () => {
  return (
    <ScrollMotionEffect
      effect="zoom-in-up"
      duration="800"
      delay={300}
      className={
        "max-w-[330px] sm:max-w-[390px]  lg:max-w-full h-full m-auto bg-[#ffffff] rounded-2xl p-6 flex flex-col justify-between items-center overflow-hidden"
      }
    >
      {/* <Image
        src="/assets/home/manage/earn.png"
        alt="earn"
        width={147}
        height={263}
        className="text-center"
      /> */}

      <div className="h-[150px] xl:h-[220px] w-full relative  m-auto">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{ display: "block" }}
          className="h-[300px]   xs:w-[100%] sm:w-[100%] md:w-[100%]   scale-90 -translate-y-8 lg:scale-100  -z-50 overflow-hidden absolute  top-0 left-0 right-0 bottom-0 xl:translate-y-5"
        >
          <source src="/assets/home/manage/earn2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full lg:w-4/6 m-auto bg-white">
        <div className="bg-white w-full translate-y-1 lg:translate-y-0 pt-5">
          <h3 className="font-semibold text-lg text-center pb-1 z-40">
            Interact To Earn
          </h3>
        </div>

        <h4 className="text-base text-center text-gray-400 z-40">
          Swop Socialfi brings the power back to individual by rewarding your
          digital footprint.
        </h4>
      </div>
    </ScrollMotionEffect>
  );
};

export default Earn;
