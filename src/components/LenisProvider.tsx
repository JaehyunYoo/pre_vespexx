"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname();
  // useEffect(() => {
  //   console.log(pathname);
  //   if (pathname === "/team") {
  //     return;
  //   }
  //   const lenis = new Lenis();

  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  //   return () => lenis.destroy();
  // }, []);

  return <>{children}</>;
}
