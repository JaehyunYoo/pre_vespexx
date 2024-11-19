"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import path from "path";

export const Nav = () => {
  const sitePath = {
    home: "/",
    team: "/team",
    blog: "/blog",
    contactUs: "/contactUs",
  };

  const [isPassedSection, setIsPassedSection] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsPassedSection(false);
    setIsMenuOpen(false);
  }, [pathname]);

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
  }, [pathname]);

  /** Home Screen Menu Text Color */

  const getMenuClass = (path: string) => {
    const isHome = pathname === sitePath.home;
    if (isHome) {
      return isPassedSection ? "color-s-gray" : "text-white";
    }

    return path === pathname ? "text-[#ff9328]" : "color-s-gray";
  };
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 md:h-[72px] xs:h-16  ${
        isPassedSection == true ? "bg-white" : "bg-transparent"
      }`}
    >
      <nav className="container-xl h-full">
        <div className="flex h-full items-center lg:justify-center xs:justify-between">
          {/** Logo */}
          <Link
            href="/"
            className="md:py-4 md:px-[22px] xs:py-3 xs:px-4 rounded-full bg-gradient-to-r from-[#fbe4fe] to-orange-100 hover:from-[#fbe4fe] hover:to-[#fff9f1]"
          >
            <Image
              src="/images/logo.png"
              alt="Vespexx Logo"
              width={209}
              height={20}
              className="md:max-w-full xs:max-w-[160px]"
            />
          </Link>
          {/** Menu */}
          <div className="xs:hidden h-full lg:flex w-full justify-between items-center">
            <div className="flex gap-4 items-center h-full">
              <Link
                href={sitePath.team}
                className={`flex items-center h-full px-6 text-center ${getMenuClass(
                  sitePath.team
                )} text-base font-semibold hover:text-[#ff9328] transition-colors duration-200`}
              >
                Team
              </Link>
              <Link
                href={sitePath.blog}
                className={`flex items-center h-full px-6 text-center ${getMenuClass(
                  sitePath.blog
                )} text-base font-semibold hover:text-[#ff9328] transition-colors duration-200`}
              >
                Blog
              </Link>
            </div>
            <div className="flex items-center h-full">
              <Link
                href={sitePath.contactUs}
                className={`flex items-center h-full px-6 text-center ${getMenuClass(
                  sitePath.contactUs
                )} text-base font-semibold hover:text-[#ff9328] transition-colors duration-200`}
              >
                Contact us
              </Link>
            </div>
          </div>
          {/** Mobile Menu Button*/}
          <div className="h-full lg:hidden xs:block z-50">
            <div
              className="flex items-center justify-center w-full h-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <IoClose color="#9198a5" size={32} />
              ) : (
                <RiMenu3Fill
                  color={
                    isPassedSection
                      ? "black"
                      : pathname !== "/"
                      ? "black"
                      : "white"
                  }
                  size={32}
                />
              )}
            </div>
          </div>
          {/**(background overlay) */}
          {isMenuOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30" />
          )}
          {isMenuOpen && (
            <motion.div
              className="absolute top-0 left-0 lg:hidden xs:block w-full h-full z-40"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white">
                <div className="pt-8" />
                <ul className="p-4">
                  <li className="w-full">
                    <Link
                      href={sitePath.team}
                      className="block py-4 text-lg font-semibold text-color-s-gray"
                    >
                      Team
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href={sitePath.blog}
                      className="block py-4 text-lg font-semibold text-color-s-gray"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href={sitePath.contactUs}
                      className="block py-4 text-lg font-semibold text-color-s-gray"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <div className="w-full bg-[#f9fbfd] py-10">
                  <div className="flex flex-col items-center justify-center">
                    <div className="relative w-28 h-6">
                      <Image
                        src="/images/footerLogo.png"
                        alt="Vespexx footer logo"
                        fill
                        priority
                      />
                    </div>
                    <p className="text-sm text-[#5c5f6c] mt-4">
                      © 2024 Vespexx, Inc.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
};
