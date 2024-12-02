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
        "min-w-[330px] h-full m-auto bg-[#F5F5F5] rounded-2xl p-4 row-start-2 lg:col-start-2 lg:row-start-3 2xl:row-start-1 2xl:col-start-3 flex flex-col justify-between"
      }
    >
      <div className="relative h-[173px] w-full"></div>
      <div>
        <h3 className="font-semibold text-lg text-center">Analytics</h3>
      </div>
      <div>
        <h4 className="text-base text-center text-gray-400">
          Track your employees networking and collect data for your CRM while
          providing insights to increase ROI
        </h4>
      </div>
    </ScrollMotionEffect>
  );
};

export default Analytics;
