"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
/*components*/
import { Nav } from "@/components/Nav";
import { MainScrollCard } from "@/components/MainScrollCard";
import { GoArrowRight } from "react-icons/go";

export default function Home() {
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
      "rgb(164, 223, 166)", // slate-500
      "rgb(99, 102, 241)", // indigo-500
      "rgb(168, 85, 247)", // purple-500
      "rgb(236, 72, 153)", // pink-500
    ]
  );

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Nav />
      <main>
        <section className="h-[100svh] relative flex flex-col justify-center items-center ">
          <p className="text-6xl text-center font-bold mb-4 z-10 text-[#fbe4fe] leading-[81px]">
            Sound partnerships,
            <br />
            Sound individuals
          </p>
          <p className="text-white text-2xl font-normal z-10">
            Empowering the Most Intimate Relationship to Be Healthier
          </p>
          <div className="z-10 h-[4.5rem] mt-[2.5rem] px-7 py-5 bg-gradient-to-r from-gradient-start to-gradient-end rounded-[80px] justify-center items-center gap-2.5 inline-flex">
            <p className="text-center text-white text-[21px] font-bold font-['Pretendard JP'] leading-loose">
              Get Started
            </p>
            <GoArrowRight color="white" size={24} />
          </div>
          <video
            src="https://firebasestorage.googleapis.com/v0/b/vespexx-signal-dev-4c404.appspot.com/o/video%2F980016f30ddfab24c29dc34429a1d651adaf25a5.mp4?alt=media&token=31895565-a597-4616-aedd-6e9540cdc66a"
            autoPlay
            muted
            loop
            preload="auto"
            className="w-full absolute top-0 left-0 h-full object-cover overscroll-none"
          />
        </section>
        <motion.section
          style={{ backgroundColor }}
          className="transition-colors duration-300 ease-in-out "
          ref={containerRef}
        >
          <div className="max-w-[1440px] flex mx-auto py-[23svh]">
            {/* 스크롤 바 */}
            <div className="w-full h-[100vh] flex justify-between pt-[18svh] sticky top-0">
              <div>
                <div className="relative w-[100px] h-[100px]">
                  <Image src="/images/whiteLogo.svg" alt="image" fill />
                </div>
                <h2 className="text-[#29292f] text-5xl font-semibold py-10">
                  It’s time to signaling
                </h2>
                <p className="text-[#777777] text-2xl font-medium">
                  It's time to be closer & healthier
                </p>
                <div className="z-10 h-[4.5rem] mt-[2.5rem] px-7 py-5 bg-gradient-to-r from-gradient-start to-gradient-end rounded-[80px] justify-center items-center gap-2.5 inline-flex">
                  <p className="text-center text-white text-[21px] font-bold font-['Pretendard JP'] leading-loose">
                    Get Started
                  </p>
                  <GoArrowRight color="white" size={24} />
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
            <div className="pl-4 w-full">
              {/* 카드 */}

              {data.map((item, index) => {
                const targetScale = 1 - (data.length - index) * 0.05;
                return (
                  <MainScrollCard
                    key={index * 2}
                    imageSrc={item}
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
        <section className="h-[100svh] bg-blue-500 flex justify-center items-center">
          <h1>Section 3</h1>
        </section>
      </main>
    </>
  );
}
