"use client";

import React from "react";
import Image from "next/image";
import { coupleDynamicsDataFirst, coupleDynamicsDataSecond } from "@/data/data";
import CardUi from "../CardUi";

const CoupleDynamicsSection = () => {
  return (
    <section className="md:py-[15rem] xs:py-16 bg-[#F9FBFD]">
      <div className="md:container-xl xs:container xs:mx-auto">
        <div className="flex flex-col items-center">
          {/* Logo Icon*/}
          <div className="md:w-32 md:h-32 xs:w-24 xs:h-24 relative rounded-3xl shadow mb-10 ">
            <Image
              src="/images/signalingWhiteLogo.png"
              alt="signaling white logo"
              fill
              priority
            />
          </div>
          {/* Title */}
          <h3 className="text-center text-[#1e1e1e] md:text-5xl xs:text-[28px] font-semibold mb-8 ">
            Making Relationships
            <br />
            More Dynamic and Connected
          </h3>
          {/* Description */}
          <p className="text-center text-[#777777] md:text-xl xs:text-base font-medium tracking-custom px-4">
            Using intelligent tools, expert content, and personalized guidance
            to strengthen relationships
          </p>
          {/* Content 01 */}
          <div className="w-full md:pt-[12.5rem] xs:pt-16">
            <h4 className="text-center text-[#ff7f63] md:text-4xl xs:text-xl font-semibold mb-12 px-4">
              {coupleDynamicsDataFirst.title}
            </h4>
            <div className="w-full grid lg:grid-cols-3 xs:grid-cols-1 gap-6 xs:px-4">
              {coupleDynamicsDataFirst.data.map((data, i) => {
                return <CardUi key={i} data={data} />;
              })}
            </div>
          </div>
          {/* Content 02 */}
          <div className="md:pt-[12.5rem] xs:pt-16">
            <h4 className="text-center text-[#ff7f63] md:text-4xl xs:text-[28px] font-semibold mb-12 px-4">
              {coupleDynamicsDataSecond.title}
            </h4>
            <div className="w-full grid lg:grid-cols-3 xs:grid-cols-1 gap-6 xs:px-4">
              {coupleDynamicsDataSecond.data.map((data, i) => {
                return <CardUi key={i} data={data} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleDynamicsSection;
