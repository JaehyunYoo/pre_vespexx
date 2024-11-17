"use client";

import React, { useRef } from "react";
import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import CardImage from "./CardImage";
import { homeCardScrollScaleData } from "@/data/data";
import GetStartedButton from "../GetStartedButton";

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
      className='w-full py-c-15 transition-colors duration-300 ease-in-out'
    >
      <div className='container-xl grid items-start lg:grid-cols-11'>
        {/* left */}
        <div className='lg:col-span-5 xs:col-span-11 lg:sticky lg:top-20 pt-6 lg:text-left xs:text-center'>
          <div className='relative lg:w-28 lg:h-28 xs:w-20 xs:h-20 inline-block'>
            <Image
              src='/images/signalingWhiteLogo.png'
              alt='signaling white logo'
              fill
            />
          </div>
          <h2 className='text-color-s-strong font-semibold mt-10 md:text-4xl xs:text-3xl'>
            It's time to sync together
          </h2>
          <p className='text-color-s-neutral font-normal md:text-2xl xs:text-base md:mt-5 xs:mt-4'>
            with the ultimate tool for couples
          </p>
          <div className='flex lg:justify-start xs:justify-center mt-10 mb-0 xs:mb-10'>
            <GetStartedButton
              title='Get Started'
              padding='lg:px-7 lg:py-5 xs:px-6 xs:py-4'
              textSize='lg:text-xl xs:text-base'
            />
          </div>
        </div>
        {/* right */}
        <div className='lg:col-span-6 xs:col-span-11'>
          <div className='flex relative gap-8 xl:justify-end xs:justify-center'>
            <div className='md:sticky md:top-20 h-fit md:block hidden'>
              <div className='py-10 md:block hidden'>
                <div className='w-2 h-80 md:sticky top-[20%] bg-white rounded-[20px] overflow-hidden'>
                  <motion.div
                    className='h-full bg-gradient-to-b from-gradient-scroll to-gradient-scroll-end rounded-[20px]'
                    style={{
                      scaleY: scrollYProgress,
                      transformOrigin: "top",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-col'>
              {homeCardScrollScaleData.map(
                (item, index) => {
                  const targetScale =
                    1 -
                    (homeCardScrollScaleData.length -
                      index) *
                      0.05;
                  return (
                    <CardImage
                      key={index * 2}
                      data={item}
                      progress={scrollYProgress}
                      range={[index * 0, 1]} // 0.25 -> 0
                      targetScale={targetScale}
                      i={index}
                      dataLength={
                        homeCardScrollScaleData.length
                      }
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <div className='container grid items-start gap-y-10 md:grid-cols-11 md:gap-x-2 mx-auto bg-slate-400'>
        <div className='md:col-span-5 xs:col-span-11 md:sticky md:top-20 pt-6 md:text-left xs:text-center'>
          <div className='relative lg:mx-0 lg:w-[100px] lg:h-[100px] xs:w-[80px] xs:h-[80px] md:mx-0 xs:mx-auto mb-6'>
            <Image
              src='/images/signalingWhiteLogo.png'
              alt='signaling white logo'
              fill
            />
          </div>
          <h2 className='text-[#1e1e1e] md:text-5xl md:px-0 xs:text-3xl xs:px-4 font-semibold mb-5'>
            It's time to sync together
          </h2>
          <p className='text-[#555555] md:text-2xl xs:text-base font-medium'>
            It's time to sync together with Signaling
          </p>
          <div className='z-10 mt-10 flex md:justify-start xs:justify-center'>
            <GetStartedButton
              title='Get Started'
              padding='lg:px-7 lg:py-5 xs:px-6 xs:py-4'
              textSize='lg:text-xl xs:text-base'
            />
          </div>
        </div>

        <div className='grid grid-flow-row auto-rows-1fr gap-y-4 md:col-span-6 md:gap-y-8'>
          <div className='flex relative gap-10 justify-between'>
            <div className='md:sticky md:top-20 h-fit md:block hidden'>
              <div className='py-10 md:block hidden'>
                <div className='w-2 h-80 md:sticky top-[20%]  bg-white rounded-[20px] overflow-hidden mr-4'>
                  <motion.div
                    className='h-full bg-gradient-to-b from-[#ff7e62] to-[#ff4c24]  rounded-[20px]'
                    style={{
                      scaleY: scrollYProgress,
                      transformOrigin: "top",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-col'>
              {homeCardScrollScaleData.map(
                (item, index) => {
                  const targetScale =
                    1 -
                    (homeCardScrollScaleData.length -
                      index) *
                      0.05;
                  return (
                    <CardImage
                      key={index * 2}
                      data={item}
                      progress={scrollYProgress}
                      range={[index * 0.25, 1]}
                      targetScale={targetScale}
                      i={index}
                      dataLength={
                        homeCardScrollScaleData.length
                      }
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div> */}
    </motion.section>
  );
};

export default MainScrollCardSection;
