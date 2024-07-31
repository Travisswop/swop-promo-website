//Main Code Setup

// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import SectionLayout from '../shared/SectionLayout';
// import Image from 'next/image';
// import { delay, motion } from 'framer-motion';
// import { IoIosWatch } from 'react-icons/io';
// import { GrTransaction } from 'react-icons/gr';
// import { IoRestaurantOutline, IoCodeSharp } from 'react-icons/io5';
// import { RiChatSettingsLine } from 'react-icons/ri';

// const featuresInfoLeft = [
//   {
//     id: 1,
//     flag: false,
//     icon: IoIosWatch,
//     title: 'Business Cards',
//     delay: 1500,
//     duration: 1000,
//     imageUrl: '/assets/video/businesscards.png',
//     videoUrl: '/assets/video/cstomizable-crad-tapp.mp4',
//   },
//   {
//     id: 2,
//     flag: false,
//     icon: IoIosWatch,
//     title: 'Wearables',
//     delay: 1500,
//     duration: 1000,
//     imageUrl: '/assets/video/wearables.png',
//     videoUrl: '/assets/video/cstomizable-crad-tapp.mp4',
//   },
//   {
//     id: 3,
//     flag: false,
//     icon: GrTransaction,
//     title: 'Transactions',
//     delay: 1500,
//     duration: 1000,
//     imageUrl: '/assets/video/transactions.png',
//     videoUrl: '/assets/video/cstomizable-crad-tapp.mp4',
//   },
// ];

// const featuresInfoRight = [
//   {
//     id: 4,
//     flag: false,
//     icon: IoRestaurantOutline,
//     title: 'Restaurant',
//     delay: 1500,
//     duration: 1000,
//     imageUrl: '/assets/video/restaurants.png',
//     videoUrl: '/assets/video/cstomizable-crad-tapp.mp4',
//   },
//   {
//     id: 5,
//     flag: false,
//     icon: RiChatSettingsLine,
//     title: 'Customize',
//     delay: 1500,
//     duration: 1000,
//     imageUrl: '/assets/video/customize.png',
//     videoUrl: '/assets/video/cstomizable-crad-tapp.mp4',
//   },
//   {
//     id: 6,
//     flag: false,
//     icon: IoCodeSharp,
//     title: 'Embeddables',
//     delay: 1500,
//     duration: 1000,
//     imageUrl: '/assets/video/embeddables.png',
//     videoUrl: '/assets/video/Hardware- Embeddables.mp4',
//   },
// ];

// const ConectMobileSection = () => {
//   const [hoverFlag, setHoverFlag] = useState(false);
//   const [hoveredItem, setHoveredItem] = useState(null);
//   const [playVideo, setPlayVideo] = useState(false);

//   const [hoverImgUrl, setHoverImgUrl] = useState(null);
//   const [hoverVideoUrl, setHoverVideoUrl] = useState(null);

//   const videoRef = useRef(null);

//   const hoverItemSelect = (value) => {
//     setHoveredItem(value?.id);
//     setHoverFlag(true);
//     setHoverImgUrl(value?.imageUrl);
//     setHoverVideoUrl(value?.videoUrl);

//     if (videoRef.current) {
//       // Pause and reset the video
//       videoRef.current.pause();
//       videoRef.current.currentTime = 0;

//       // Play the video after a delay if playVideo is true
//       if (playVideo) {
//         setTimeout(() => {
//           videoRef.current.play();
//         }, 1500);
//       }
//     }
//   };

//   const handleMouseLeave = () => {
//     setHoveredItem(null);
//     setHoverFlag(false);
//     setPlayVideo(false);
//   };

//   useEffect(() => {
//     let timer;
//     if (hoverFlag) {
//       timer = setTimeout(() => {
//         setPlayVideo(true);
//       }, 1000);
//     }
//     return () => clearTimeout(timer);
//   }, [hoverFlag]);

//   useEffect(() => {
//     if (hoverImgUrl) {
//       setHoverFlag(true);
//     }
//   }, [hoverImgUrl]);

