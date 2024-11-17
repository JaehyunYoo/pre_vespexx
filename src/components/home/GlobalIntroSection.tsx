import React from "react";
import Image from "next/image";

const GlobalIntroSection = () => {
  return (
    <section className='w-full py-c-15'>
      <div className='container mx-auto md:px-0 xs:px-4'>
        <span className='text-center text-[#ff7e62] md:text-2xl xs:text-xl font-semibold mb-8 block'>
          Use in 77 countries
        </span>
        <h5 className='text-center text-[#1e1e1e] md:text-5xl xs:text-3xl font-semibold md:mb-0 xs:mb-14'>
          Connecting More Couples Worldwide
        </h5>
        <div className='relative w-full h-full aspect-[16/9]'>
          <Image
            src='/images/home/m_global_section.png'
            alt='global-intro'
            priority
            fill
            className='object-cover md:hidden block'
          />
          <Image
            src='/images/home/global_section.png'
            alt='global-intro'
            priority
            fill
            className='object-cover md:block hidden'
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalIntroSection;
