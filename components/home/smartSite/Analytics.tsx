import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";

const Analytics = () => {
  return (
    <ScrollMotionEffect
      effect="fade-up"
      duration="2000"
      className={
        "min-w-[330px] h-full m-auto bg-[#F5F5F5] rounded-2xl pb-4 flex flex-col justify-between lg:col-start-2 lg:row-start-3 2xl:row-start-1 2xl:col-start-3 "
      }
    >
      <div className=" h-[185px] w-full">
        <Image
          src="/assets/home/smart-site/analytics.svg"
          alt="bank"
          width={400}
          height={185}
          content="cover"
          className="m-auto  rounded-2xl"
        />
      </div>
      <div className="m-auto  z-10">
        <h3 className="m-auto font-semibold text-lg text-center">Analytics</h3>
      </div>

      <div className="">
        <h4 className="text-base text-center text-gray-400">
          Track your employees networking and collect data for your CRM while
          providing insights to increase ROI
        </h4>
      </div>
    </ScrollMotionEffect>
  );
};

export default Analytics;
