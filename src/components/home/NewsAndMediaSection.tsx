import React from "react";
import { newsAndMediaData } from "@/data/data";
import NewsMediaCard from "../NewsMediaCard";
import GetStartedButton from "../GetStartedButton";

const NewsAndMediaSection = () => {
  return (
    <section className="w-full py-c-15">
      <div className="container-xl">
        <h5 className="text-center md:text-5xl xs:text-3xl text-color-s-strong font-semibold mb-10">
          Featured news & media
        </h5>
        <div className="mt-10 flex justify-center mb-10">
          <GetStartedButton
            title="Show all"
            padding="lg:px-7 lg:py-5 xs:px-6 xs:py-4"
            textSize="lg:text-xl xs:text-base"
          />
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {newsAndMediaData.slice(0, 3).map((item, index) => (
            <NewsMediaCard key={index} data={item} className="col-span-1" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsAndMediaSection;
