"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const typingText = "Meet us at CES 2025, Venetian Expo, Booth #55045".split(
    ""
  );
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.8, duration: 0.4, ease: "easeInOut" },
          }}
          exit={{ opacity: 0 }}
          onAnimationStart={() => {
            document.body.style.overflow = "hidden";
          }}
          onAnimationComplete={() => {
            document.body.style.overflow = "";
          }}
          className="h-screen w-screen fixed bg-black top-0 left-0 z-50 pointer-events-none"
        >
          <div className=" flex flex-col justify-center items-center h-full">
            <span className="text-white md:text-2xl xs:text-xl font-semibold inline-block mb-4">
              Vespexx <span className="text-[#FE9800]">Signaling</span>
            </span>
            <motion.h1
              className="md:text-4xl xs:text-2xl text-white font-bold text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.1,
              }}
            >
              CES 2025
              <br />
              Innovation Showcase
            </motion.h1>
          </div>
        </motion.div>
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
