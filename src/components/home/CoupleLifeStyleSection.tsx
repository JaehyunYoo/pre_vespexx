"use client";

import React from "react";

const CoupleLifeStyleSection = () => {
  return (
    <section className="bg-[#F3F6FB] py-[15rem]">
      <div className="container-xl">
        <span className="text-center text-[#ff7e62] text-2xl font-semibold mb-8 block">
          Only in 7 months
        </span>
        <h5 className="text-center text-[#1e1e1e] text-5xl font-semibold">
          Changing couple's lifestyle rapidly
        </h5>

        <div className="flex gap-10 mt-[7.5rem]">
          <CoupleLifeStyleCard
            value="71"
            type="%"
            title="Week 1 Retention"
            description="71% of users return the following week after their first visit, and over 50% of clients come back even six weeks later, making it an addictive service."
          />
          <CoupleLifeStyleCard
            value="320"
            type="k"
            title="Total Users"
            description="capturing the market at an incredibly fast pace, with an average monthly growth rate of 110%"
          />
          <CoupleLifeStyleCard
            value="150"
            type="k"
            title="MAU"
            description="75% of all users use signaling every month, proving that this is a consistently necessary service for our clients"
          />
        </div>
      </div>
    </section>
  );
};

export default CoupleLifeStyleSection;

const CoupleLifeStyleCard = ({
  value,
  type,
  title,
  description,
}: {
  value: string;
  title: string;
  type: string;
  description: string;
}) => {
  return (
    <div className="w-full p-10 bg-white rounded-[20px]">
      <div className="flex items-start mb-12">
        <span className="text-[#29292f] text-6xl font-bold">{value}</span>
        <span className="text-[#727582] text-4xl font-semibold">{type}</span>
      </div>
      <h6 className="text-[#29292f] text-[28px] font-bold mb-7">{title}</h6>
      <p className="text-[#5c5f6c] text-xl font-medium">{description}</p>
    </div>
  );
};
