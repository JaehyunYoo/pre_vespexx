"use client";
import React, { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { linkData } from "@/data/data";
interface GetStartedButtonProps {
  title: string;
  link?: string;
  padding?: string;
  textSize?: string;
}

const GetStartedButton = ({
  title,
  padding,
  textSize,
}: GetStartedButtonProps) => {
  const [link, setLink] = useState("");
  useEffect(() => {
    handleStoreRedirect();
  }, []);

  const handleStoreRedirect = () => {
    const userAgent = navigator.userAgent;
    const isAndroid = /Android/i.test(userAgent);
    const isiOS = /iPhone|iPad|iPod/i.test(userAgent);
    const isWindows = /Windows/i.test(userAgent);
    const isMac = /Macintosh/i.test(userAgent);
    let link = "";

    if (isAndroid) {
      link = linkData.android;
    } else if (isiOS) {
      link = linkData.ios;
    } else if (isWindows) {
      link = linkData.android;
    } else if (isMac) {
      link = linkData.ios;
    }
    setLink(link);
  };
  return (
    <Link
      href={link ?? ""}
      target='_blank'
      className={`${
        padding ?? "px-6 py-4"
      } bg-gradient-to-r from-gradient-start to-gradient-end hover:from-gradient-hover hover:to-gradient-hover-end transition-colors duration-500 ease-in-out rounded-[100px] flex items-center justify-center`}
    >
      <p
        className={`text-white ${
          textSize ?? "text-base"
        } font-bold inline-block`}
      >
        {title}
      </p>
      <GoArrowRight
        color='white'
        size={24}
        className='ml-2'
      />
    </Link>
  );
};

export default GetStartedButton;
