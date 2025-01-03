import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const clientComments = [
  {
    img: "/assets/hardware/comment-1.png",
    name: "Bryan Smith",
    title: "CEO Framer",
    desc: "Mauris nulla ex, rutrum vitae faucibus cursus, bibendum nec arcu.",
  },
  {
    img: "/assets/hardware/comment-2.png",
    name: "Bryan Smith",
    title: "CEO Framer",
    desc: "Mauris nulla ex, rutrum vitae faucibus cursus, bibendum nec arcu.",
  },
  {
    img: "/assets/hardware/comment-3.png",
    name: "Bryan Smith",
    title: "CEO Framer",
    desc: "Mauris nulla ex, rutrum vitae faucibus cursus, bibendum nec arcu.",
  },
  {
    img: "/assets/hardware/comment-4.png",
    name: "Bryan Smith",
    title: "CEO Framer",
    desc: "Curabitur gravida placerat purus nec bibendum. Proin porttitor varius risus blandit dictum. ",
  },
  {
    img: "/assets/hardware/comment-5.png",
    name: "Bryan Smith",
    title: "CEO Framer",
    desc: "Donec efficitur gravida nibh, ac aliquet diam volutpat non.",
  },
  {
    img: "/assets/hardware/comment-6.png",
    name: "Bryan Smith",
    title: "CEO Framer",
    desc: "Fusce quis sapien tristique mauris tempor tristique. Donec efficitur gravida nibh, ac aliquet diam volutpat non.",
  },
];

const ProductDetails = () => {
  return (
    <div>
      <ScrollMotionEffect effect="fade-up" duration="2000">
        <div class="grid auto-cols-min grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch justify-center">
          <div class=" bg-gradient-to-br from-[#FAFAFA] to-[#F5F5F5] p-5 rounded-xl  h-auto">
            <div>
              <Image
                width={400}
                height={50}
                src={"/assets/hardware/security-meets-agility.png"}
                alt="Link icon"
                className="mx-auto"
                quality={100}
              />
            </div>
            <h2 className="mt-3 text-2xl font-bold text-center text-stone-950">
              Security meets agility.
            </h2>
            <p className="mt-1 text-lg text-center text-stone-950">
              Tag¹ provides a secure gateway to deep experiences. Adapt your
              message while safeguarding brand integrity.
            </p>
          </div>

          <div class=" bg-gradient-to-br from-[#FAFAFA] to-[#F5F5F5] p-5 rounded-xl  h-auto">
            <div>
              <Image
                width={400}
                height={50}
                src={"/assets/hardware/trigger-interactivity-on-contact.png"}
                alt="Link icon"
                className="mx-auto"
                quality={100}
              />
            </div>
            <h2 className="mt-3 text-2xl font-bold text-center text-stone-950">
              Trigger interactivity on contact.
            </h2>
            <p className="mt-1 text-lg text-center text-stone-950">
              Tag¹ facilitates an instant and reliable connection. Activate
              immersive brand experiences with just a tap.
            </p>
          </div>

          <div class="md:row-start-1 md:col-start-2 lg:col-start-2  lg:row-start-1 md:row-span-2 bg-gradient-to-br from-[#FAFAFA] to-[#F5F5F5] p-5 rounded-xl ">
            <div className="">
              <h2 className="mt-3 text-2xl font-bold text-center text-stone-950 ">
                Proximity is all it takes.
              </h2>
              <div>
                <Image
                  width={120}
                  height={50}
                  src={"/assets/hardware/proximity-takes.png"}
                  alt="Link icon"
                  className="mx-auto py-44"
                  quality={100}
                />
              </div>

              <p className="bottom-0 mt-1 text-lg text-center text-stone-950">
                Your audience never has to install an app, or update anything,
                to access your digital experiences. They simply tap on a Tag to
                experience your latest campaign.
              </p>
              <p className="mt-1 text-lg text-center text-stone-950">
                Seamless. Simple. Smart.
              </p>
            </div>
          </div>

          <div class=" bg-gradient-to-br from-[#FAFAFA] to-[#F5F5F5] p-5 rounded-xl  h-auto">
            <div>
              <Image
                width={400}
                height={50}
                src={"/assets/hardware/datapoints-for-each-tap.png"}
                alt="Link icon"
                className="mx-auto"
                quality={100}
              />
            </div>
            <h2 className="mt-3 text-2xl font-bold text-center text-stone-950">
              Datapoints for each tap.
            </h2>
            <p className="mt-1 text-lg text-center text-stone-950">
              Tag¹ is built for data on tap. Gain access to data points upon tap
              and optimize engagement with actionable data.
            </p>
          </div>

          <div class=" bg-gradient-to-br from-[#FAFAFA] to-[#F5F5F5] p-5 rounded-xl  h-auto">
            <div>
              <Image
                width={400}
                height={50}
                src={"/assets/hardware/createdf-tangible-products.png"}
                alt="Link icon"
                className="mx-auto"
                quality={100}
              />
            </div>
            <h2 className="mt-3 text-2xl font-bold text-center text-stone-950">
              Created for the world of tangible products.
            </h2>
            <p className="mt-1 text-lg text-center text-stone-950">
              Tag¹ is designed to add a digital layer to your physical products.
              As such, explore a variety of form factors and styles for various
              products.
            </p>
          </div>
        </div>
      </ScrollMotionEffect>
      <ScrollMotionEffect effect="fade-up" duration="2000">
        <h2
          className={`text-stone-950 font-normal text-xl md:text-5xl text-center !leading-none mt-16`}
        >
          What people say
        </h2>
      </ScrollMotionEffect>

      <div className="grid auto-rows-max auto-cols-max items-center grid-cols-1 gap-4 mt-10 md:grid-cols-3 pb-20">
        {clientComments?.map((el, index) => (
          <ScrollMotionEffect
            effect="fade-up"
            duration="2000"
            key={index}
            className={"h-full"}
          >
            <div className="bg-[#FFFFFF] rounded-xl p-6 shadow-lg h-full">
              <div className="flex items-start justify-start gap-3">
                <Image
                  width={50}
                  height={50}
                  src={el?.img}
                  alt="Link icon"
                  className=""
                  quality={100}
                />
                <div>
                  <h2 className="text-2xl font-normal text-stone-950">
                    {el?.name}
                  </h2>
                  <p className="text-sm text-stone-950"> {el?.title}</p>
                </div>
              </div>
              <p className="mt-1 text-xl text-stone-950">{el?.desc}</p>
            </div>
          </ScrollMotionEffect>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
