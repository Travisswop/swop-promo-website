import Image from "next/image";
import React from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const linkInfo = [
  // {
  //   img: "/assets/company/travis.png",
  //   name: "Travis Herron",
  //   title: "Founder & CEO at SWOP",
  // },
  // {
  //   img: "/assets/company/neel.png",
  //   name: "Arjo Neel",
  //   title: "Chief Operating Officer (COO)",
  // },
  // {
  //   img: "/assets/company/salman.png",
  //   name: "Salman H Saikote",
  //   title: "Chief Technology Officer (CTO)",
  // },
  // {
  //   img: "/assets/company/Rashed Sheikh.png",
  //   name: "Rashed Sheikh",
  //   title: "",
  // },
  // {
  //   img: "/assets/company/Sadit Ahsan.png",
  //   name: "Sadit Ahsan",
  //   title: "",
  // },
  // {
  //   img: "/assets/company/Rakibul Islam.png",
  //   name: "Rakibul Islam",
  //   title: "",
  // },
  // {
  //   img: "/assets/company/Shouvik Chowdhury.png",
  //   name: "Shouvik Chowdhury",
  //   title: "",
  // },
  // {
  //   img: "/assets/company/Gazi Monir-uz-zaman.png",
  //   name: "Gazi Monir-uz-zaman",
  //   title: "",
  // },

  // {
  //   img: "/assets/company/Nurul Islam.png",
  //   name: "Nurul Islam ",
  //   title: "",
  // },
  // {
  //   img: "/assets/company/Nuruzaman Milon.png",
  //   name: "Md. Nuruzaman Milon",
  //   title: "",
  // },
  // {
  //   img: "/assets/company/AR Sahak.png",
  //   name: "AR Sahak",
  //   title: "",
  // },
  // {
  //   img: "/assets/company/Raihan Ali.png",
  //   name: "Raihan Ali",
  //   title: "",
  // },
  // {
  //   img: "/assets/company/Fuad Hasan.png",
  //   name: "Fuad Hasan",
  //   title: "",
  // },

  {
    img: "/assets/company/travis.png",
    name: "Travis Herron",
    title: "Co founder & Chairman",
    profieLink: "https://swopme.app/sp/travis",
  },
  {
    img: "/assets/company/neel.png",
    name: "Arjo Neel",
    title: "Co Founder & COO",
    profieLink: "",
  },

  {
    img: "/assets/company/salman.png",
    name: "Salman H Saikote",
    title: "Co Founder & CTO",
    profieLink: "https://swopme.app/sp/salmanhmou",
  },
  // {
  //   img: "/assets/company/Rashed Sheikh.png",
  //   name: "Rashed Sheikh",
  //
  //   title: "Blockchain Advisor",
  //   profieLink: "https://swopme.app/sp/mducae",
  // },
  {
    img: "/assets/company/Sadit Ahsan.png",
    name: "Sadit Ahsan",
    title: "Head of Design",
    profieLink: "https://swopme.app/sp/sadithzj6",
  },
  // {
  //   img: "/assets/company/matt.png",
  //   name: "Matt Mulligan",
  //   title: "Sales and Customer Relations",
  //   profieLink: "",
  // },
  {
    img: "/assets/company/Rakibul Islam.png",
    name: "Rakibul Islam",
    title: "Lead Backend",
    profieLink: "https://swopme.app/sp/rakib",
  },
  {
    img: "/assets/company/Shouvik Chowdhury.png",
    name: "Shouvik Chowdhury",
    title: "Lead Frontend",
    profieLink: "https://swopme.app/sp/shouvikxaal",
  },
  // {
  //   img: "/assets/company/Gazi Monir-uz-zaman.png",
  //   name: "Gazi Monir-uz-zaman",
  //   title: "Lead Backend",
  //   profieLink: "https://swopme.app/sp/gazigqeh",
  // },
  {
    img: "/assets/company/Nuruzaman Milon.png",
    name: "Md. Nuruzaman Milon",
    title: "Web Developer",
    profieLink: "https://swopme.app/sp/testh63s",
  },
  // {
  //   img: "/assets/company/Raihan Ali.png",
  //   name: "Raihan Ali",
  //   title: "Project Research and Management",
  //   profieLink: "https://swopme.app/sp/raihandbw8",
  // },
  {
    img: "/assets/company/AR Sahak.png",
    name: "AR Sahak",
    title: "Frontend Developer",
    profieLink: "https://swopme.app/sp/ar",
  },
  // {
  //   img: "/assets/company/Nurul Islam.png",
  //   name: "Nurul Islam ",
  //   title: "Frontend Developer",
  //   profieLink: "https://swopme.app/sp/raihanqyf1",
  // },

  {
    img: "/assets/company/Fuad Hasan.png",
    name: "Fuad Hasan",
    title: "Developer Support",
    profieLink: "https://swopme.app/sp/fuadr0l9",
  },
];

const FoundersSection = () => {
  return (
    <div>
      <ScrollMotionEffect effect="fade-right" duration="2000">
        <h1
          className={`text-stone-950 xs:text-3xl ms:text-4xl md:text-5xl font-bold text-center !leading-normal`}
        >
          Team Members
        </h1>
      </ScrollMotionEffect>

      <ScrollMotionEffect effect="fade-left" duration="2000">
        <p className="text-xl text-center text-stone-950">
          Learn About the Team
        </p>
      </ScrollMotionEffect>

      <div className="grid items-start justify-center grid-cols-1 mt-10 md:mt-24 md:grid-cols-3 gap-14">
        {linkInfo?.map((el, index) => (
          <ScrollMotionEffect effect="fade-up" duration="2000" key={index}>
            <div className="">
              <div className={``}>
                <Image
                  width={300}
                  height={150}
                  src={el.img}
                  alt="Company"
                  className="mx-auto"
                  quality={100}
                />
              </div>
              <h2 className="mt-4 font-bold text-center text:md md:text-xl text-stone-950">
                {el.name}
              </h2>
              <p className="text-center text-md text-stone-950">{el.title}</p>
              {/* <Link
                href={el.profieLink}
                target="_blank"
                className="flex justify-center text-md  text-stone-950"
              >
                {el.profieLink.slice(8)}
              </Link> */}
            </div>
          </ScrollMotionEffect>
        ))}
      </div>
    </div>
  );
};

export default FoundersSection;
