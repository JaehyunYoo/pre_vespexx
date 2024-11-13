// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, useScroll, useMotionValueEvent } from "framer-motion";

// interface JNavProps {
//   sectionsRef?: React.MutableRefObject<{ [key: string]: HTMLElement | null }>;
// }

// export const HomeNav = ({ sectionsRef }: NavProps) => {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const [navBackground, setNavBackground] = React.useState("transparent");
//   const { scrollY } = useScroll();

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     if (!sectionsRef) return;
//     const currentPosition = latest + 100;
//     Object.entries(sectionsRef.current).forEach(([sectionName, section]) => {
//       if (!section) return;
//       const sectionTop = section.offsetTop;
//       const sectionBottom = sectionTop + section.offsetHeight;
//       if (currentPosition >= sectionTop && currentPosition < sectionBottom) {
//         switch (sectionName) {
//           case "hero":
//             setNavBackground("transparent");
//             break;
//           case "mainScroll":
//             setNavBackground("rgba(0, 0, 0, 0.8)");
//             break;
//           case "coupleDynamics":
//             setNavBackground("rgba(6, 6, 222, 0.1)");
//             break;
//           // 필요한 섹션만큼 추가
//         }
//       }
//     });
//   });
//   return (
//     <motion.header
//       className="fixed top-0 left-0 w-full z-50"
//       animate={{
//         backgroundColor: navBackground,
//       }}
//       transition={{ duration: 0.3 }}
//     >
//       <nav className="container-xl max-h-13 py-4 px-10">
//         <div className="flex">
//           {/** Logo */}
//           <Link href="/">
//             <Image
//               src="/images/logo.svg"
//               alt="Vespexx Logo"
//               width={253}
//               height={52}
//               className="max-lg:w-[204px] max-lg:h-[40px]"
//             />
//           </Link>
//           {/** Menu */}
//           <div className="hidden lg:flex  w-full justify-between items-center">
//             <div className="flex gap-4 items-center h-full">
//               <Link
//                 href="/"
//                 className="flex items-center h-full px-6 text-center text-white text-base font-semibold hover:text-[#ff9328] transition-colors duration-200"
//               >
//                 Team
//               </Link>
//               <Link
//                 href="/blog"
//                 className="flex items-center h-full px-6 text-center text-white text-base font-semibold hover:text-[#ff9328] transition-colors duration-200"
//               >
//                 Blog
//               </Link>
//             </div>
//             <div className="flex items-center h-full">
//               <Link
//                 href="/contactUs"
//                 className="flex items-center h-full px-6 text-center text-white text-base font-semibold hover:text-[#ff9328] transition-colors duration-200"
//               >
//                 Contact us
//               </Link>
//             </div>
//           </div>
//           {/** Button */}
//         </div>
//       </nav>
//     </motion.header>
//   );
// };
