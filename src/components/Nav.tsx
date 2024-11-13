"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="container-xl max-h-13 py-4 px-10">
        <div className="flex">
          {/** Logo */}
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Vespexx Logo"
              width={253}
              height={52}
              className="max-lg:w-[204px] max-lg:h-[40px]"
            />
          </Link>
          {/** Menu */}
          <div className="hidden lg:flex  w-full justify-between items-center">
            <div className="flex gap-4 items-center h-full">
              <Link
                href="/team"
                className="flex items-center h-full px-6 text-center text-white text-base font-semibold hover:text-[#ff9328] transition-colors duration-200"
              >
                Team
              </Link>
              <Link
                href="/blog"
                className="flex items-center h-full px-6 text-center text-white text-base font-semibold hover:text-[#ff9328] transition-colors duration-200"
              >
                Blog
              </Link>
            </div>
            <div className="flex items-center h-full">
              <Link
                href="/contactUs"
                className="flex items-center h-full px-6 text-center text-white text-base font-semibold hover:text-[#ff9328] transition-colors duration-200"
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
