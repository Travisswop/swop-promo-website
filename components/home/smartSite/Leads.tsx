import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";

const Leads = () => {
  return (
    <ScrollMotionEffect
      effect="fade-up"
      duration="2000"
      className="w-[330px] m-auto bg-[#F5F5F5] rounded-2xl p-4"
    >
      <div className="relative h-[185px] w-full"></div>
      <div>
        <h3 className="font-semibold text-lg text-center">Leads</h3>
      </div>
      <div>
        <h5 className="text-base text-center text-gray-400">
          Leads from your Smartsites flow right to the dashboard where you earn
          $Swop for verified Leads
        </h5>
      </div>
    </ScrollMotionEffect>
  );
};

export default Leads;