//   return (
//     <SectionLayout>
//       <h2 className='text-stone-950 font-normal text-xl md:text-4xl text-center leading-none'>
//         <strong>Hardware</strong> built to connect
//         <br /> you with your <strong>customers</strong>.
//       </h2>
//       <p className='text-lg text-stone-950 text-center mt-4 max-w-[700px] mx-auto'>
//         Attach your Everything Link to devices to route customers where they
//         need to go, keeping everything organized and making it easier to
//         generate leads, gather reviews, take payments, offer promotions, and
//         more.
//       </p>

//       <div className='w-[400] h-[520px] mt-[100px]'>
//         {hoverFlag && (
//           <motion.div
//             key={hoverImgUrl} // This key ensures re-rendering on URL change
//             className=''
//             animate={{
//               y: [0, 0, 190],
//               scale: [1, 1.5, 1, 1, 1],
//               // borderRadius: ['0%', '0%', '50%', '50%', '0%'],
//             }}
//             transition={{
//               duration: 2,
//               ease: 'easeInOut',
//               times: [0, 0.2, 0.5, 0.8, 1],
//               repeat: false,
//               repeatDelay: 1,
//             }}
//           >
//             <Image
//               width={200}
//               height={120}
//               src={hoverImgUrl || ''}
//               alt='Link icon'
//               className='mx-auto'
//             />
//           </motion.div>
//         )}
//       </div>

//       <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-0 md:gap-14 md:mt-[-290px]'>
//         <div className='mr-[20%] flex flex-col justify-end gap-10 md:gap-28 mx-auto '>
//           {featuresInfoLeft.map((el, index) => (
//             <div
//               key={el?.id}
//               className={`p-2 bg-white  rounded-full w-40 h-40 flex flex-col items-center justify-center border border-[#737373] ${hoveredItem === el?.id ? 'shadow-2xl' : ''}`}
//               onMouseEnter={() => hoverItemSelect(el)}
//             >
//               <el.icon className='w-8 h-8 text-[#737373]' />
//               <h2 className='mt-2 text-lg text-[#737373] text-center font-normal'>
//                 {el?.title}
//               </h2>
//             </div>
//           ))}
//         </div>

//         <div className='flex justify-center mx-auto relative z-50'>
//           <motion.div
//             // initial={{ opacity: 0, scale: 0.5 }}
//             // animate={{ opacity: 1, scale: 1 }}
//             // transition={{ duration: 0.5 }}
//             className='w-[400px] h-[600px] flex justify-center mx-auto relative z-50'
//           >
//             <video
//               ref={videoRef}
//               src={hoverVideoUrl || '/assets/video/cstomizable-crad-tapp.mp4'}
//               muted
//               className='mx-auto'
//               width={350}
//               height={50}
//             />
//           </motion.div>
//         </div>

//         <div className='ml-[20%] flex flex-col justify-start gap-10 md:gap-28 mx-auto  bg-white'>
//           {featuresInfoRight.map((el, index) => (
//             <div
//               key={index}
//               className={`p-2 bg-white  rounded-full w-40 h-40 flex flex-col items-center justify-center border border-[#737373] ${hoveredItem === el.id ? 'shadow-2xl' : ''}`}
//               onMouseEnter={() => hoverItemSelect(el)}
//             >
//               <el.icon className='w-8 h-8 text-[#737373]' />
//               <h2 className='mt-2 text-lg text-[#737373] text-center font-normal'>
//                 {el.title}
//               </h2>
//             </div>
//           ))}
//         </div>
//       </div>
//     </SectionLayout>
//   );
// };

// export default ConectMobileSection;

//First Demo

// 'use client';
// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import SectionLayout from '../shared/SectionLayout';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { IoIosWatch } from 'react-icons/io';
// import { GrTransaction } from 'react-icons/gr';
// import { IoRestaurantOutline, IoCodeSharp } from 'react-icons/io5';
// import { RiChatSettingsLine } from 'react-icons/ri';

