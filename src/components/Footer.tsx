import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-[#f9f9f9]">
      <div className="container-xl flex flex-col items-center justify-center ">
        <Image
          src="/images/footerLogo.png"
          alt="Vespexx footer logo"
          width={95}
          height={18}
          priority
          className="mb-3"
        />
        <p className="text-[#5c5f6c] text-sm font-medium mb-8">
          © 2024 Vespexx. All rights reserved.
        </p>
        <div className="flex items-center justify-center">
          <span className="text-[#5c5f6c] text-sm font-normal">
            support@vespexx.com
          </span>
          <div className="px-6">
            <Image
              src="/images/v_divider.svg"
              alt="footer divider"
              width={1}
              height={0}
            />
          </div>
          <span className="text-[#5c5f6c] text-sm font-normal">FAQ</span>
          <div className="px-6">
            <Image
              src="/images/v_divider.svg"
              alt="footer divider"
              width={1}
              height={0}
            />
          </div>

          <span className="text-[#5c5f6c] text-sm font-normal">
            Privacy policy
          </span>
          <div className="px-6">
            <Image
              src="/images/v_divider.svg"
              alt="footer divider"
              width={1}
              height={0}
            />
          </div>
          <span className="text-[#5c5f6c] text-sm font-normal">
            Terms of service
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
