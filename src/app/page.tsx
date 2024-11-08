"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

/*components*/
import { Nav } from "@/components/Nav";
import { MainScrollCard } from "@/components/MainScrollCardSection";
import { GoArrowRight } from "react-icons/go";

export default function Home() {
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
          <p
            className="text-6xl text-center font-bold mb-4 z-10 leading-[81px] inline-block text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(275deg, #FBE4FE 25.48%, #FFE5C9 69.72%)",
            }}
          >
            Sound partnerships,
            <br />
            Sound individuals
          </p>
          <p className="text-[#E9E9E9] text-2xl font-normal z-10">
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
        <MainScrollCard />
        <section className="h-[100svh] bg-blue-500 flex justify-center items-center">
          <h1>Section 3</h1>
        </section>
      </main>
    </>
  );
}
