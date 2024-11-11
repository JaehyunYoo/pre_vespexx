import React from "react";
import Image from "next/image";

const CardUi = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center px-7 py-16 rounded-3xl shadow">
      <Image
        src="/images/calendar.svg"
        alt="image"
        width={100}
        height={100}
        className="mb-7"
      />
      <h5 className="text-2xl font-semibold text-black text-center mb-6">
        Calendar Theme <br />
        Customization
      </h5>
      <p className="text-center text-[#777777] text-[17px] font-medium">
        Manage your schedules according to your preferences
      </p>
    </div>
  );
};

export default CardUi;
