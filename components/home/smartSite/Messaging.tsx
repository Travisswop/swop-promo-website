import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";

const Messaging = () => {
  return (
    <ScrollMotionEffect
      effect="fade-up"
      duration="2000"
      className={"min-w-[330px] h-full m-auto bg-[#F5F5F5] rounded-2xl p-4"}
    >
      <div className="w-full h-full m-auto bg-[#F5F5F5] flex flex-col justify-between">
        <div className="flex justify-center ">
          <Image
            src="/assets/home/smart-site/messages.png"
            alt="messages"
            width={300}
            height={150}
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-center py-5">
            Encrypted Messaging
          </h3>
          <h4 className="text-center text-base">
            Message directly through your Swop Smartsite and send payments,
            tokens and more.
          </h4>
        </div>
      </div>
    </ScrollMotionEffect>
  );
};

export default Messaging;
