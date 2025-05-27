import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { RiFacebookCircleLine } from "react-icons/ri";

const Footer = () => {
  const SocialIcon = ({ icon: Icon, className: className }) => (
    <div className={className}>
      <Icon className=" w-[22px] h-[22px] " />
    </div>
  );

  const product = [
    {
      title: "Download",
      slug: "https://apps.apple.com/us/app/swop-connecting-the-world/id1593201322",
    },
    {
      title: "Support",
      slug: "/support",
    },
    // {
    //   title: "Security",
    //   slug: "#",
    // },
  ];

  const resources = [
    {
      title: "About",
      slug: "/company",
    },
    {
      title: "Explore",
      slug: "http://support.swop.id",
    },
    {
      title: "Whitepaper",
      slug: "https://swopple.gitbook.io/swopple",
    },
    // {
    //   title: "Learn",
    //   slug: "#",
    // },
    {
      title: "Blog",
      slug: "http://support.swop.id",
    },
  ];

  const company = [
    {
      title: "Terms",
      slug: "/terms",
    },
    {
      title: "Privacy",
      slug: "/privacy",
    },

    {
      title: "Careers",
      slug: "/careers",
    },
    {
      title: "Products",
      slug: "http://support.swop.id",
    },
    {
      title: "Refund Policy",
      slug: "/refund-policy",
    },
  ];

  return (
    <footer className=" px-6 md:px-none">
      <div className="py-10 min-h-56 flex items-center">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 justify-center  md:justify-between ">
          <ul className="flex-1 h-full text-black font-normal list-none  flex  flex-col gap-5 items-start  justify-start">
            <li className="font-semibold  text-gray-400">Product</li>

            <li className="  flex items-center text-sm xl:text-[16px]">
              <Link
                href={
                  "https://apps.apple.com/us/app/swop-connecting-the-world/id1593201322"
                }
                className="hover:underline"
                target="_blank"
              >
                Download
              </Link>
            </li>
            <li className="  flex items-center text-sm xl:text-[16px]">
              <Link href={"/support"} className="hover:underline">
                Support
              </Link>
            </li>
          </ul>

          <ul className="flex-1 h-full text-black font-normal list-none flex flex-col gap-5  items-start  justify-start ">
            <li className="font-semibold  text-gray-400">Resources</li>

            <li className="  flex items-center text-sm xl:text-[16px]">
              <Link href={"/company"} className="hover:underline">
                About
              </Link>
            </li>
            <li className="  flex items-center text-sm xl:text-[16px]">
              <Link
                href={"http://support.swop.id"}
                className="hover:underline"
                target="_blank"
              >
                Explore
              </Link>
            </li>
            <li className="  flex items-center text-sm xl:text-[16px]">
              <Link
                href={"https://swopple.gitbook.io/swopple"}
                className="hover:underline"
                target="_blank"
              >
                Whitepaper
              </Link>
            </li>
            <li className="  flex items-center text-sm xl:text-[16px]">
              <Link
                href={"http://support.swop.id"}
                className="hover:underline"
                target="_blank"
              >
                Blog
              </Link>
            </li>
          </ul>

          <ul className="flex-1 h-full text-black font-normal list-none flex flex-col gap-5  items-start  justify-start ">
            <li className="font-semibold  text-gray-400">Company</li>

            <li className="  flex items-center text-sm xl:text-[16px]">
              <Link href={"/terms"} className="hover:underline">
                Terms
              </Link>
            </li>

            <li className="  flex items-center text-sm xl:text-[16px]">
              <Link href={"/privacy"} className="hover:underline">
                Privacy
              </Link>
            </li>

            <li className="  flex items-center text-sm xl:text-[16px]">
              <Link href={"/careers"} className="hover:underline">
                Careers
              </Link>
            </li>

            <li className="  flex items-center text-sm xl:text-[16px]">
              <Link
                href={"http://support.swop.id"}
                className="hover:underline"
                target="_blank"
              >
                Products
              </Link>
            </li>

            <li className=" flex items-center text-sm xl:text-[16px]">
              <Link href={"/refund-policy"} className="hover:underline">
                Refund Policy
              </Link>
            </li>
          </ul>

          <ul className="flex-1 h-full text-black font-normal list-none flex flex-col gap-5  items-start  justify-start ">
            <li className="font-semibold  text-gray-400">Social</li>

            <li className="  flex items-center text-sm xl:text-[16px]">
              <Link
                href={"https://x.com/swoplabs"}
                target="_blank"
                className="hover:underline flex items-center space-x-3"
              >
                <BsTwitterX className="size-4" /> <span>X (FKA Twitter)</span>
              </Link>
            </li>

            <li className="  flex items-center text-sm xl:text-[16px]">
              <Link
                href={"https://www.facebook.com/swoplabs"}
                target="_blank"
                className="hover:underline flex items-center space-x-3"
              >
                <RiFacebookCircleLine className="size-5" />{" "}
                <span>Facebook</span>
              </Link>
            </li>

            <li className="  flex items-center text-sm xl:text-[16px]">
              <Link
                href={"https://www.instagram.com/swop.labs"}
                target="_blank"
                className="hover:underline flex items-center space-x-3"
              >
                <FiInstagram className="size-4.5" /> <span>Instagram</span>
              </Link>
            </li>

            <li className="  flex items-center text-sm xl:text-[16px]">
              <Link
                href={"https://www.tiktok.com/@swoplabs"}
                target="_blank"
                className="hover:underline flex items-center space-x-3"
              >
                <FaTiktok className="size-4" /> <span>Tiktok</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <hr className="my-6 border-gray-600 sm:mx-auto dark:border-gray-700 lg:my-4" /> */}
      <div className="py-5 mb-2 md:mb-6 md:py-0 flex items-center text-black">
        <div className="container flex  items-center justify-between  gap-3">
          <Link href="/">
            <Image
              src="/assets/site-logo/saturn.png"
              alt="Swop Logo"
              width={500}
              height={500}
              className="w-[60px] md:w-[80px]"
              quality={100}
              priority
            />
          </Link>
          <p className=" font-normal text-sm md:text-lg text-center  text-gray-700">
            ©2025 Swop
          </p>
        </div>
      </div>{" "}
    </footer>
  );
};

export default React.memo(Footer);
