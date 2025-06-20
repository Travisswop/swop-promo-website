// "use client";
// import React, { useState, useEffect, useCallback, useMemo } from "react";

// import { Fira_Code } from "@next/font/google";

// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   NavbarMenuToggle,
//   NavbarMenu,
//   NavbarMenuItem,
//   cn,
// } from "@nextui-org/react";
// import { LuUserRound } from "react-icons/lu";
// import { IoCall } from "react-icons/io5";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// // Debounce function moved outside to avoid recreation on every render
// const debounce = (func, wait) => {
//   let timeout;
//   return (...args) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(this, args), wait);
//   };
// };

// const MainNavbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const pathname = usePathname();
//   console.log(pathname);
//   const [navbarColor, setNavbarColor] = useState(false);

//   // const menuItems = useMemo(
//   //   () => [
//   //     { title: "Software", slug: "/software" },
//   //     { title: "Hardware", slug: "/hardware" },
//   //     { title: "Company", slug: "/company" },
//   //   ],
//   //   []
//   // );

//   // Properly configure the font
//   const firaCode = Fira_Code({
//     subsets: ["latin"],
//     weight: ["400", "500", "600", "700"], // Specify font weights
//   });

//   const menuItems = [
//     { title: "Software", slug: "/software" },
//     { title: "Hardware", slug: "/hardware" },
//     { title: "Company", slug: "/company" },
//   ];

//   const handleScroll = useCallback(
//     debounce(() => {
//       setNavbarColor(window.scrollY >= 100);
//     }, 100),
//     []
//   );

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     document.querySelector("header").classList.add("!px-0");
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [handleScroll]);

//   return (
//     <div
//       className={`w-full m-auto z-40 top-0  transition-colors duration-300 fixed ${navbarColor ? "!bg-white shadow-small duration-1000" : "bg-transparent"}}`}
//     >
//       <Navbar
//         isMenuOpen={isMenuOpen}
//         onMenuOpenChange={setIsMenuOpen}
//         maxWidth="full"
//         className={`container pb-0 pt-2 md:pb-3 md:pt-4 transition-colors duration-300 ${navbarColor ? "!bg-white  duration-1000" : "bg-transparent"}`}
//       >
//         <NavbarContent>
//           <NavbarBrand>
//             <Link href="/">
//               <Image
//                 src="/assets/site-logo/swop-logo.png"
//                 alt="Swop Logo"
//                 width={150}
//                 height={100}
//                 className="w-[90px] md:w-[150px]"
//                 quality={100}
//                 priority
//               />
//             </Link>
//           </NavbarBrand>
//         </NavbarContent>

//         <NavbarContent
//           className=" hidden md:flex gap-2 lg:gap-4 text-white   rounded-full  "
//           justify="center"
//         >
//           <NavbarItem>
//             <div
//               className={cn(
//                 " hidden md:flex justify-between items-center gap-2  text-gray-300  bg-[#F6F6F6] rounded-full p-3 h-12 w-full",
//                 pathname === "/" ? "bounce-nav" : ""
//               )}
//             >
//               <div className="hidden md:flex justify-between items-center gap-2  text-gray-400  bg-[#F6F6F6] rounded-full pl-3 h-12  -translate-x-5 ">
//                 <div className="bg-white rounded-full hover:bg-[#AF97D4] transition-all duration-300 ease-in-out -translate-x-1 mr-auto">
//                   <Link href="/">
//                     <Image
//                       src="/assets/site-logo/navicon.png"
//                       alt="Swop Logo"
//                       width={35}
//                       height={35}
//                       quality={100}
//                       priority
//                       className=" rounded-full animate-slow-bounce "
//                     />
//                   </Link>
//                 </div>

//                 <div className="flex-grow h-full  flex items-center justify-around">
//                   {menuItems.map((el) => (
//                     <div
//                       key={el.slug}
//                       className={`hover:bg-white hover:text-gray-100 px-2 lg:px-3 py-1.5 rounded-3xl transition-all duration-200 ease-in-out ${pathname === el.slug ? "text-[#AF97D4]" : ""}`}
//                     >
//                       <Link
//                         href={el.slug}
//                         className={`text-sm md:text-base text-black ${firaCode.className}`}
//                       >
//                         {el.title}
//                       </Link>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </NavbarItem>
//         </NavbarContent>

//         <NavbarContent justify="end" className="flex items-center">
//           <NavbarItem>
//             <Link
//               href="/get-demo"
//               className="flex items-center gap-x-2 bg-[#F6F6F6] p-1.5 md:p-2 rounded-full text-sm md:text-base font-semibold group hover:text-[#AF97D4]"
//             >
//               <p className="group-hover:text-[#AF97D4]">Get Demo</p>
//               <div className="bg-[#282828] p-1 md:p-2 rounded-full ">
//                 <IoCall className="w-3 h-3 text-white md:w-5 md:h-5 group-hover:text-[#AF97D4]" />
//               </div>
//             </Link>
//           </NavbarItem>
//           <NavbarItem className="">
//             <Link href={"https://desktop-app-psi.vercel.app/"} target="_blank">
//               <div className="bg-[#F6F6F6] p-2 md:p-3 rounded-full">
//                 <LuUserRound className="w-4 h-4 md:w-7 md:h-7 text-[#282828] hover:text-[#AF97D4]" />
//               </div>
//             </Link>
//           </NavbarItem>
//           <NavbarMenuToggle
//             aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//             className="md:hidden"
//           />
//         </NavbarContent>

