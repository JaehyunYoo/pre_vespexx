"use client";

import React from "react";
import Image from "next/image";
import {
  coupleDynamicsDataFirst,
  coupleDynamicsDataSecond,
} from "@/data/data";
import CardUi from "../CardUi";

const CoupleDynamicsSection = () => {
  return (
    <section className='w-full py-c-15 bg-color-s-light-bg-2'>
      <div className='container-xl'>
        <div className='flex flex-col items-center'>
          {/* Logo Icon*/}
          <div className='md:w-32 md:h-32 xs:w-24 xs:h-24 relative rounded-3xl mb-10 drop-shadow-custom'>
            <Image
              src='/images/icons/signaling_logo.png'
              alt='signaling white logo'
              fill
              priority
            />
          </div>
          {/* Title */}
          <h3 className='text-center text-color-s-strong md:text-5xl xs:text-[28px] font-semibold mb-8'>
            Make Relationships <br />
            More Dynamic and Connected
          </h3>
          {/* Description */}
          <p className='text-center text-color-s-neutral md:text-xl xs:text-base font-medium tracking-custom'>
            Using intelligent tools, expert content, and
            personalized guidance to strengthen
            relationships
          </p>
          {/* Content 01 */}
          <div className='w-full md:pt-[12.5rem] lg:px-0 md:px-8 xs:px-0 xs:pt-16'>
            <h4 className='text-center text-color-s-accent md:text-4xl xs:text-xl font-semibold mb-12'>
              {coupleDynamicsDataFirst.title}
            </h4>
            <div className='w-full grid lg:grid-cols-3 xs:grid-cols-1 gap-6'>
              {coupleDynamicsDataFirst.data.map(
                (data, i) => {
                  return <CardUi key={i} data={data} />;
                }
              )}
            </div>
          </div>
          {/* Content 02 */}
          <div className='w-full md:pt-[12.5rem] xs:pt-16 lg:px-0 md:px-8 xs:px-0'>
            <h4 className='text-center text-color-s-accent md:text-4xl xs:text-[28px] font-semibold mb-12'>
              {coupleDynamicsDataSecond.title}
            </h4>
            <div className='w-full grid lg:grid-cols-3 xs:grid-cols-1 gap-6'>
              {coupleDynamicsDataSecond.data.map(
                (data, i) => {
                  return <CardUi key={i} data={data} />;
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleDynamicsSection;
