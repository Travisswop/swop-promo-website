import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import Link from "next/link";
import SectionLayout from "../shared/SectionLayout";
import Messaging from "./smartSite/Messaging";
import SmartSite from "./smartSite/SmartSite";
import Analytics from "./smartSite/Analytics";
import Bank from "./smartSite/Bank";
import Leads from "./smartSite/Leads";

const Smartsite = () => {
  return (
    <SectionLayout>
      <div className="grid grid-cols-1 auto-rows-fr  lg:grid-cols-2 2xl:grid-cols-3 gap-2 h-full items-stretch self-stretch lg:px-36 xl:px-52">
        <Messaging />
        <SmartSite />
        <Analytics />
        <Bank />
        <Leads />
      </div>
    </SectionLayout>
  );
};

export default Smartsite;