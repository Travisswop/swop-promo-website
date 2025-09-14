"use client";

import { cn } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

// ---- OS detection (JS only) ----
function detectMobileOS() {
  if (typeof navigator === "undefined") {
    return { os: "other", isMobile: false };
  }

  const ua = navigator.userAgent || "";
  const uaDataPlatform =
    navigator.userAgentData?.platform?.toLowerCase?.() || "";

  let os = "other";
  let isMobile = /Mobile|Android|iP(ad|hone|od)/i.test(ua);

  // Android checks
  if (/Android/i.test(ua) || uaDataPlatform.includes("android")) {
    os = "android";
    isMobile = true;
  }

  // iOS & iPadOS checks
  if (
    /iPhone|iPad|iPod/i.test(ua) ||
    /(ios|iphone|ipad)/i.test(uaDataPlatform)
  ) {
    os = "ios";
    isMobile = true;
  }

  // Newer iPads can appear as "Macintosh" but are touch devices
  if (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1) {
    os = "ios";
    isMobile = true;
  }

  return { os, isMobile };
}

const HeroSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 30, blur: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      blur: 0,
      transition: { duration: 0.5, delay: i * 0.04 },
    }),
  };

  const text1 = "Get Paid to Network".split("");

  // OS detection state
  const [os, setOs] = useState("other");
  const [isMobile, setIsMobile] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const { os, isMobile } = detectMobileOS();
    setOs(os);
    setIsMobile(isMobile);
    setHydrated(true);
  }, []);

  // Show both on desktop. On mobile, only the correct store.
  const showIOS = !isMobile || os === "ios";
  const showAndroid = !isMobile || os === "android";

  return (
    <div className="container z-50 flex flex-col items-center justify-center w-full gap-6 md:flex-row 2xl:pt-8 ">
      <div>
        <div className="flex justify-center xs:pt-4 ms:pt-6 lg:pt-16">
          <ScrollMotionEffect effect="zoom-in" duration="2000">
            <Image
              src="/assets/home/heroImage.png"
              alt="heroImage"
              width={500}
              height={500}
              quality={100}
              className="w-[500px] xs:h-[215px] ms:h-[254px] sm:h-[300px] md:h-[354px] xl:h-[371px]"
            />
          </ScrollMotionEffect>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          className={cn(
            "xs:text-3xl ms:text-4xl md:text-5xl lg:text-[80px] font-bold text-[#333131] text-center leading-tight tracking-normal pt-5 xl:pt-8 relative"
          )}
        >
          {text1.map((ch, index) => (
            <motion.div
              variants={variants}
              custom={index}
              key={`${ch}-${index}`}
              className="text-[#333131] inline-block"
            >
              {ch}
            </motion.div>
          ))}
        </motion.div>

        <h4 className="text-gray-400 text-center xs:text-sm ms:text-xl py-4 lg:py-6 max-w-[780px]">
          Monetize your connections with Swop. Use your network to earn rewards,
          generate leads, and foster meaningful relationships, all with ease.
        </h4>

        {/* Store badges: both on desktop, only one on mobile (after hydrate to avoid mismatch) */}
        <div
          className={cn(
            "flex justify-center gap-4 transition-opacity",
            hydrated ? "opacity-100" : "opacity-0"
          )}
        >
          {showIOS && (
            <Link
              href="https://apps.apple.com/us/app/swop-connecting-the-world/id1593201322"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the App Store"
            >
              <ScrollMotionEffect effect="zoom-in-up" duration="800">
                <Image
                  src="/assets/home/app-store.png"
                  alt="Download on the App Store"
                  width={520}
                  height={520}
                  className="w-[120px] h-auto"
                />
              </ScrollMotionEffect>
            </Link>
          )}

          {showAndroid && (
            <Link
              href="https://play.google.com/store/apps/details?id=com.travisheron.swopapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
            >
              <ScrollMotionEffect effect="zoom-in-up" duration="800">
                <Image
                  src="/assets/home/google-play.png"
                  alt="Get it on Google Play"
                  width={520}
                  height={520}
                  className="w-[120px] h-auto"
                />
              </ScrollMotionEffect>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeroSection);
