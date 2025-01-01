import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

import { SITECONFIG } from "@/config/site";
import SectionLayout from "./shared/SectionLayout";

import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const quickLinks = useMemo(() => {
    return SITECONFIG?.footer?.quick_links || [];
  }, []);

  // const SocialIcon = ({ icon: Icon }) => (
  //   <div className="bg-black rounded-full p-2">
  //     <Icon className="text-white w-5 h-5" />
  //   </div>
  // );

  return (
    <footer className="bg-[#ffffff] container">
      <div className="">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-6 justify-center md:justify-between items-center">
          <div className="flex justify-center md:justify-start">
            <Link
              href="/"
              className="flex items-center justify-start cursor-pointer"
            >
              <Image
                width={500}
                height={500}
                src="/assets/site-logo/swop-black-logo.png"
                alt="Swop"
                className="object-cover w-[90px] md:w-[100px]"
                quality={100}
                priority
              />
            </Link>
          </div>
          <div className="flex flex-1 justify-center items-center w-full">
            <ul className="w-full text-black font-normal list-none ml-0 flex flex-row flex-wrap items-center justify-center text-center divide-x divide-gray-600">
              {quickLinks.map((el, index) => (
                <li
                  className=" px-2 xl:px-4 2xl:px-6 flex items-center text-sm xl:text-[16px]"
                  key={index}
                >
                  <Link href={el.slug} className="hover:underline">
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center md:justify-center items-center px-2">
            <div>
              <Image
                width={100}
                height={80}
                src="/assets/site-logo/qr-code-1.png"
                alt="Swop QR Code"
                className=" mx-auto"
                quality={100}
                priority
              />
              {/* <p className="text-black font-normal text-sm md:text-base text-center w-28 !leading-5 mt-2">
                Scan To Get The App
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-600 sm:mx-auto dark:border-gray-700 lg:my-4" />
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-4">
        <p className="text-black font-normal text-md md:text-lg text-center  ">
          ©2024 Swop ®All Rights Reserved.
        </p>
        <div className="flex items-center gap-x-2">
          <Image
            src="/assets/home/swopple-icon/facebook-icon.png"
            alt=""
            width={24}
            height={24}
          ></Image>
          <Image
            src="/assets/home/swopple-icon/instagram-icon.png"
            alt=""
            width={24}
            height={24}
          ></Image>
          <Image
            src="/assets/home/swopple-icon/linkedin-icon.png"
            alt=""
            width={24}
            height={24}
          ></Image>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