// const featuresInfoLeft = [
//   {
//     id: 1,
//     icon: IoIosWatch,
//     title: 'Business Cards',
//     imageUrl: '/assets/video/businesscards.png',
//     videoUrl: '/assets/video/cstomizable-crad-tapp.mp4',
//   },
//   {
//     id: 2,
//     icon: IoIosWatch,
//     title: 'Wearables',
//     imageUrl: '/assets/video/wearables.png',
//     videoUrl: '/assets/video/cstomizable-crad-tapp.mp4',
//   },
//   {
//     id: 3,
//     icon: GrTransaction,
//     title: 'Transactions',
//     imageUrl: '/assets/video/transactions.png',
//     videoUrl: '/assets/video/cstomizable-crad-tapp.mp4',
//   },
// ];

// const featuresInfoRight = [
//   {
//     id: 4,
//     icon: IoRestaurantOutline,
//     title: 'Restaurant',
//     imageUrl: '/assets/video/restaurants.png',
//     videoUrl: '/assets/video/cstomizable-crad-tapp.mp4',
//   },
//   {
//     id: 5,
//     icon: RiChatSettingsLine,
//     title: 'Customize',
//     imageUrl: '/assets/video/customize.png',
//     videoUrl: '/assets/video/cstomizable-crad-tapp.mp4',
//   },
//   {
//     id: 6,
//     icon: IoCodeSharp,
//     title: 'Embeddables',
//     imageUrl: '/assets/video/embeddables.png',
//     videoUrl: '/assets/video/Hardware- Embeddables.mp4',
//   },
// ];

// const ConectMobileSection = () => {
//   const [hoveredItem, setHoveredItem] = useState(null);
//   const [playVideo, setPlayVideo] = useState(false);
//   const [hoverImgUrl, setHoverImgUrl] = useState(null);
//   const [hoverVideoUrl, setHoverVideoUrl] = useState(null);

//   const videoRef = useRef(null);

//   const hoverItemSelect = useCallback((value) => {
//     setHoveredItem(value?.id);
//     setHoverImgUrl(value?.imageUrl);
//     setHoverVideoUrl(value?.videoUrl);

//     if (videoRef.current) {
//       videoRef.current.pause();
//       videoRef.current.currentTime = 0;
//     }
//   }, []);

//   const handleMouseLeave = () => {
//     setHoveredItem(null);
//     setHoverImgUrl(null);
//     setHoverVideoUrl(null);
//     setPlayVideo(false);
//     videoRef.current.pause();
//   };

//   useEffect(() => {
//     let timer;
//     if (hoveredItem) {
//       timer = setTimeout(() => {
//         setPlayVideo(true);
//         if (videoRef.current) {
//           videoRef.current.play();
//         }
//       }, 1000);
//     } else {
//       setPlayVideo(false);
//     }
//     return () => clearTimeout(timer);
//   }, [hoveredItem]);

//   return (
//     <SectionLayout>
//       <h2 className='text-stone-950 font-normal text-xl md:text-4xl text-center leading-none'>
//         <strong>Hardware</strong> built to connect
//         <br /> you with your <strong>customers</strong>.
//       </h2>
//       <p className='text-lg text-stone-950 text-center mt-4 max-w-[700px] mx-auto'>
//         Attach your Everything Link to devices to route customers where they
//         need to go, keeping everything organized and making it easier to
//         generate leads, gather reviews, take payments, offer promotions, and
//         more.
//       </p>

//       <div className='w-[400px] h-[520px] mx-auto mt-14'>
//         {hoverImgUrl && (
//           <motion.div
//             key={hoverImgUrl}
//             className='mx-auto'
//             animate={{
//               y: [0, 0, 190],
//               scale: [1, 1.5, 1, 1, 1],
//             }}
//             transition={{
//               duration: 2,
//               ease: 'easeInOut',
//               times: [0, 0.2, 0.5, 0.8, 1],
//               repeat: false,
//               repeatDelay: 1,
//             }}
//           >
//             <Image
//               width={150}
//               height={120}
//               src={hoverImgUrl}
//               alt='Link icon'
//               className='mx-auto'
//             />
//           </motion.div>
//         )}
//       </div>

