import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";

const SmartSite = () => {
  return (
    <ScrollMotionEffect
      effect="fade-up"
      duration="2000"
      className={
        "w-[330px] h-full m-auto row-span-2 bg-[#F5F5F5] rounded-xl lg:col-start-2 lg:row-start-1 2xl:row-start-1 2xl:col-start-2"
      }
    >
      <div className="bg-[#F5F5F5] rounded-2xl p-4 w-full h-full">
        <div>
          <h3 className="font-semibold text-lg text-center p-5">
            Get Your Entire Team A{" "}
            <span className="text-[#B396FF]"> Smartsite </span>
          </h3>
        </div>
        <div className="relative h-[400px] w-full"></div>
        <div>
          <h4 className="text-base text-center text-gray-400">
            Use your smartsite as your companies townsquare and share it with
            NFC, QR or Apple Wallet.
          </h4>
        </div>
      </div>
    </ScrollMotionEffect>
  );
};

export default SmartSite;