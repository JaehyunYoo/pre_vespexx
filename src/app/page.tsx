"use client";
import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
/*components*/
import { Nav } from "@/components/Nav";
import { MainScrollCard } from "@/components/MainScrollCard";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const data = [
    "/images/test1.svg",
    "/images/test2.svg",
    "/images/test3.svg",
    "/images/test4.svg",
  ];
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

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
        <div className="my-[50vh]" />
        <section className="flex " ref={containerRef}>
          <div className="w-full h-[100vh] flex justify-center items-center sticky top-0">
            왼쪽 속성
          </div>
          <div>
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
        </section>
      </main>
    </>
  );
}
