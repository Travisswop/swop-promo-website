import TermsAndConditions from "@/components/legal/TermsAndConditions";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";
import React from "react";

const page = () => {
  return (
    <div className="min-h-svh container mx-auto  pb-16">
      <ScrollMotionEffect effect="fade-right" duration="2000">
        <h1
          className={`text-stone-950 xs:text-3xl ms:text-4xl md:text-5xl font-bold text-center !leading-normal`}
        >
          Swop Terms of Service
        </h1>
      </ScrollMotionEffect>
      <TermsAndConditions />
    </div>
  );
};

export default page;
