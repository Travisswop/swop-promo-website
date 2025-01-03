import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";

const Messaging = () => {
  return (
    <ScrollMotionEffect
      delay={"200"}
      effect="fade-up"
      duration="500"
      className={
        "max-w-[420px] md:w-full h-full m-auto bg-white rounded-3xl border border-gray-200 p-4 flex flex-col justify-between"
      }
    >
      <div className="relative h-[185px] w-full m-auto mt-2 mb-1">
        <Image
          src="/assets/home/smart-site/encryptedMessaging.png"
          alt="bank"
          width={500}
          height={500}
          quality={100}
          className="m-auto absolute top-10 lg:top-16 2xl:top-16 left-0 right-0 bottom-0  scale-110"
        />

        {/* <Image
          src="/assets/home/smart-site/messagesBack.svg"
          alt="bank"
          width={300}
          height={150}
          quality={100}
          className="m-auto absolute top-0 left-0 right-0 bottom-0  scale-105   w-full h-full z-10"
        />

        <ScrollMotionEffect
          effect="zoom-in"
          duration="2000"
          delay={"300"}
          className="m-auto z-50 absolute top-[0%] left-[40%] lg:left-[45%] w-[45%] lg:w-[40%] xl:w-[50%]  shadow-xl rounded-lg"
        >
          <Image
            src="/assets/home/smart-site/messageTravis.svg"
            alt="bank"
            width={300}
            height={150}
            className=""
          />
        </ScrollMotionEffect>
        <ScrollMotionEffect
          effect="zoom-in"
          duration="2000"
          delay={"500"}
          className="m-auto z-50 absolute bottom-[50%] left-[1%] lg:left-[15%] xl:left-[5%]  w-[35%] lg:w-[35%] xl:w-[45%] shadow-xl rounded-lg"
        >
          <Image
            src="/assets/home/smart-site/messageSalman.svg"
            alt="bank"
            width={300}
            height={150}
            className=""
          />
        </ScrollMotionEffect>
        <ScrollMotionEffect
          effect="zoom-in"
          duration="2000"
          delay={"800"}
          className="m-auto z-50 absolute bottom-[18%] right-[0%] lg:right-[10%] xl:right-[0%] w-[35%] lg:w-[35%] xl:w-[45%] shadow-xl rounded-lg"
        >
          <Image
            src="/assets/home/smart-site/messageArjo.svg"
            alt="bank"
            width={300}
            height={150}
            className=""
          />
        </ScrollMotionEffect> */}
      </div>
      <div className="  lg:w-2/3 m-auto  mt-auto pt-[20px] ">
        <h3 className="m-auto font-semibold text-lg text-center  mb-[6px]">
          Encrypted Messaging
        </h3>
        <h4 className="text-center text-base text-gray-400">
          Receive Encrypted Messaging through your Swop Smartsite.
        </h4>
      </div>
    </ScrollMotionEffect>
  );
};

export default Messaging;
