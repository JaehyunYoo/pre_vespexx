"use client";

import React from "react";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import { MainScrollCardProps } from "./MainScrollCardSection";
import { s } from "framer-motion/client";
import { CardData } from "@/data/data";

const CardImage = ({
  data,
  progress,
  range,
  targetScale,
  i,
  dataLength,
}: MainScrollCardProps & { dataLength: number; data: CardData }) => {
  /** 그라디언트 opacity 애니메이션 */
  // const gradientOpacity = useTransform(
  //   progress,
  //   [i * 0.35, (i + 0.5) * 0.35],
  //   [0, 1]
  // );
  /** 그라디언트 색상 */
  // const gradiendCardTop = [
  //   "from-[#f5f4f1]",
  //   "from-[#f5f4f2]",
  //   "from-[#f5f4f3]",
  // ];
  /** 카드 크기 애니메이션 */
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <article className="w-full sticky top-20 ">
      <motion.div
        className="w-full h-full origin-top bg-white rounded-[25px] relative overflow-hidden shadow-inner"
        style={{
          scale: dataLength - 1 === i ? 1 : scale,
          top: dataLength - 1 === i ? "0" : `calc(1.5vh + ${i * 20}px)`,
        }}
      >
        <div className="flex flex-col items-center justify-center ">
          <div className="py-[60px] px-[40px]">
            <h4 className="text-[#1e1e1e] text-4xl font-bold mb-4">
              {data.title}
            </h4>
            <p className="text-[#777777] text-[22px] font-medium">
              {data.description}
            </p>
          </div>
          <Image src={data.image} alt="image" width={656} height={507} />
        </div>

        {/* {i <= 2 && (
          <motion.div
            className={`absolute inset-x-0 top-0 h-[100px] bg-gradient-to-b  ${gradiendCardTop[i]} to-transparent z-10 rounded-[25px]`}
            style={{ opacity: gradientOpacity }}
          />
        )} */}
      </motion.div>
    </article>
  );
};

export default CardImage;
