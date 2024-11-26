"use client";

import React from "react";

const CoupleLifeStyleSection = () => {
  return (
    <section className='bg-color-s-light-bg py-c-15'>
      <div className='container-xl'>
        <p className='text-2xl font-semibold text-[#ff7e62] text-center mb-8'>
          In just 7 months
        </p>
        <h5 className='md:text-5xl xs:text-3xl font-semibold text-[#1e1e1e] text-center md:mb-32 xs:mb-14'>
          Transform couple's daily life at a rapid pace
        </h5>
        <div className='grid lg:grid-cols-3 gap-x-10 gap-y-8 '>
          <div className='bg-white rounded-[20px] md:p-10'>
            <CoupleLifeStyleCard
              value='71'
              type='%'
              title='Week 1 Retention'
              description='71% of users return the following week after their first visit, and over 50% of clients come back even six weeks later, making it an addictive service.'
            />
          </div>
          <div className='bg-white rounded-[20px] md:p-10'>
            <CoupleLifeStyleCard
              value='320'
              type='k'
              title='Total Users'
              description='Growing at an impressive pace, with an average monthly growth rate of 110%.'
            />
          </div>
          <div className='bg-white rounded-[20px] md:p-10'>
            <CoupleLifeStyleCard
              value='150'
              type='k'
              title='MAU'
              description='Over 150K users use Signaling every month, showing that this service is consistently valuable to our clients.'
            />
          </div>
        </div>
      </div>
      {/* <div className='container px-20'>
        <span className='text-center text-[#ff7e62] md:text-2xl xs:text-lg font-semibold mb-8 block'>
          Only in 7 months
        </span>
        <h5 className='text-center text-[#1e1e1e] md:text-5xl xs:text-3xl font-semibold'>
          Transforming couples' lifestyles at a rapid pace
        </h5>

        <div className='flex gap-10 mt-[7.5rem]'>
          <CoupleLifeStyleCard
            value='71'
            type='%'
            title='Week 1 Retention'
            description='71% of users return the following week after their first visit, and over 50% of clients come back even six weeks later, making it an addictive service.'
          />
          <CoupleLifeStyleCard
            value='320'
            type='k'
            title='Total Users'
            description='capturing the market at an incredibly fast pace, with an average monthly growth rate of 110%'
          />
          <CoupleLifeStyleCard
            value='150'
            type='k'
            title='MAU'
            description='75% of all users use signaling every month, proving that this is a consistently necessary service for our clients'
          />
        </div>
      </div> */}
    </section>
  );
};

export default CoupleLifeStyleSection;

const CoupleLifeStyleCard = ({
  value,
  type,
  title,
  description,
}: {
  value: string;
  title: string;
  type: string;
  description: string;
}) => {
  return (
    <div className='h-full xl:p-10 xs:p-6 bg-white rounded-[20px] lg:h-[386px] md:h-[310px] xs:h-[250px]'>
      <div className='flex items-start mb-4'>
        <span className='text-[#29292f] md:text-6xl xs:text-4xl font-bold'>
          {value}
        </span>
        <span className='text-[#727582] md:text-4xl xs:text-2xl font-semibold'>
          {type}
        </span>
      </div>
      <h6 className='text-[#29292f] md:text-2xl xs:text-xl font-bold mb-4'>
        {title}
      </h6>
      <p className='text-[#5c5f6c] md:text-xl xs:text-sm font-medium flex-grow'>
        {description}
      </p>
    </div>
  );
};
