"use client";

import React from "react";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import { MainScrollCardProps } from "./MainScrollCardSection";

const CardImage = ({
  src,
  progress,
  range,
  targetScale,
  i,
}: MainScrollCardProps) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div className="w-full h-[80svh] sticky top-20">
      <motion.div
        className="flex flex-col relative w-full h-full rounded-[25px]  origin-top "
        style={{
          scale,
          top: `calc(1.5svh + ${i * 25}px)`,
        }}
      >
        <Image
          width={100}
          height={100}
          src={src}
          alt="image"
          className="w-full h-full"
        />
      </motion.div>
    </div>
  );
};

export default CardImage;
