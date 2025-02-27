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
  const SocialIcon = ({ icon: Icon, className: className }) => (
    <div className={className}>
      <Icon className=" w-[22px] h-[22px] " />
    </div>
  );
  const quick_links_left = [
    {
      title: "Jobs",
      slug: "/jobs",
    },
    {
      title: "Events",
      slug: "/events",
    },

    {
      title: "Blog",
      slug: "/blog",
    },
    // {
    //   title: "Hardware Collection",
    //   slug: "/hardware-collection",
    // },
  ];
  const quick_links_right = [
    {
      title: "Faq",
      slug: "/faq",
    },

    {
      title: "Legal",
      slug: "/legal",
    },
    {
      title: "Contact Us",
      slug: "/contact-us",
    },
  ];

  return (
    <footer className="">
      <div className=" bg-[#f6f6f6] py-10 min-h-56 flex items-center">
        <div className=" container flex flex-col md:flex-row gap-5 lg:gap-16 justify-center  md:justify-between ">
          <div className="flex flex-col justify-center md:justify-start items-center md:items-start">
            <Link
              href="/"
              className="flex items-center justify-start cursor-pointer"
            >
              <Image
                width={500}
                height={500}
                src="/assets/site-logo/swop-black-logo.png"
                alt="Swop"
                className="object-cover w-[90px] md:w-[100px] mb-2"
                quality={100}
                priority
              />
            </Link>
            <p className="text-gray-500 font-normal text-sm md:text-base  md:px-0 !leading-5 mt-2 w-full max-w-[500px] text-justify md:text-left">
              Monetize your connections with Swop. Use your network to earn
              rewards, generate leads, and foster meaningful relationships, all
              with ease.
            </p>
          </div>
          <div className="flex flex-1 justify-center items-center  gap-10 lg:gap-24  h-full">
            <ul className=" h-full text-black font-normal list-none  flex  flex-col gap-5   items-start  justify-start">
              <li className="font-semibold underline">Company</li>
              {quick_links_left.map((el, index) => (
                <li
                  className="  flex items-center text-sm xl:text-[16px]"
                  key={index}
                >
                  <Link href={el.slug} className="hover:underline">
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className=" h-full text-black font-normal list-none ml-0 flex flex-col gap-5  items-start  justify-start lg:mr-16">
              <li className="font-semibold underline">Resources</li>
              {quick_links_right.map((el, index) => (
                <li
                  className="  flex items-center text-sm xl:text-[16px]"
                  key={index}
                >
                  <Link href={el.slug} className="hover:underline">
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col justify-center items-center md:px-2 gap-2">
              <p className="font-semibold underline  ">Download</p>
              <div>
                <Image
                  width={76}
                  height={58}
                  src="/assets/site-logo/qr-code-1.png"
                  alt="Swop QR Code"
                  className=" md:mx-auto"
                  quality={100}
                  priority
                />
              </div>
              <p className="text-black font-normal text-[14px] px-2  text-center w-28 !leading-5 ">
                Scan To Get The App
              </p>{" "}
            </div>{" "}
          </div>
        </div>
      </div>
      {/* <hr className="my-6 border-gray-600 sm:mx-auto dark:border-gray-700 lg:my-4" /> */}
      <div className="bg-[#3d4450] min-h-16 py-5 md:py-0 flex items-center text-white">
        <div className=" container flex flex-col md:flex-row items-center justify-center md:justify-between  gap-3">
          <p className=" font-normal text-md md:text-lg text-center  ">
            ©2024 Swop ®All Rights Reserved.
          </p>
          <div className="flex items-end gap-x-3 text-white">
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
              <SocialIcon icon={SlSocialFacebook} className={" text-white "} />
            </Link>
            <Link href="#" target={"_blank"}>
              <SocialIcon icon={SlSocialLinkedin} className={" text-white "} />
            </Link>
            {/* <SocialIcon icon={SlSocialLinkedin} /> */}
            <Link href="#" target={"_blank"}>
              <SocialIcon icon={IoLogoInstagram} className={"text-white "} />
            </Link>
          </div>
        </div>
      </div>{" "}
    </footer>
  );
};

export default React.memo(Footer);
