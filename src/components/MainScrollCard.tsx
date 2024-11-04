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
  // const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center sticky top-0">
      <motion.div
        className="bg-aqua flex flex-col relative h-[500px] w-[1000px] rounded-[25px] p-[50px] origin-top"
        style={{
          backgroundColor: "#000",
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <h2>Title:test{i}</h2>
        <div>
          <p>Description:{i}</p>
        </div>
        <div>
          <div>
            <Image fill src={imageSrc} alt="image" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
