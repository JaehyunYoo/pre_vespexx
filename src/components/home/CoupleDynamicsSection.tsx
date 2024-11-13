"use client";

import React from "react";
import Image from "next/image";
import { coupleDynamicsDataFirst, coupleDynamicsDataSecond } from "@/data/data";
import CardUi from "../CardUi";

const CoupleDynamicsSection = () => {
  return (
    <section className="py-[15rem] bg-[#F9FBFD]">
      <div className="container-xl">
        <div className="flex flex-col items-center">
          {/* Logo Icon*/}
          <div className="w-32 h-32 relative rounded-3xl shadow mb-10">
            <Image src="/images/whiteLogo.svg" alt="image" fill />
          </div>
          {/* Title */}
          <h3 className="text-center text-[#1e1e1e] text-5xl font-semibold mb-8">
            Revolutionizing couple dynamics
          </h3>
          {/* Description */}
          <p className="text-center text-[#777777] text-xl font-medium">
            with intelligent tools, expert contents, and personalized therapy
            for enduring relationships
          </p>
          {/* Content 01 */}
          <div className="pt-[12.5rem]">
            <h4 className="text-center text-[#ff7f63] text-4xl font-semibold mb-12 ">
              {coupleDynamicsDataFirst.title}
            </h4>
            <div className="w-full flex gap-10">
              {coupleDynamicsDataFirst.data.map((data, i) => {
                return <CardUi key={i} data={data} />;
              })}
            </div>
          </div>
          {/* Content 02 */}
          <div className="pt-[12.5rem]">
            <h4 className="text-center text-[#ff7f63] text-4xl font-semibold mb-12">
              {coupleDynamicsDataSecond.title}
            </h4>
            <div className="w-full flex gap-8">
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
