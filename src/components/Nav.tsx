"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const sitePath = {
    home: "/",
    team: "/team",
    blog: "/blog",
    contactUs: "/contactUs",
  };

  const [isPassedSection, setIsPassedSection] = useState(false);

  useEffect(() => {
    const targetSection = document.getElementById("aspiration-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsPassedSection(!entry.isIntersecting);
        });
      },
      {
        // root: null, // viewport 기준
        threshold: 0, // 0%만 보여도 감지
        rootMargin: "-80px 0px 0px 0px", // 헤더 높이만큼 상단 여백 조정
      }
    );

    if (targetSection) {
      observer.observe(targetSection);
    }

    return () => {
      if (targetSection) {
        observer.unobserve(targetSection);
      }
    };
  }, []);
  const pathname = usePathname();
  // py-4 px-10
  const isHomePage = pathname === sitePath.home && isPassedSection;
  return (
    <header
      className={`fixed top-0 left-0 w-full h-full z-50 max-h-[72px]  ${
        isPassedSection && pathname === sitePath.home
          ? "bg-white"
          : "bg-transparent"
      }`}
    >
      <nav className="container-xl h-full">
        <div className="flex h-full items-center justify-center">
          {/** Logo */}
          <Link
            href="/"
            className="py-4 px-[22px] rounded-full bg-gradient-to-r from-[#fbe4fe] to-orange-100 hover:from-[#fbe4fe] hover:to-[#fff9f1]"
          >
            <Image
              src="/images/logo.png"
              alt="Vespexx Logo"
              width={209}
              height={20}
            />
          </Link>
          {/** Menu */}
          <div className="hidden h-full lg:flex  w-full justify-between items-center">
            <div className="flex gap-4 items-center h-full">
              <Link
                href={sitePath.team}
                className={`flex items-center h-full px-6 text-center ${
                  isHomePage
                    ? "text-[#29292f]"
                    : pathname !== "/"
                    ? "text-[#29292f]"
                    : "text-white"
                } text-base font-semibold hover:text-[#ff9328] transition-colors duration-200`}
              >
                Team
              </Link>
              <Link
                href={sitePath.blog}
                className={`flex items-center h-full px-6 text-center ${
                  isHomePage
                    ? "text-[#29292f]"
                    : pathname !== "/"
                    ? "text-[#29292f]"
                    : "text-white"
                } text-base font-semibold hover:text-[#ff9328] transition-colors duration-200`}
              >
                Blog
              </Link>
            </div>
            <div className="flex items-center h-full">
              <Link
                href={sitePath.contactUs}
                className={`flex items-center h-full px-6 text-center ${
                  isHomePage
                    ? "text-[#29292f]"
                    : pathname !== "/"
                    ? "text-[#29292f]"
                    : "text-white"
                } text-base font-semibold hover:text-[#ff9328] transition-colors duration-200`}
              >
                Contact us
              </Link>
            </div>
          </div>
          {/** Button */}
        </div>
      </nav>
    </header>
  );
};
