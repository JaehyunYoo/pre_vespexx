"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GetStartedButton from "../GetStartedButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { MdClose } from "react-icons/md";
import PopUp from "../popup/PopUp";

const MainVideoSection = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(
    null
  );
  // 슬라이드 총 개수
  const totalSlides = 2;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const handleScroll = (e: TouchEvent | WheelEvent) => {
      if (showPopup) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    if (showPopup) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      document.body.style.touchAction = "none";

      // 이벤트 리스너 추가
      document.addEventListener("wheel", handleScroll, {
        passive: false,
      });
      document.addEventListener("touchmove", handleScroll, {
        passive: false,
      });
    } else {
      document.body.style.overflow = "unset";
      document.body.style.height = "auto";
      document.body.style.touchAction = "auto";

      // 이벤트 리스너 제거
      document.removeEventListener("wheel", handleScroll);
      document.removeEventListener(
        "touchmove",
        handleScroll
      );
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.height = "auto";
      document.body.style.touchAction = "auto";
      document.removeEventListener("wheel", handleScroll);
      document.removeEventListener(
        "touchmove",
        handleScroll
      );
    };
  }, [showPopup]);
  const customStyles = `
    .swiper-button-next,
    .swiper-button-prev {
      color: white; /* 화살표 색상 */
      width: 50px; /* 화살표 영역 크기 */
      height: 50px;
    }

    .swiper-button-next:after,
    .swiper-button-prev:after {
      font-size: 24px; /* 화살표 아이콘 크기 */
    }
  `;

  const customPaginationButtons = () => {
    return Array.from({ length: totalSlides }).map(
      (_, index) => (
        <button
          key={index}
          onClick={() => swiper?.slideTo(index)}
          className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
            activeIndex === index
              ? "bg-gradient-start" // 활성화된 버튼 스타일
              : "bg-white" // 비활성화된 버튼 스타일
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      )
    );
  };

  return (
    <section
      id='aspiration-section'
      className='h-[100vh] relative flex flex-col justify-center items-center'
    >
      <PopUp />
      {/* <style>{customStyles}</style>
      
      {showPopup && (
        <div className='absolute top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black/60'>
          <div className='w-full max-w-[650px]'>
            <div className='flex justify-between px-16 py-4'>
              <div className='rounded-full w-8 h-8' />
              <div>
                <div className='w-full '>
                  {customPaginationButtons()}
                </div>
              </div>
              <div
                className='w-8 h-8 bg-[#2E2E2E] rounded-full flex items-center justify-center'
                onClick={() => setShowPopup(false)}
              >
                <MdClose className='text-white' size={24} />
              </div>
            </div>

            <Swiper
              onSwiper={setSwiper}
              onSlideChange={(swiper) =>
                setActiveIndex(swiper.activeIndex)
              }
              navigation={true}
              modules={[Navigation]}
            >
              <SwiperSlide className='flex items-center justify-center'>
                <Image
                  src='/images/home/carousel_1.svg'
                  alt='video_bg'
                  width={520}
                  height={650}
                  className='object-cover mx-auto'
                />
              </SwiperSlide>
              <SwiperSlide className='flex items-center justify-center'>
                <Image
                  src='/images/home/carousel_1.svg'
                  alt='video_bg'
                  width={520}
                  height={650}
                  className='object-cover mx-auto'
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      )} */}
      {/* <Swiper
          pagination={{
                dynamicBullets: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="w-full h-full"
            >
              <SwiperSlide className="flex items-center justify-center"
                <div className="relative w-[560px] h-[650px] aspect-ratio-[16/9]">
                  <Image
                    src="/images/home/carousel_1.svg"
                    alt="video_bg"
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                Slide 2
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                Slide 3
              </SwiperSlide>
            </Swiper> */}

      <motion.div
        className='w-full text-center z-10'
        initial={{ filter: "blur(20px)", opacity: 0 }}
        animate={{
          filter: "blur(0px)",
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
      >
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
        <motion.p className='text-[#E9E9E9] lg:text-2xl md:px-0 xs:px-4 xs:text-base font-normal z-10'>
          Helping couples build healthier relationships
        </motion.p>
      </motion.div>
      <motion.div
        className='z-10 mt-10'
        initial={{ filter: "blur(20px)", opacity: 0 }}
        animate={{
          filter: "blur(0px)",
          opacity: 1,
        }}
        transition={{ duration: 0.7 }}
      >
        <GetStartedButton
          title='Get Started'
          padding='lg:px-7 lg:py-5 xs:px-6 xs:py-4'
          textSize='lg:text-xl xs:text-base'
        />
      </motion.div>
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
