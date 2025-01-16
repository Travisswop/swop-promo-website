"use client";
import React from "react";
import parse from "html-react-parser";
import { Accordion, AccordionItem } from "@nextui-org/react";
import SectionLayout from "../shared/SectionLayout";
import FaqSilder from "./FaqSilder";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const generalInfo = [
  {
    id: 1,
    jobTitle: "Not working on iPhone?",
    jobDesc: `<p>Absolutely! Email us at b2b@SWOPME.co to start a conversation with us! 📈</p>
    <p>No! The other person does not need a SWOP or app to receive your SWOP profile. That's the beauty of SWOP ⚡</p>
    <p>If their phone is on this list of compatible devices you can pop to their phone. If it is not, just use your SWOP 
    QR code on your profile to share!</p>`,
  },
  {
    id: 2,
    jobTitle: "Not working on Android?",
    jobDesc: `<p>Absolutely! Email us at b2b@SWOPME.co to start a conversation with us! 📈</p>
    <p>No! The other person does not need a SWOP or app to receive your SWOP profile. That's the beauty of SWOP ⚡</p>
    <p>If their phone is on this list of compatible devices you can pop to their phone. If it is not, just use your SWOP 
    QR code on your profile to share!</p>`,
  },
  {
    id: 3,
    jobTitle: "What is SWOP?",
    jobDesc: `<p>Absolutely! Email us at b2b@SWOPME.co to start a conversation with us! 📈</p>
    <p>No! The other person does not need a SWOP or app to receive your SWOP profile. That's the beauty of SWOP ⚡</p>
    <p>If their phone is on this list of compatible devices you can pop to their phone. If it is not, just use your SWOP 
    QR code on your profile to share!</p>`,
  },
  {
    id: 4,
    jobTitle: "Can i order custom SWOP?",
    jobDesc: `<p>Absolutely! Email us at b2b@SWOPME.co to start a conversation with us! 📈</p>
    <p>No! The other person does not need a SWOP or app to receive your SWOP profile. That's the beauty of SWOP ⚡</p>
    <p>If their phone is on this list of compatible devices you can pop to their phone. If it is not, just use your SWOP 
    QR code on your profile to share!</p>
`,
  },
];

const compatibilityInfo = [
  {
    id: 1,
    jobTitle: "Compatibility Phones",
    jobDesc: `<p>Absolutely! Email us at b2b@SWOPME.co to start a conversation with us! 📈</p>
    <p>No! The other person does not need a SWOP or app to receive your SWOP profile. That's the beauty of SWOP ⚡</p>
    <p>If their phone is on this list of compatible devices you can pop to their phone. If it is not, just use your SWOP 
    QR code on your profile to share!</p>`,
  },
  {
    id: 2,
    jobTitle: "Will my SWOP work under my phone case?",
    jobDesc: `<p>Absolutely! Email us at b2b@SWOPME.co to start a conversation with us! 📈</p>
    <p>No! The other person does not need a SWOP or app to receive your SWOP profile. That's the beauty of SWOP ⚡</p>
    <p>If their phone is on this list of compatible devices you can pop to their phone. If it is not, just use your SWOP 
    QR code on your profile to share!</p>`,
  },
  {
    id: 3,
    jobTitle: "How to turn NFC on for an Android? ",
    jobDesc: `<p>Yes! SWOP will work through 99.9% of phone cases, including ones that hold credit cards. The only exception would be if your case has a layer of metal.</p>
   `,
  },
  {
    id: 4,
    jobTitle: "How can i get verified on SWOP? ",
    jobDesc: `<p>Absolutely! Email us at b2b@SWOPME.co to start a conversation with us! 📈</p>
    <p>No! The other person does not need a SWOP or app to receive your SWOP profile. That's the beauty of SWOP ⚡</p>
    <p>If their phone is on this list of compatible devices you can pop to their phone. If it is not, just use your SWOP 
    QR code on your profile to share!</p>
`,
  },
];

