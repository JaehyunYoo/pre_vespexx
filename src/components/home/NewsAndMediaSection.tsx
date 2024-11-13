import React from "react";
import { GoArrowRight } from "react-icons/go";
import MaxContainer from "../MaxContainer";
import { newsAndMediaData } from "@/data/data";
import NewsMediaCard from "../NewsMediaCard";

const NewsAndMediaSection = () => {
  return (
    <section className="w-full py-[12.5rem]">
      <MaxContainer>
        <h5 className="text-center text-5xl text-[#1e1e1e] font-semibold mb-10">
          Featured news & media
        </h5>
        <div className="flex justify-center mb-[6.2rem]">
          <div className="mt-10 inline-flex items-center justify-center px-7 py-5 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end">
            <p className="text-white text-[21px] font-bold">Show all</p>
            <GoArrowRight color="white" size={24} className="ml-2" />
          </div>
        </div>
        <div className="flex px-20 justify-center gap-8">
          {newsAndMediaData.slice(0, 3).map((item, index) => (
            <NewsMediaCard key={index} data={item} />
          ))}
        </div>
      </MaxContainer>
     
    </section>
  );
};

export default NewsAndMediaSection;
