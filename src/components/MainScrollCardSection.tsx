"use client";

import React, { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import CardImage from "./CardImage";

export type MainScrollCardProps = {
  src: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  i: number;
};

export const MainScrollCard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // 이미지 배열
  const data = [
    "/images/test1.svg",
    "/images/test2.svg",
    "/images/test3.svg",
    "/images/test4.svg",
  ];
  //
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75],
    [
      "linear-gradient(to bottom right, #fff0da, #fae2ff)",
      "linear-gradient(to bottom right, #f4d4a4, #f3cafb",
      "linear-gradient(to bottom right, #f9dcb1, #f0bafb",
      "linear-gradient(to bottom right, #fff0da, #fae2ff",
      // "linear-gradient(to bottom right, rgb(236, 72, 153), rgb(251, 113, 133))", //
    ]
  );

  return (
    <motion.section
      ref={containerRef}
      style={{ background: backgroundColor }}
      className="w-full py-60 transition-colors duration-300 ease-in-out"
    >
      <div className="container-xl md:px-10 flex flex-col md:flex-row gap-x-12">
        {/* Sidebar */}
        <div className="sidebar md:w-4/12 md:h-fit md:sticky md:top-24">
          <div className="relative w-[100px] h-[100px] mb-6">
            <Image src="/images/whiteLogo.svg" alt="image" fill />
          </div>
          <h2 className="text-[#29292f] text-5xl font-semibold mb-5">
            It's time to signaling
          </h2>
          <p className="text-[#777777] text-2xl font-medium">
            It's time to be closer & healthier
          </p>
          <div className="mt-10 inline-flex items-center justify-center px-7 py-5 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end">
            <p className="text-white text-[21px] font-bold">Get Started</p>
            <GoArrowRight color="white" size={24} className="ml-2" />
          </div>
        </div>
        {/* Services Stack */}
        <div className="relative">
          {data.map((service, i) => (
            <motion.div
              key={i}
              className="sticky"
              style={{
                top: `${100 + i * 50}px`, // 각 카드의 고정 위치
                marginBottom: "20vh", // 스크롤 영역 확보
                zIndex: i + 1, // 위의 카드가 더 위에 보이도록
              }}
            >
              <motion.div
                className="p-6 rounded-2xl bg-white shadow-lg"
                style={{
                  transformOrigin: "top",
                }}
              >
                {/* 카드 컨텐츠 */}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
    // <motion.section
    //   style={{ background: backgroundColor }}
    //   className="transition-colors duration-300 ease-in-out "
    //   ref={containerRef}
    // >
    //   <div className="container-xl flex  py-60">
    //     {/* 스크롤 바 */}
    //     <div className="w-full h-[100svh] flex justify-between sticky top-20">
    //       <div>
    //         <div className="relative w-[100px] h-[100px]">
    //           <Image src="/images/whiteLogo.svg" alt="image" fill />
    //         </div>
    //         <h2 className="text-[#29292f] text-5xl font-semibold py-10">
    //           It’s time to signaling
    //         </h2>
    //         <p className="text-[#777777] text-2xl font-medium">
    //           It's time to be closer & healthier
    //         </p>
    //         <div className="z-10 h-[4.5rem] mt-[2.5rem] px-7 py-5 bg-gradient-to-r from-gradient-start to-gradient-end rounded-[80px] justify-center items-center gap-2.5 inline-flex">
    //           <p className="text-center text-white text-[21px] font-bold font-['Pretendard JP'] leading-loose">
    //             Get Started
    //           </p>
    //           <GoArrowRight color="white" size={24} />
    //         </div>
    //       </div>
    //       <div className="w-2 h-80 bg-white rounded-[20px] overflow-hidden mr-4">
    //         <motion.div
    //           className="h-full bg-gradient-to-b from-[#ff7e62] to-[#ff4c24]  rounded-[20px]"
    //           style={{
    //             scaleY: scrollYProgress,
    //             transformOrigin: "top",
    //           }}
    //         />
    //       </div>
    //     </div>
    //     {/* 카드 */}
    //     <div className="pl-4 w-full">
    //       {data.map((item, index) => {
    //         const targetScale = 1 - (data.length - index) * 0.05;
    //         return (
    //           <CardImage
    //             key={index * 2}
    //             src={item}
    //             progress={scrollYProgress}
    //             range={[index * 0.25, 1]}
    //             targetScale={targetScale}
    //             i={index}
    //           />
    //         );
    //       })}
    //     </div>
    //   </div>
    // </motion.section>
  );
};

// <section className="w-full py-20" ref={containerRef}>
// <div className="container md:px-10 flex flex-col md:flex-row gap-x-12">
//   {/* Sidebar */}
//   <div className="sidebar md:w-4/12 md:h-fit md:sticky md:top-24">
//     <div className="relative w-[100px] h-[100px] mb-6">
//       <Image src="/images/whiteLogo.svg" alt="image" fill />
//     </div>
//     <h2 className="text-[#29292f] text-5xl font-semibold mb-5">
//       It's time to signaling
//     </h2>
//     <p className="text-[#777777] text-2xl font-medium">
//       It's time to be closer & healthier
//     </p>
//     <div className="mt-10 inline-flex items-center justify-center px-7 py-5 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end">
//       <p className="text-white text-[21px] font-bold">Get Started</p>
//       <GoArrowRight color="white" size={24} className="ml-2" />
//     </div>
//   </div>

//   {/* Services Stack */}
//   <div className="md:w-8/12 relative">
//     {data.map((src, i) => (
//       <motion.div
//         key={i}
//         className="sticky"
//         style={{
//           top: `${100 + i * 50}px`,
//           marginBottom: "20vh",
//           zIndex: data.length - i,
//         }}
//       >
//         <motion.div
//           className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden"
//           style={{
//             transformOrigin: "top",
//           }}
//           viewport={{ once: false, margin: "-100px" }}
//         >
//           <Image
//             src={src}
//             alt={`service-${i}`}
//             fill
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/30" />
//           <div className="absolute bottom-0 left-0 p-6">
//             <h3 className="text-2xl font-bold text-white mb-2">
//               Service Title {i + 1}
//             </h3>
//             <p className="text-white/90">
//               Service description goes here
//             </p>
//           </div>
//         </motion.div>
//       </motion.div>
//     ))}
//   </div>
// </div>
// </section>
