import SectionLayout from "@/components/shared/SectionLayout";
import { cn } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Poppins } from "next/font/google";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const CategoriesComingSoon = ({ title, titleImage }) => {
  return (
    <div className=" mx-auto gradient-circle-top flex flex-col py-10 justify-center items-center px-2">
      <div className={cn("h-full w-full  z-10", poppins.className)}>
        <section className=" grid grid-cols-1 gap-10 py-0  rounded-2xl ">
          <ScrollMotionEffect
            effect="fade-up"
            duration="2000"
            className={cn(
              "w-full h-[550px] lg:h-[650px] flex flex-col gap-5  justify-start  items-center relative rounded-3xl py-14 bg-[url('/assets/hardware/collection/blackBg.png')] bg-cover bg-no-repeat object-cover bg-center",
              title === "Business Card" ? "lg:pb-0" : ""
            )}
          >
            <div className="text-center text-white text-xl md:text-2xl flex flex-col justify-center items-center   font-light relative ">
              <div className="transition-all duration-300 ease-in-out cursor-pointer scale-125  mb-5">
                <Image
                  src="/assets/home/coming-soon/saturn-1.png"
                  alt="Swop Logo"
                  width={300}
                  height={300}
                  quality={100}
                  priority
                  className="  animate-slow-bounce w-[80px] "
                />
              </div>

              <div className="flex justify-center items-center gap-3  z-50">
                <div>
                  <Image
                    src="/assets/home/coming-soon/swop.png"
                    alt="Swop Logo"
                    width={180}
                    height={35}
                    quality={100}
                    priority
                    className=" w-[100px] lg:180px"
                  />
                </div>
                {title === "Business Card" ? (
                  <h2 className="block text-2xl md:text-3xl lg:text-5xl font-normal uppercase">
                    {" "}
                    {title.split(" ")[0]}
                    <span className="font-light"> {title.split(" ")[1]}</span>
                  </h2>
                ) : title === "Phone Attachments" ? (
                  <h2 className="block text-2xl md:text-3xl lg:text-5xl font-normal uppercase">
                    {title.split(" ")[0]}
                    <span className="font-light"> {title.split(" ")[1]}</span>
                  </h2>
                ) : (
                  <h2 className="block text-2xl md:text-3xl lg:text-5xl font-normal uppercase">
                    <span className="">{title}</span>
                  </h2>
                )}
              </div>

              <p className="text-base md:text-lg text-gray-400 pt-4 text-center">
                Coming Soon
              </p>
            </div>
            <ScrollMotionEffect
              effect="zoom-in-up"
              duration="800"
              className="h-full overflow-hidden"
            >
              <Image
                src={titleImage}
                alt={title}
                width={1200}
                height={1000}
                quality={100}
                className={cn(
                  "  h-full object-contain ",
                  title === "Business Card"
                    ? "translate-y-0 lg:scale-110 lg:translate-y-20"
                    : ""
                )}
              />
            </ScrollMotionEffect>
          </ScrollMotionEffect>
        </section>
      </div>
    </div>
  );
};

export default CategoriesComingSoon;
