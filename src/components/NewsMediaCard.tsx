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
      <Image
        src={data.image}
        alt={data.alt ?? "image"}
        width={380}
        height={228}
        priority
      />
      <h6 className="text-[#29292f] text-xl font-semibold mt-5">
        {data.title}
      </h6>
    </article>
  );
};

export default NewsMediaCard;
