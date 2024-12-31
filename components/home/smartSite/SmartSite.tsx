import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";

const SmartSite = () => {
  return (
    <ScrollMotionEffect
      effect="zoom-in-up"
      duration="1000"
      className={
        "max-w-[420px] ms:w-full h-full m-auto row-span-2 bg-[#F5F5F5] rounded-3xl border border-gray-200  md:col-start-2 md:row-start-1 xl:row-start-1 xl:col-start-2"
      }
    >
      <div className="bg-[#F5F5F5] rounded-3xl px-4 py-[20px] w-full h-full flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg text-center leading-normal tracking-wider">
            Get Your Entire <br />
            Team A <span className="text-[#B5A1D5]">Smartsite</span>
          </h3>
        </div>
        <Image
          src="/assets/home/smart-site/smartsite.png"
          alt="SmartSite"
          width={800}
          height={800}
          className="m-auto relative w-[350px] pb-[20px] pt-[16px]"
          quality={100}
        />
        <div className="lg:w-2/3 m-auto">
          <h4 className="text-base text-center text-gray-400 ">
            Track your employees sales and marketing metrics and provide tools
            to enhance their networking abilities.
          </h4>
        </div>
      </div>
    </ScrollMotionEffect>
  );
};

export default SmartSite;
