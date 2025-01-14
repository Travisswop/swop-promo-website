import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuFacebook } from "react-icons/lu";
import { SITECONFIG } from "@/config/site";
import SectionLayout from "./shared/SectionLayout";
import { FiFacebook } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io5";
import { SlSocialFacebook } from "react-icons/sl";
const Footer = () => {
  const quickLinks = useMemo(() => {
    return SITECONFIG?.footer?.quick_links || [];
  }, []);

  const SocialIcon = ({ icon: Icon, className: className }) => (
    <div className={className}>
      <Icon className="text-black w-[22px] h-[22px] " />
    </div>
  );

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
        <div className="flex items-end gap-x-3">
          {/* <Image */}
          {/*   src="/assets/home/swopple-icon/facebook-icon.png" */}
          {/*   alt="" */}
          {/*   width={24} */}
          {/*   height={24} */}
          {/* ></Image> */}
          {/* <Image */}
          {/*   src="/assets/home/swopple-icon/instagram-icon.png" */}
          {/*   alt="" */}
          {/*   width={24} */}
          {/*   height={24} */}
          {/* ></Image> */}
          <Link href="#" target={"_blank"}>
            <SocialIcon
              icon={SlSocialFacebook}
              className={" scale-90 translate-x-[2px]"}
            />
          </Link>
          <Link href="#" target={"_blank"}>
            <Image
              src="/assets/home/swopple-icon/linkedin-icon.png"
              alt=""
              width={24}
              height={24}
            ></Image>
          </Link>
          {/* <SocialIcon icon={SlSocialLinkedin} /> */}
          <Link href="#" target={"_blank"}>
            <SocialIcon
              icon={IoLogoInstagram}
              className={" translate-y-[1px]"}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
