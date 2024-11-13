import React from "react";
import Image from "next/image";
import MaxContainer from "../MaxContainer";

const AspirationSection = () => {
  return (
    <section className="w-full max-w-[1920px] mx-auto bg-gradient-to-r from-[#ff9328] to-[#feb061] py-[17rem] relative">
      <div className="container-xl flex ">
        <div className="flex-1">
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
        <div className="absolute top-0 right-0 h-full">
          <Image
            src="/images/aspiration_right.svg"
            alt="aspiration-right"
            className="h-full w-auto object-contain object-right"
            width={1024}
            height={960}
          />
        </div>
      </div>
    </section>
  );
};

export default AspirationSection;