const sahippingInfo = [
  {
    id: 1,
    jobTitle: "Do you ship worldwide?",
    jobDesc: `<p>Absolutely! Email us at b2b@SWOPME.co to start a conversation with us! 📈</p>
    <p>No! The other person does not need a SWOP or app to receive your SWOP profile. That's the beauty of SWOP ⚡</p>
    <p>If their phone is on this list of compatible devices you can pop to their phone. If it is not, just use your SWOP 
    QR code on your profile to share!</p>`,
  },
  {
    id: 2,
    jobTitle: "Will my SWOP work under my phone case?",
    jobDesc: `<p>Absolutely! Email us at b2b@SWOPME.co to start a conversation with us! 📈</p>
    <p>No! The other person does not need a SWOP or app to receive your SWOP profile. That's the beauty of SWOP ⚡</p>
    <p>If their phone is on this list of compatible devices you can pop to their phone. If it is not, just use your SWOP 
    QR code on your profile to share!</p>`,
  },
  {
    id: 3,
    jobTitle: "How to turn NFC on for an Android? ",
    jobDesc: `<p>Yes! SWOP will work through 99.9% of phone cases, including ones that hold credit cards. The only exception would be if your case has a layer of metal.</p>
   `,
  },
  {
    id: 4,
    jobTitle: "How can i get verified on SWOP? ",
    jobDesc: `<p>Absolutely! Email us at b2b@SWOPME.co to start a conversation with us! 📈</p>
    <p>No! The other person does not need a SWOP or app to receive your SWOP profile. That's the beauty of SWOP ⚡</p>
    <p>If their phone is on this list of compatible devices you can pop to their phone. If it is not, just use your SWOP 
    QR code on your profile to share!</p>
`,
  },
];

