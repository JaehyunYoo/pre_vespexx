import React from "react";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";

const NewsAndMediaSection = () => {
  return (
    <section className="w-full py-[12.5rem]">
      <div className="container-xl">
        <h5 className="text-center text-5xl text-[#1e1e1e] font-semibold mb-10">
          Featured news & media
        </h5>
        <div className="flex justify-center">
          <div className="mt-10 inline-flex items-center justify-center px-7 py-5 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end">
            <p className="text-white text-[21px] font-bold">Show all</p>
            <GoArrowRight color="white" size={24} className="ml-2" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-10 mt-20">
          <Image
            src="/mock2.svg"
            alt="news-media-bg"
            width={360}
            height={452}
          />
          <Image
            src="/mock2.svg"
            alt="news-media-bg"
            width={360}
            height={452}
          />
          <Image
            src="/mock2.svg"
            alt="news-media-bg"
            width={360}
            height={452}
          />
        </div>
      </div>
    </section>
  );
};

export default NewsAndMediaSection;

const NewMediaCard = () => {
  return <div>NewMediaCard</div>;
};
