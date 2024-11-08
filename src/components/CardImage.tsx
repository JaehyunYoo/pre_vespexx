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
  /** 그라디언트 opacity 애니메이션 */
  const gradientOpacity = useTransform(
    progress,
    [i * 0.35, (i + 0.5) * 0.35],
    [0, 1]
  );

  const gradiendCardTop = [
    "from-[#f5f4f2]",
    "from-[#f5f4f3]",
    "from-[#f5f4f4]",
  ];
  /** 카드 크기 애니메이션 */
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="w-full h-[80svh] sticky top-20">
      <motion.div
        className="relative w-full h-full rounded-[25px]  origin-top "
        style={{
          scale,
          top: `calc(1.5svh + ${i * 25}px)`,
        }}
      >
        {i <= 2 && (
          <motion.div
            className={`absolute inset-x-2 top-0 h-[100px] bg-gradient-to-b  ${gradiendCardTop[i]} to-transparent z-10 rounded-[25px]`}
            style={{ opacity: gradientOpacity }}
          />
        )}

        <Image fill src={src} alt="image" className="w-full h-full" />
      </motion.div>
    </div>
  );
};

export default CardImage;
