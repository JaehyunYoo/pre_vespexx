import React from "react";
import Image from "next/image";
import MaxContainer from "../MaxContainer";

const AspirationSection = () => {
  return (
    <section className="w-full max-w-[1920px] h-[88vh] mx-auto relative">
      <div className="w-full h-full flex justify-between">
        <div className="w-[46%] h-full bg-gradient-to-r from-[#ff9328] to-[#feb061] relative flex flex-col items-end justify-center">
          <div className="pr-[3.2rem]">
            <h6 className="text-white text-5xl font-semibold">
              We are committed to
              <br />
              fostering and supporting
              <br />
              the next wave of
              <br />
              groundbreaking
              <br />
              innovators.
            </h6>
            <p className="text-white text-4xl font-semibold mt-20">J.W. Jung</p>
          </div>
        </div>
        <div className="relative w-[54%] h-full">
          <Image
            src="/images/home/mood.png"
            alt="aspiration-right"
            className="object-cover"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default AspirationSection;
