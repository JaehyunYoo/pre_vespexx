"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
/*components*/
import { MainScrollCard } from "@/components/home/MainScrollCardSection";
import CardUi from "@/components/CardUi";
import Footer from "@/components/Footer";
import { Nav } from "@/components/Nav";

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
            src="https://firebasestorage.googleapis.com/v0/b/vespexx-signal-dev-4c404.appspot.com/o/video%2Fmain.mp4?alt=media&token=d46ff5ba-ecc0-4811-9db9-2a27086f7424"
            autoPlay
            muted
            loop
            playsInline
            className="w-full absolute top-0 left-0 h-full object-cover overscroll-none"
          />
        </section>
        <MainScrollCard />
        <section className=" w-full flex flex-col justify-center items-center py-[15rem]">
          <div className="w-32 h-32 relative rounded-3xl shadow mb-10">
            <Image src="/images/whiteLogo.svg" alt="image" fill />
          </div>
          <h4 className="text-center text-[#1e1e1e] text-5xl font-semibold mb-8">
            Revolutionizing couple dynamics
          </h4>
          <div className="text-center text-[#777777] text-xl font-medium leading-7 mb-[12.5rem]">
            with intelligent tools, expert contents, and personalized therapy
            for enduring relationships
          </div>
          <h4 className="text-center text-[#ff7f63] text-4xl font-semibold mb-10">
            Bring us closer together
          </h4>
          <div className="w-full container-xl flex gap-10">
            <CardUi />
            <CardUi />
            <CardUi />
          </div>
        </section>
        <section className=" w-full flex flex-col justify-center items-center py-[15rem]">
          <div className="w-32 h-32 relative rounded-3xl shadow mb-10">
            <Image src="/images/whiteLogo.svg" alt="image" fill />
          </div>
          <h4 className="text-center text-[#1e1e1e] text-5xl font-semibold mb-8">
            Revolutionizing couple dynamics
          </h4>
          <div className="text-center text-[#777777] text-xl font-medium leading-7 mb-[12.5rem]">
            with intelligent tools, expert contents, and personalized therapy
            for enduring relationships
          </div>
          <h4 className="text-center text-[#ff7f63] text-4xl font-semibold mb-10">
            Bring us closer together
          </h4>
          <div className="w-full container-xl flex gap-10">
            <CardUi />
            <CardUi />
            <CardUi />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
