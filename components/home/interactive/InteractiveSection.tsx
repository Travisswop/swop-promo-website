import SectionLayout from "@/components/shared/SectionLayout";
import { cn } from "@nextui-org/react";
import React from "react";

const InteractiveSection = () => {
  return (
    <SectionLayout>
      <div className="container pt-16">
        <h2
          className={cn(
            "text-3xl md:text-5xl font-bold text-black text-center leading-tight tracking-normal [text-shadow:_0px_4px_4px_rgb(80_80_80_/_0.5)]"
          )}
        >
          Welcome to the
          <span className="block text-3xl py-6">
            <span className="text-[#B396FF]"> Interactive </span>Layer
          </span>
        </h2>
        <div className="flex justify-center flex-1 relative -translate-x-10 xl:w-2/4 text-center m-auto">
          <div className="w-[70%] m-auto">
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

// <SectionLayout bg={"bg-transparent"}>
//   <div className="z-50 flex flex-col-reverse items-center w-full gap-6 md:flex-row">
//     <motion.div
//       className="flex-1"
//       initial="hidden"
//       animate="visible"
//       exit={{ opacity: 0, transition: { duration: 1 } }}
//       variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
//     >
//       <motion.h1
//         className="text-[30px] md:text-[56px] font-[750] text-black text-center leading-tight tracking-normal"
//         variants={variants}
//       >
//         {text.map((word, index) => (
//           <span key={index} className="inline-block">
//             {word}{" "}
//           </span>
//         ))}
//       </motion.h1>
//       <motion.p
//         variants={variants}
//         className="text-black text-2xl md:text-[36px] mt-2 md:mt-2 text-center"
//       >
//         And Get Paid to Network
//       </motion.p>

//       <motion.div
//         variants={variants}
//         className="flex justify-center mt-5 md:mt-6"
//       >
//         <Link
//           href={"https://swop-desktop.vercel.app"}
//           target="_blank"
//           className="flex items-center justify-center px-6 py-2 mb-2 font-medium text-black border-2 border-black bg-none hover:bg-black hover:text-white text-md md:text-lg md:px-10 me-0 md:me-6 rounded-xl"
//         >
//           Get Started
//         </Link>
//       </motion.div>
//     </motion.div>
//     <div className="flex justify-center flex-1">
//       <div className="w-[70%]">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           preload="auto"
//           style={{ display: "block" }}
//         >
//           <source src="/assets/home/hero-bg-jvideo.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   </div>
// </SectionLayout>

export default InteractiveSection;