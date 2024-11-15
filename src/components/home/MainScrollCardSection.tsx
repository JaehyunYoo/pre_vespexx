"use client";

import React, { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import CardImage from "./CardImage";
import MaxContainer from "../MaxContainer";
import { CardData, homeCardScrollScaleData } from "@/data/data";

export type MainScrollCardProps = {
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  i: number;
};

const MainScrollCardSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75],
    [
      // "linear-gradient(120deg, #FFF0DB 0%, #FBE7FF 100%)", // 원본 css
      "linear-gradient(to bottom right, #fff0da, #fae2ff)",
      "linear-gradient(to bottom right, #f4d4a4, #f3cafb",
      "linear-gradient(to bottom right, #f9dcb1, #f0bafb",
      "linear-gradient(to bottom right, #fff0da, #fae2ff",
    ]
  );

  return (
    <motion.section
      ref={containerRef}
      style={{ background: backgroundColor }}
      className="w-full lg:py-[15rem] xs:py-16 transition-colors duration-300 ease-in-out"
    >
      <MaxContainer className="flex flex-col lg:flex-row gap-x-12">
        {/* Sidebar */}
        <div className="w-full lg:h-fit lg:sticky lg:top-20 pt-6">
          <div className="flex lg:justify-between xs:flex-row xs:justify-center">
            {/* Left Side*/}
            <div className="lg:text-left xs:text-center">
              <div className="relative lg:mx-0 lg:w-[100px] lg:h-[100px] xs:w-[80px] xs:h-[80px] xs:mx-auto mb-6">
                <Image
                  src="/images/signalingWhiteLogo.png"
                  alt="signaling white logo"
                  fill
                />
              </div>
              <h2 className="text-[#1e1e1e] md:text-5xl md:px-0 xs:text-3xl xs:px-4 font-semibold mb-5">
                It's time to signal together
              </h2>
              <p className="text-[#555555] md:text-2xl xs:text-base font-medium">
                It's time to be closer & healthier
              </p>
              <div className="mt-10 mb-[7.5rem] inline-flex items-center justify-center px-7 py-5 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end">
                <p className="text-white text-[21px] font-bold">Get Started</p>
                <GoArrowRight color="white" size={24} className="ml-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Services Stack */}
        <div className="w-full relative">
          <div className="flex justify-center gap-4">
            {/** Scroll Sticky */}
            <div className="py-10 md:block hidden">
              <div className="w-2 h-80 md:sticky top-[20%]  bg-white rounded-[20px] overflow-hidden mr-4">
                <motion.div
                  className="h-full bg-gradient-to-b from-[#ff7e62] to-[#ff4c24]  rounded-[20px]"
                  style={{
                    scaleY: scrollYProgress,
                    transformOrigin: "top",
                  }}
                />
              </div>
            </div>
            {/** Scroll Card */}
            <div className="flex flex-col">
              {homeCardScrollScaleData.map((item, index) => {
                const targetScale =
                  1 - (homeCardScrollScaleData.length - index) * 0.05;
                return (
                  <CardImage
                    key={index * 2}
                    data={item}
                    progress={scrollYProgress}
                    range={[index * 0.25, 1]}
                    targetScale={targetScale}
                    i={index}
                    dataLength={homeCardScrollScaleData.length}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </MaxContainer>
    </motion.section>
  );
};

export default MainScrollCardSection;