const FaqSection = () => {
  const [generalSlectedKeys, setGeneralSelectedKeys] = React.useState(
    new Set(["4"]),
  );

  const [compatibilitySelectedKeys, setCompatibilitySelectedKeys] =
    React.useState(new Set(["3"]));

  const [sahippingSlectedKeys, setShippingSelectedKeys] = React.useState(
    new Set(["0"]),
  );
  return (
    <div className="leading-tighter tracking-tight">
      <ScrollMotionEffect effect="fade-up" duration="2000">
        <h2
          className={`text-stone-950 font-normal text-xl md:text-4xl text-center !leading-none mt-6`}
        >
          <strong>How Can We Help?</strong>
        </h2>
      </ScrollMotionEffect>

      <ScrollMotionEffect effect="fade-up" duration="2000">
        <div className=" text-center flex flex-col items-center justify-center gap-0 p-2 lg:p-4 tracking-tighter rounded-md mx-auto md:w-fit  text-base lg:text-lg ">
          <p>{`Sign up for text and support`}</p>
          <p>
            {`Text ‘SWOP’ to `}
            <span className={"text-[#16A6D3]"}>67839</span>
          </p>
          <p>{`Email us: support@swopme.co`}</p>
        </div>
      </ScrollMotionEffect>

      <ScrollMotionEffect effect="fade-up" duration="2000">
        <p className="text-base text-stone-950 text-center max-w-[620px] mx-auto px-6 md:px-0">
          Discover rewarding career paths, innovative work environments, and the
          chance to grow with us. Find your perfect job and start making an
          impact today.
        </p>
      </ScrollMotionEffect>

      <ScrollMotionEffect effect="fade-up" duration="2000">
        <div className="mx-6 md:mx-32 mt-8 md:mt-12">
          <FaqSilder />
        </div>
      </ScrollMotionEffect>

      <ScrollMotionEffect effect="fade-up" duration="2000">
        <h2
          className={`text-stone-950 font-normal text-lg md:text-3xl text-center !leading-none mt-5`}
        >
          <strong>{`Frequently Asked Questions (FAQ)`}</strong>
        </h2>

        <div className="mx-0 md:mx-20  mt-5 md:mt-8 bg-white overflow-x-hidden">
          <Accordion
            className="border-2 shadow-lg rounded-lg  !px-0 text-xl overflow-x-hidden"
            // style={{ border: '1px solid red' }}
          >
            <AccordionItem
              aria-label="Accordion 1"
              title={
                <strong className="text-lg md:text-xl  px-4 font-bold">
                  Troubleshooting SWOP
                </strong>
              }
              className="shadow-lg  rounded-lg text-xl"
              style={{ padding: "0  20px 0 0" }}
            >
              <div className=" bg-[#f5f5f5] -my-2 -mr-5 px-4 py-4 border-t">
                {`We warmly welcome you to SWOP, when you come to SWOP, For Near-field
            Communication Related Process and functions, we collect your
            information. We value your trust, we own our responsibility to
            retain, preserve and protect your data as per Cyber Laws
            recommendations and we know how to safeguard our valued customer's
            (“USERS”) information.`}
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </ScrollMotionEffect>

      <ScrollMotionEffect effect="fade-up" duration="2000">
        <div className="mx-0 md:mx-20 mt-4 border-2 shadow-lg rounded-lg ">
          <h1 className="text-2xl font-bold  py-3 px-4 border-b bg-[#f5f5f5]">
            General &nbsp;&nbsp;<span>💎</span>
          </h1>
          <Accordion
            selectedKeys={generalSlectedKeys}
            onSelectionChange={setGeneralSelectedKeys}
            className="shadow-lg rounded-lg text-xl py-5"
            style={{ padding: "0  20px 0 0" }}
          >
            {generalInfo?.map((el, index) => (
              <AccordionItem
                key={el.id}
                aria-label="Accordion 1"
                title={
                  <div className="text-base md:text-[18px] font-medium  px-4">
                    {el.jobTitle}
                  </div>
                }
                className="text-[14px] md:text-base !py-0"
              >
                <div className=" bg-[#f5f5f5] -my-2  -mr-5 px-4 py-4 border-t">
                  {parse(el.jobDesc)}
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollMotionEffect>

      <ScrollMotionEffect effect="fade-up" duration="2000">
        <div className="mx-0 md:mx-20  mt-4  border-2 shadow-lg rounded-lg ">
          <h1 className="text-2xl font-bold  py-3 px-4 border-b bg-[#f5f5f5]">
            Compatibility &nbsp;&nbsp;<span>🤝</span>
          </h1>
          <Accordion
            selectedKeys={compatibilitySelectedKeys}
            onSelectionChange={setCompatibilitySelectedKeys}
            className="shadow-lg  rounded-lg text-xl py-5"
            style={{ padding: "0  20px 0 0" }}
          >
            {compatibilityInfo?.map((el, index) => (
              <AccordionItem
                key={el.id}
                aria-label="Accordion 1"
                title={
                  <div className="text-base md:text-[18px] font-medium  px-4">
                    {el.jobTitle}
                  </div>
                }
                className="text-[14px] md:text-base !py-0"
              >
                <div className=" bg-[#f5f5f5] -my-2  -mr-5 px-4 py-4 border-t">
                  {parse(el.jobDesc)}
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollMotionEffect>

      <ScrollMotionEffect effect="fade-up" duration="2000">
        <div className="mx-0 md:mx-20  mt-4 border-2 shadow-lg rounded-lg bg-white ">
          <h1 className="text-2xl font-bold  py-3 px-4 border-b bg-[#f5f5f5]">
            Shipping &nbsp;&nbsp;<span>🚚</span>
          </h1>
          <Accordion
            selectedKeys={sahippingSlectedKeys}
            onSelectionChange={setShippingSelectedKeys}
            className="shadow-lg  rounded-lg text-xl py-5"
            style={{ padding: "0  20px 0 0" }}
          >
            {sahippingInfo?.map((el, index) => (
              <AccordionItem
                key={el.id}
                aria-label="Accordion 1"
                title={
                  <div className="text-base md:text-[18px] font-medium  px-4">
                    {el.jobTitle}
                  </div>
                }
                className="text-[14px] md:text-base !py-0 "
              >
                <div className=" bg-[#f5f5f5] -my-2  -mr-5 px-4 py-4 border-t">
                  {parse(el.jobDesc)}
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollMotionEffect>
    </div>
  );
};

export default FaqSection;
