import React from "react";
import Image from "next/image";
import { CoupleDynamicsDataProps } from "@/data/data";

const CardUi = ({ data }: { data: CoupleDynamicsDataProps }) => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center px-7 py-16 rounded-3xl bg-white">
      <Image
        src={data.icon}
        alt="image"
        width={100}
        height={100}
        className="mb-7"
        priority
      />
      <h5 className="text-2xl font-semibold text-black text-center mb-6">
        {data.title.includes("\n") ? (
          <>
            {data.title.split("\n")[0]}
            <br />
            {data.title.split("\n")[1]}
          </>
        ) : (
          data.title
        )}
      </h5>
      <p className="text-center text-[#777777] text-[17px] font-medium">
        {data.description}
      </p>
    </div>
  );
};

export default CardUi;
