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
      className="w-full py-[15rem] transition-colors duration-300 ease-in-out"
    >
      <div className="container-xl flex flex-col md:flex-row gap-x-12">
        {/* Sidebar */}
        <div className="w-full md:h-fit md:sticky top-20 pt-8">
          <div className="flex justify-between">
            <div>
              <div className="relative w-[100px] h-[100px] mb-6">
                <Image src="/images/whiteLogo.svg" alt="image" fill />
              </div>
              <h2 className="text-[#1e1e1e] text-5xl font-semibold mb-5">
                It's time to signaling
              </h2>
              <p className="text-[#555555] text-2xl font-medium">
                It's time to be closer & healthier
              </p>
              <div className="mt-10 inline-flex items-center justify-center px-7 py-5 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end">
                <p className="text-white text-[21px] font-bold">Get Started</p>
                <GoArrowRight color="white" size={24} className="ml-2" />
              </div>
            </div>

            <div className="w-2 h-80 bg-white rounded-[20px] overflow-hidden mr-4">
              <motion.div
                className="h-full bg-gradient-to-b from-[#ff7e62] to-[#ff4c24]  rounded-[20px]"
                style={{
                  scaleY: scrollYProgress,
                  transformOrigin: "top",
                }}
              />
            </div>
          </div>

          <div className="pt-40" />
        </div>
        {/* Services Stack */}
        <div className="w-full relative">
          {data.map((item, index) => {
            const targetScale = 1 - (data.length - index) * 0.05;
            return (
              <CardImage
                key={index * 2}
                src={item}
                progress={scrollYProgress}
                range={[index * 0.25, 1]}
                targetScale={targetScale}
                i={index}
              />
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
