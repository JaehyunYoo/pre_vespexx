import React from "react";
import { GoArrowRight } from "react-icons/go";

interface GetStartedButtonProps {
  title: string;
  link?: string;
  padding?: string;
  textSize?: string;
}

const GetStartedButton = ({
  title,
  link,
  padding,
  textSize,
}: GetStartedButtonProps) => {
  return (
    <div
      className={`${
        padding ?? "px-6 py-4"
      } bg-gradient-to-r from-gradient-start to-gradient-end hover:from-gradient-hover hover:to-gradient-hover-end transition-colors duration-500 ease-in-out rounded-[100px] flex items-center justify-center`}
    >
      <p
        className={`text-white ${
          textSize ?? "text-base"
        } font-bold`}
      >
        {title}
      </p>
      <GoArrowRight
        color='white'
        size={24}
        className='ml-2'
      />
    </div>
  );
};

export default GetStartedButton;
