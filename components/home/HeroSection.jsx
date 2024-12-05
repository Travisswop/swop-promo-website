"use client";
import React, { useMemo } from "react";
import SectionLayout from "../shared/SectionLayout";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const text = useMemo(() => "Build a Smart Site Today".split("  "), []);

  return (
    <SectionLayout bg={"bg-transparent"}>
      <div className="z-50 flex flex-col-reverse items-center w-full gap-6 md:flex-row">
        <motion.div
          className="flex-1"
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.h1
            className="text-[30px] md:text-[56px] font-[750] text-black text-center leading-tight tracking-normal"
            variants={variants}
          >
            {text.map((word, index) => (
              <span key={index} className="inline-block">
                {word}{" "}
              </span>
            ))}
          </motion.h1>
          <motion.p
            variants={variants}
            className="text-black text-2xl md:text-[36px] mt-2 md:mt-2 text-center"
          >
            And Get Paid to Network
          </motion.p>

          <motion.div
            variants={variants}
            className="flex justify-center mt-5 md:mt-6"
          >
            <Link
              href={"https://swop-desktop.vercel.app"}
              target="_blank"
              className="flex items-center justify-center px-6 py-2 mb-2 font-medium text-black border-2 border-black bg-none hover:bg-black hover:text-white text-md md:text-lg md:px-10 me-0 md:me-6 rounded-xl"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
        <div className="flex justify-center flex-1">
          <div className="w-[70%]">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              style={{ display: "block" }}
            >
              <source src="/assets/home/hero-bg-jvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default React.memo(HeroSection);
