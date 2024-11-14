import React from "react";
import Image from "next/image";

const GlobalIntroSection = () => {
  return (
    <section className="w-full py-[15rem]">
      <div className="container-xl">
        <span className="text-center text-[#ff7e62] text-2xl font-semibold mb-8 block">
          Use in 77 countries
        </span>
        <h5 className="text-center text-[#1e1e1e] text-5xl font-semibold mb-[7.5rem]">
          Wide-spreading to reach the world
        </h5>
        <Image
          src="/images/home/global_section.png"
          alt="global-intro"
          width={1360}
          height={955}
        />
      </div>
    </section>
  );
};

export default GlobalIntroSection;
