import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";

const Bank = () => {
  return (
    <ScrollMotionEffect
      effect="fade-up"
      duration="700"
      className="max-w-[420px] md:w-full h-full m-auto bg-white rounded-3xl border border-gray-200  p-4 flex flex-col justify-between"
    >
      <div className="h-[185px] ">
        <Image
          src="/assets/home/smart-site/bank.png"
          alt="bank"
          width={1000}
          height={1000}
          quality={100}
          className="m-auto relative top-0 left-0 right-0 bottom-0 "
        />
      </div>
      <div className=" lg:w-2/3 m-auto  mt-auto pt-[20px] ">
        <div className="">
          <h3 className="m-auto font-semibold text-lg text-center  mb-[6px]">
            Bank Yourself
          </h3>
        </div>
        <div className="">
          <h4 className="text-center text-base text-gray-400">
            Get your own virtual account that lets you send and receive payments
            globally.
          </h4>
        </div>
      </div>
    </ScrollMotionEffect>
  );
};

export default Bank;
