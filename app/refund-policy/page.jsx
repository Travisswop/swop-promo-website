import RefundPolicy from "@/components/legal/RefundPolicy";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";
import React from "react";

const page = () => {
  return (
    <div className="min-h-svh container mx-auto  pb-16">
      <ScrollMotionEffect effect="fade-right" duration="2000">
        <h1
          className={`text-stone-950 xs:text-3xl ms:text-4xl md:text-5xl font-bold text-center !leading-normal`}
        >
          Swop Refund Policy
        </h1>
      </ScrollMotionEffect>
      <RefundPolicy />
    </div>
  );
};

export default page;
