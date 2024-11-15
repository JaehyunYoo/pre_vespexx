import React from "react";
import Image from "next/image";
import { CoupleDynamicsDataProps } from "@/data/data";

const CardUi = ({ data }: { data: CoupleDynamicsDataProps }) => {
  return (
    <div className="bg-white col-span-1 text-center flex flex-col justify-center items-center px-7 py-16 rounded-3xl">
      <Image
        src={data.icon}
        alt="image"
        width={100}
        height={100}
        className="mb-7"
        priority
      />
      <h5
        className="md:text-2xl  font-semibold text-black text-center mb-6"
        style={{
          letterSpacing: "-0.48px",
        }}
      >
        {data.title}
      </h5>
      <p
        className="text-center text-[#777777] text-base font-medium"
        style={{
          letterSpacing: "-0.34px",
        }}
      >
        {data.description}
      </p>
    </div>
  );
};

export default CardUi;
// <div className="flex-1 flex flex-col justify-center items-center px-7 py-16 rounded-3xl bg-white">
{
  /* <Image
        src={data.icon}
        alt="image"
        width={100}
        height={100}
        className="mb-7"
        priority
      /> */
}
{
  /* <span className="text-2xl font-semibold text-black text-center mb-6">
        {data.title}
      </span>
      <p className="text-center text-[#777777] text-[17px] font-medium">
        {data.description}
      </p>
    </div> */
}
