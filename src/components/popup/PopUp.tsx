"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { popUpDate } from "@/data/data";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const PopUp = () => {
  // 슬라이드 총 개수
  const totalSlides = 2;
  const [showPopup, setShowPopup] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [swiper, setSwiper] = useState<SwiperType | null>(
    null
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024 ? true : false);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    setShowPopup(true);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   const handleScroll = (e: TouchEvent | WheelEvent) => {
  //     if (showPopup) {
  //       e.preventDefault();
  //       e.stopPropagation();
  //     }
  //   };

  //   if (showPopup) {
  //     document.body.style.overflow = "hidden";
  //     document.body.style.height = "100vh";
  //     document.body.style.touchAction = "none";

  //     // 이벤트 리스너 추가
  //     document.addEventListener("wheel", handleScroll, {
  //       passive: false,
  //     });
  //     document.addEventListener("touchmove", handleScroll, {
  //       passive: false,
  //     });
  //   } else {
  //     document.body.style.overflow = "unset";
  //     document.body.style.height = "auto";
  //     document.body.style.touchAction = "auto";

  //     // 이벤트 리스너 제거
  //     document.removeEventListener("wheel", handleScroll);
  //     document.removeEventListener(
  //       "touchmove",
  //       handleScroll
  //     );
  //   }

  //   return () => {
  //     document.body.style.overflow = "unset";
  //     document.body.style.height = "auto";
  //     document.body.style.touchAction = "auto";
  //     document.removeEventListener("wheel", handleScroll);
  //     document.removeEventListener(
  //       "touchmove",
  //       handleScroll
  //     );
  //   };
  // }, [showPopup]);

  return (
    <>
      {showPopup && (
        <>
          <div className='fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black/60'>
            <div className='w-full lg:max-w-[650px] sm:max-w[400px] xs:max-w-[320px] lg:mb-0 xs:mb-10 relative'>
              <div className='absolute lg:top-[35%] xs:top-[-12%] lg:right-[-10px] xs:right-0'>
                <Image
                  src='/images/home/view_location.png'
                  width={65}
                  height={48}
                  alt='CES View Location'
                />
              </div>
              {/** Dot Pagination  */}
              <div className='absolute lg:top-[-50px] xs:bottom-[-70px] left-0  w-full'>
                <div className='flex lg:flex-row xs:flex-col lg:justify-between xs:items-center xs:justify-center px-16 '>
                  <div className='rounded-full w-8 h-8' />
                  <div>
                    <div className='w-full '>
                      {Array.from({
                        length: totalSlides,
                      }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() =>
                            swiper?.slideTo(index)
                          }
                          className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
                            activeIndex === index
                              ? "bg-gradient-start" // 활성화된 버튼 스타일
                              : "bg-white" // 비활성화된 버튼 스타일
                          }`}
                          aria-label={`Go to slide ${
                            index + 1
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div
                    className='lg:w-8 lg:h-8 xs:w-9 xs:h-9 bg-[#2E2E2E] rounded-full flex items-center justify-center mt-2'
                    onClick={() => setShowPopup(false)}
                  >
                    <MdClose
                      className='text-white'
                      size={24}
                    />
                  </div>
                </div>
              </div>
              {/** Swiper */}
              <Swiper
                onSwiper={setSwiper}
                spaceBetween={16}
                onSlideChange={(swiper) =>
                  setActiveIndex(swiper.activeIndex)
                }
                navigation={isMobile ? false : true}
                modules={[Navigation]}
              >
                {popUpDate.map((item) => {
                  const src = isMobile
                    ? item.mobile
                    : item.desktop;
                  return (
                    <SwiperSlide
                      key={item.id}
                      className='flex items-center justify-center'
                    >
                      <Link
                        href={item.link}
                        target='_blank'
                      >
                        <Image
                          src={src}
                          alt={item.alt}
                          width={isMobile ? 400 : 520}
                          height={isMobile ? 500 : 650}
                          className='object-cover mx-auto'
                        />
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PopUp;
