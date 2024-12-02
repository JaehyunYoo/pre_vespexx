"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const typingText = "V e s p e x x S i g n a l i n g CES".split(" ");
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.9, ease: "easeInOut" },
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
          <div className=" flex justify-center items-center h-full">
            <h1 className="md:text-4xl xs:text-2xl text-white font-bold text-center">
              {typingText.map((el, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.35,
                    delay: index / 35,
                  }}
                >
                  {el == "CES" ? (
                    <>
                      <br />
                      {el}
                    </>
                  ) : (
                    el
                  )}
                </motion.span>
              ))}
            </h1>
          </div>
        </motion.div>

        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
