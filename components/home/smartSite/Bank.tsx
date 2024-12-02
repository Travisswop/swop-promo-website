import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";

const Bank = () => {
  return (
    <ScrollMotionEffect
      effect="fade-up"
      duration="2000"
      className="min-w-[330px] h-full m-auto bg-[#F5F5F5] p-4 rounded-2xl flex flex-col justify-between"
    >
      <div className="relative h-[180px] w-full p-5"></div>
      <div className="mt-auto">
        <h3 className="font-semibold text-lg text-center">Bank Yourself</h3>
      </div>
      <div>
        <h5 className="text-base text-center text-gray-400">
          Accept Payments directly your Smartsites and it deposits instantly in
          your wallet.
        </h5>
      </div>
    </ScrollMotionEffect>
  );
};

export default Bank;
