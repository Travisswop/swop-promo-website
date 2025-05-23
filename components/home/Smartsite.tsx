import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import Link from "next/link";
import SectionLayout from "../shared/SectionLayout";
import Messaging from "./smartSite/Messaging";
import SmartSite from "./smartSite/SmartSite";
import Analytics from "./smartSite/Analytics";
import Self from "./smartSite/Self";
import Social from "./smartSite/Social";

const Smartsite = () => {
  return (
    <div className="bg-[#f5f5f5] py-16">
      <div className="container ">
        <div className="grid grid-cols-1 auto-rows-min  md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-5 h-full items-stretch self-stretch ">
          <Messaging />
          <SmartSite />
          <Analytics />
          <Self />
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Smartsite;
