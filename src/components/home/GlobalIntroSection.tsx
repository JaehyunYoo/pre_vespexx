import React from "react";
import Image from "next/image";

const GlobalIntroSection = () => {
  return (
    <section className="w-full md:py-60 xs:py-16 md:px-0 xs:px-4">
      <div className="container mx-auto md:px-0 xs:px-4">
        <span className="text-center text-[#ff7e62] md:text-2xl xs:text-xl font-semibold mb-8 block">
          Trusted by users in 100+ countries
        </span>
        <h5 className="text-center text-[#1e1e1e] md:text-5xl xs:text-3xl font-semibold md:mb-0 xs:mb-14">
          Connecting More Couples Worldwide
        </h5>
        <div className="relative w-full h-full md:aspect-[375/280]  md:block hidden">
          <Image
            src="/images/home/global_section.png"
            alt="global-intro"
            priority
            fill
            className="object-cover "
          />
        </div>
      </div>
      <Image
        src="/images/home/m_global.png"
        alt="global-intro"
        priority
        width={375}
        height={280}
        className="object-cover md:hidden block w-full"
      />
    </section>
  );
};

export default GlobalIntroSection;