//         <NavbarMenu className="overflow-hidden">
//           {menuItems.map((el, index) => (
//             <NavbarMenuItem key={el.slug} className="flex flex-row">
//               <Link
//                 className={`w-full text-black text-center !text-xl font-medium py-1 ${pathname === el.slug ? "!text-[#AF97D4]" : ""} ${index === 0 ? "mt-6" : ""}`}
//                 href={el.slug}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {el.title}
//               </Link>
//             </NavbarMenuItem>
//           ))}
//         </NavbarMenu>
//       </Navbar>
//       {/* <div
//         className={cn(
//           " h-[92px] w-fit absolute top-0 m-auto left-0 right-0 z-50 flex justify-center items-center",
//           pathname === "/" ? "bounce-nav" : ""
//         )}
//       >
//         <div className="hidden md:flex justify-between items-center gap-2  text-gray-400  bg-[#191919] rounded-full pl-3 h-12 lg:w-[400px] w-[300px] -translate-x-5 lg:-translate-x-0">
//           <div className="bg-white rounded-full hover:bg-[#AF97D4] transition-all duration-300 ease-in-out -translate-x-1">
//             <Link href="/">
//               <Image
//                 src="/assets/site-logo/navicon.png"
//                 alt="Swop Logo"
//                 width={35}
//                 height={35}
//                 quality={100}
//                 priority
//                 className=" rounded-full animate-slow-bounce "
//               />
//             </Link>
//           </div>

//           <div className="flex-grow h-full  flex items-center justify-around">
//             {menuItems.map((el) => (
//               <div
//                 key={el.slug}
//                 className={`hover:bg-[#383838] hover:text-gray-100 px-3 py-1.5 rounded-3xl transition-all duration-200 ease-in-out ${pathname === el.slug ? "text-[#AF97D4]" : ""}`}
//               >
//                 <Link href={el.slug} className={`text-sm md:text-base `}>
//                   {el.title}
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default React.memo(MainNavbar);

"use client";
import React, { useCallback, useEffect, useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  cn,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCall } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [navbarColor, setNavbarColor] = useState(false);

  const menuItems = [
    { title: "Software", slug: "/software" },
    { title: "Hardware", slug: "/hardware" },
    { title: "Company", slug: "/company" },
  ];

  const handleScroll = useCallback(
    debounce(() => {
      setNavbarColor(window.scrollY >= 100);
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.querySelector("header").classList.add("!px-0");
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={`w-full m-auto z-40 top-0 transition-colors duration-300 fixed ${
        navbarColor ? "!bg-white shadow-small duration-1000" : "bg-transparent"
      }`}
    >
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        className={`container pb-0 pt-1 md:pb-1 md:pt-2 transition-colors duration-300 ${
          navbarColor ? "!bg-white duration-1000" : "bg-transparent"
        }`}
      >
        <NavbarContent>
          <NavbarBrand>
            <Link href="/">
              <Image
                src="/assets/site-logo/swop-black-logo.png"
                alt="Swop Logo"
                width={500}
                height={500}
                className="w-[80px] md:w-[100px]"
                quality={100}
                priority
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden md:flex gap-2 lg:gap-4 text-white rounded-full"
          justify="center"
        >
          <NavbarItem>
            <div
              className={cn(
                "hidden md:flex justify-between items-center gap-2 text-gray-300 bg-[#F6F6F6] rounded-full p-3 h-12 w-full",
                pathname === "/" ? "bounce-nav" : ""
              )}
            >
              <div className="hidden md:flex justify-between items-center gap-2 text-gray-400 bg-[#F6F6F6] rounded-full pl-3 h-12 -translate-x-5">
                <div className=" rounded-full hover:bg-[#AF97D4] transition-all duration-300 ease-in-out -translate-x-1 mr-auto ">
                  <Link href="/">
                    <Image
                      src="/assets/site-logo/saturn.png"
                      alt="Swop Logo"
                      width={35}
                      height={35}
                      quality={100}
                      priority
                      className="rounded-full animate-slow-bounce z-50 -translate-y-1.5"
                    />
                  </Link>
                </div>

                <div className="flex-grow h-full flex items-center justify-around">
                  {menuItems.map((el) => (
                    <div
                      key={el.slug}
                      className={`hover:bg-white hover:text-gray-100 px-2 lg:px-3 py-1.5 rounded-3xl transition-all duration-200 ease-in-out ${
                        pathname === el.slug ? "text-[#AF97D4]" : ""
                      }`}
                    >
                      <Link
                        href={el.slug}
                        className={`text-sm md:text-base text-black `}
                      >
                        {el.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end" className="flex items-center">
          <NavbarItem>
            <Link
              href="/get-demo"
              className="flex items-center gap-x-2 bg-[#F6F6F6] p-1.5  rounded-full text-sm md:text-sm font-semibold group hover:text-[#AF97D4]"
            >
              <p className="group-hover:text-[#AF97D4]">Get Demo</p>
              <div className="bg-[#282828] p-1 md:p-2 rounded-full">
                <IoCall className="w-3 h-3 text-white md:w-5 md:h-5 group-hover:text-[#AF97D4]" />
              </div>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={"https://www.swopme.app"} target="_blank">
              <div className="bg-[#F6F6F6] p-2  rounded-full">
                <LuUserRound className="w-4 h-4 md:w-7 md:h-7 text-[#282828] hover:text-[#AF97D4]" />
              </div>
            </Link>
          </NavbarItem>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
          />
        </NavbarContent>

        <NavbarMenu className="overflow-hidden">
          {menuItems.map((el, index) => (
            <NavbarMenuItem key={el.slug} className="flex flex-row">
              <Link
                className={`w-full text-black text-center !text-xl font-medium py-1 ${
                  pathname === el.slug ? "!text-[#AF97D4]" : ""
                } ${index === 0 ? "mt-6" : ""}`}
                href={el.slug}
                onClick={() => setIsMenuOpen(false)}
              >
                {el.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default React.memo(MainNavbar);
