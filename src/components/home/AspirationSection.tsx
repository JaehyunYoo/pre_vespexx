import React from "react";
import Image from "next/image";

const AspirationSection = () => {
  return (
    <section className='w-full h-full max-w-[1920px] mx-auto'>
      <div className='grid lg:grid-cols-12 h-full'>
        <div className='col-span-6 bg-gradient-to-r from-[#ff9328] to-[#feb061] md:py-[12rem] xs:py-10'>
          <div className='lg:max-w-[500px] xs:max-w-full xs:mx-auto'>
            <h6 className='text-white md:text-5xl xs:text-2xl xs:px-4 font-semibold md:text-left xs:text-center'>
              Empowering relationships to grow stronger in
              every way—driven by a dedicated team, united
              in purpose and committed to excellence.
              <span className='lg:text-4xl xs:text-2xl font-semibold mt-20 block'>
                J.W. Jung
              </span>
            </h6>
          </div>
        </div>
        <div className='col-span-6 bg-red-700 relative lg:h-full md:h-[600px] xs:h-[400px] '>
          <Image
            src='/images/home/mood.png'
            alt='aspiration-right'
            className='object-cover'
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default AspirationSection;
