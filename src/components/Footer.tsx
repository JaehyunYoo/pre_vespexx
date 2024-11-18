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
        <p className="text-[#5c5f6c] text-sm font-medium md:mb-8 xs:mb-4">
          © 2024 Vespexx, Inc.
        </p>
        <div className="flex items-center justify-center md:block xs:hidden">
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

        {/**(mobile footer) */}
        <div className="md:hidden xs:block mt-3">
          <div className="flex items-center justify-center">
            <span className="text-[#5c5f6c] text-sm font-normal">FAQ</span>
            <div className="px-4">
              <Image
                src="/images/v_divider.svg"
                alt="footer divider"
                width={1}
                height={0}
              />
            </div>
            <span className="text-[#5c5f6c] text-sm font-normal">
              support@vespexx.com
            </span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-[#5c5f6c] text-sm font-normal">
              Privacy policy
            </span>
            <div className="px-4">
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
      </div>
    </footer>
  );
};

export default Footer;
