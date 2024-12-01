"use client";
import React from "react";
import GetStartedButton from "../GetStartedButton";
import PopUp from "../popup/PopUp";

const MainVideoSection = () => {
  return (
    <section
      id='aspiration-section'
      className='h-[100svh] relative flex flex-col justify-center items-center'
    >
      <PopUp />

      <div className='w-full text-center z-10'>
        <p
          className='lg:text-6xl xs:text-4xl text-center font-bold mb-4 z-10  inline-block text-transparent bg-clip-text'
          style={{
            backgroundImage:
              "linear-gradient(275deg, #FBE4FE 25.48%, #FFE5C9 69.72%)",
          }}
        >
          Stay in Sync
          <br />
          with the One you Love
        </p>
        <p className='text-[#E9E9E9] lg:text-2xl md:px-0 xs:px-4 xs:text-base font-normal z-10'>
          Helping couples build healthier relationships
        </p>
      </div>
      <div className='z-10 mt-10'>
        <GetStartedButton
          title='Get Started'
          padding='lg:px-7 lg:py-5 xs:px-6 xs:py-4'
          textSize='lg:text-xl xs:text-base'
        />
      </div>
      <video
        src='https://firebasestorage.googleapis.com/v0/b/vespexx-signal-dev-4c404.appspot.com/o/video%2Fmain.mp4?alt=media&token=d46ff5ba-ecc0-4811-9db9-2a27086f7424'
        autoPlay
        muted
        loop
        playsInline
        poster='/images/home/video_bg.png'
        preload='auto'
        className='w-full absolute top-0 left-0 h-full object-cover overscroll-none'
      />
    </section>
  );
};

export default MainVideoSection;
