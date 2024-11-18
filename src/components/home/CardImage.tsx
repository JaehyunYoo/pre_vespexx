"use client";

import React from "react";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import { MainScrollCardProps } from "./MainScrollCardSection";
import { CardData } from "@/data/data";

const CardImage = ({
  data,
  progress,
  range,
  targetScale,
  i,
  dataLength,
}: MainScrollCardProps & {
  dataLength: number;
  data: CardData;
}) => {
  /** 카드 크기 애니메이션 */
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <article className="w-full sticky md:top-20 xs:top-16">
      <motion.div
        className="w-full h-full origin-top bg-white rounded-[25px] relative overflow-hidden shadow"
        style={{
          scale: scale,
          top: `calc(1.5vh + ${i * 20}px)`,
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="py-[60px] px-[20px]">
            <h4 className="text-color-s-strong md:text-4xl xs:text-2xl font-bold mb-4 text-center">
              {data.title}
            </h4>
            <p className="text-[#777777] md:text-[22px] xs:text-sm font-medium text-center">
              {data.description}
            </p>
          </div>
          <Image
            src={data.image}
            alt="image"
            width={656}
            height={507}
            // sizes='(max-width: 768px) 300px, 656px'
            priority
            className="xxl:max-w-full xl:max-w-[90%]"
          />
        </div>
      </motion.div>
    </article>
  );
};

export default CardImage;
