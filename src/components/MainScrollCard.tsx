"use client";

import React, { useRef } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";

type MainScrollCardProps = {
  imageSrc: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  i: number;
};

export const MainScrollCard = ({
  imageSrc,
  progress,
  range,
  targetScale,
  i,
}: MainScrollCardProps) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="w-full h-[100svh] flex flex-col justify-center items-center sticky top-0">
      <motion.div
        className="flex flex-col relative w-full h-full rounded-[25px] p-[50px] origin-top "
        style={{
          scale,
          top: `calc(1.5svh + ${i * 25}px)`,
        }}
      >
        <div className="">
          <Image fill src={imageSrc} alt="image" />
        </div>
      </motion.div>
    </div>
  );
};
