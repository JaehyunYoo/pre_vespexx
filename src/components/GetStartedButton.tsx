import React from "react";
import { GoArrowRight } from "react-icons/go";

const GetStartedButton = () => {
  return (
    <div className="mt-10 inline-flex items-center justify-center px-7 py-5 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end">
      <p className="text-white text-[21px] font-bold">Get Started</p>
      <GoArrowRight color="white" size={24} className="ml-2" />
    </div>
  );
};

export default GetStartedButton;