//       <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-14 md:mt-[-290px]'>
//         <div className='flex flex-col justify-end gap-10 md:gap-28 mx-auto'>
//           {featuresInfoLeft.map((el) => (
//             <div
//               key={el.id}
//               className={`p-2 bg-white rounded-full w-40 h-40 flex flex-col items-center justify-center border border-[#737373] ${hoveredItem === el.id ? 'shadow-2xl' : ''}`}
//               onMouseEnter={() => hoverItemSelect(el)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <el.icon className='w-8 h-8 text-[#737373]' />
//               <h2 className='mt-2 text-lg text-[#737373] text-center font-normal'>
//                 {el.title}
//               </h2>
//             </div>
//           ))}
//         </div>

//         <div className='flex justify-center mx-auto relative z-50'>
//           <motion.div className='w-[400px] h-[600px] flex justify-center mx-auto relative z-50'>
//             <video
//               ref={videoRef}
//               src={hoverVideoUrl || '/assets/video/cstomizable-crad-tapp.mp4'}
//               muted
//               className='mx-auto'
//               width={350}
//               height={50}
//             />
//           </motion.div>
//         </div>

//         <div className='flex flex-col justify-start gap-10 md:gap-28 mx-auto bg-white'>
//           {featuresInfoRight.map((el) => (
//             <div
//               key={el.id}
//               className={`p-2 bg-white rounded-full w-40 h-40 flex flex-col items-center justify-center border border-[#737373] ${hoveredItem === el.id ? 'shadow-2xl' : ''}`}
//               onMouseEnter={() => hoverItemSelect(el)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <el.icon className='w-8 h-8 text-[#737373]' />
//               <h2 className='mt-2 text-lg text-[#737373] text-center font-normal'>
//                 {el.title}
//               </h2>
//             </div>
//           ))}
//         </div>
//       </div>
//     </SectionLayout>
//   );
// };

// export default ConectMobileSection;

'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import SectionLayout from '../shared/SectionLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IoIosWatch } from 'react-icons/io';
import { GrTransaction } from 'react-icons/gr';
import { IoRestaurantOutline, IoCodeSharp } from 'react-icons/io5';
import { RiChatSettingsLine } from 'react-icons/ri';

const featuresInfoLeft = [
  {
    id: 1,
    icon: IoIosWatch,
    title: 'Business Cards',
    imageUrl: '/assets/video/businesscards.png',
    videoUrl: '/assets/video/cstomizable-crad-tapp.mp4',
  },
  {
    id: 2,
    icon: IoIosWatch,
    title: 'Wearables',
    imageUrl: '/assets/video/wearables.png',
    videoUrl: '/assets/video/cstomizable-crad-tapp.mp4',
  },
  {
    id: 3,
    icon: GrTransaction,
    title: 'Transactions',
    imageUrl: '/assets/video/transactions.png',
    videoUrl: '/assets/video/cstomizable-crad-tapp.mp4',
  },
];

const featuresInfoRight = [
  {
    id: 4,
    icon: IoRestaurantOutline,
    title: 'Restaurant/ Hospital',
    imageUrl: '/assets/video/restaurants.png',
    videoUrl: '/assets/video/cstomizable-crad-tapp.mp4',
  },
  {
    id: 5,
    icon: RiChatSettingsLine,
    title: 'Customize',
    imageUrl: '/assets/video/customize.png',
    videoUrl: '/assets/video/cstomizable-crad-tapp.mp4',
  },
  {
    id: 6,
    icon: IoCodeSharp,
    title: 'Embeddables',
    imageUrl: '/assets/video/embeddables.png',
    videoUrl: '/assets/video/Hardware- Embeddables.mp4',
  },
];

const ConectMobileSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [playVideo, setPlayVideo] = useState(false);
  const [imageShow, setImageShow] = useState(false);
  const [hoverImgUrl, setHoverImgUrl] = useState(null);
  const [hoverVideoUrl, setHoverVideoUrl] = useState(null);

  const videoRef = useRef(null);

  const hoverItemSelect = useCallback((value) => {
    setHoveredItem(value?.id);
    setHoverImgUrl(value?.imageUrl);
    setHoverVideoUrl(value?.videoUrl);
    setImageShow(true);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  const handleMouseLeave = () => {
    // setHoveredItem(null);
    // setHoverImgUrl(null);
    // setHoverVideoUrl(null);
    // setPlayVideo(false);
    // videoRef.current.pause();
  };

  useEffect(() => {
    let timer;
    if (hoveredItem) {
      timer = setTimeout(() => {
        setPlayVideo(true);
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, 2000);
    } else {
      setPlayVideo(false);
    }
    return () => clearTimeout(timer);
  }, [hoveredItem]);

  return (
    <SectionLayout>
      <h2 className='text-stone-950 font-normal text-xl md:text-4xl text-center leading-none'>
        <strong>Hardware</strong> built to connect
        <br /> you with your <strong>customers</strong>.
      </h2>
      <p className='text-lg text-stone-950 text-center mt-4 max-w-[700px] mx-auto'>
        Attach your Everything Link to devices to route customers where they
        need to go, keeping everything organized and making it easier to
        generate leads, gather reviews, take payments, offer promotions, and
        more.
      </p>

      <div className='w-[400px] h-[520px] mx-auto mt-8'>
        {hoverImgUrl ? (
          <motion.div
            key={hoverImgUrl}
            className='mx-auto'
            animate={{
              y: [0, 0, 190],
              scale: [1, 1.5, 1, 1, 1],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: false,
              repeatDelay: 1,
            }}
          >
            <Image
              width={180}
              height={120}
              src={hoverImgUrl}
              alt='Link icon'
              className='mx-auto'
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              ease: 'easeInOut',
            }}
            className='pt-16'
          >
            <Image
              width={100}
              height={80}
              src={'/assets/hardware/products/topicon.png'}
              alt='Link icon'
              className='mx-auto '
            />
          </motion.div>
        )}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-14 md:mt-[-330px]'>
        <div className='flex flex-col justify-end gap-10 md:gap-28 mx-auto mr-[-2px]'>
          {featuresInfoLeft.map((el) => (
            <div
              key={el.id}
              className={`p-2 bg-white rounded-full w-28 h-28 flex flex-col items-center justify-center border border-[#737373] ${hoveredItem === el.id ? 'shadow-xl' : ''}`}
              onMouseEnter={() => hoverItemSelect(el)}
              onMouseLeave={handleMouseLeave}
            >
              <el.icon className='w-6 h-6 text-[#737373]' />
              <h2 className='mt-2 text-base text-[#737373] text-center font-normal leading-5'>
                {el.title}
              </h2>
            </div>
          ))}
        </div>

        <div className='flex justify-center mx-auto relative z-50'>
          <motion.div className='w-[400px] h-[600px] flex justify-center mx-auto relative z-50'>
            <video
              ref={videoRef}
              src={hoverVideoUrl || '/assets/video/cstomizable-crad-tapp.mp4'}
              muted
              className='mx-auto'
              width={200}
              height={50}
              preload='auto'
              loading='lazy'
            />
          </motion.div>
        </div>

        <div className='flex flex-col justify-start gap-10 md:gap-28 mx-auto bg-white ml-[-2px]'>
          {featuresInfoRight.map((el) => (
            <div
              key={el.id}
              className={`p-2 bg-white rounded-full w-28 h-28 flex flex-col items-center justify-center border border-[#737373] ${hoveredItem === el.id ? 'shadow-xl' : ''}`}
              onMouseEnter={() => hoverItemSelect(el)}
              onMouseLeave={handleMouseLeave}
            >
              <el.icon className='w-6 h-6 text-[#737373]' />
              <h2 className='mt-1 text-sm leading-5 text-[#737373] text-center font-normal'>
                {el.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default ConectMobileSection;
