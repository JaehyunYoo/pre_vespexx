import React from "react";
import { NewsAndMediaDataProps } from "@/data/data";
import Image from "next/image";

const NewsMediaCard = ({
  data,
  className,
}: {
  data: NewsAndMediaDataProps;
  className?: string;
}) => {
  return (
    <article className={`"w-full ${className ?? ""}`}>
      <div className="relative aspect-[380/228] overflow-hidden">
        <Image
          src={data.image}
          alt={data.alt ?? "image"}
          priority
          fill
          className="object-cover"
        />
      </div>

      <h6 className="text-[#29292f] text-xl font-semibold mt-5">
        {data.title}
      </h6>
    </article>
  );
};

export default NewsMediaCard;
