import NewsMediaCard from "@/components/NewsMediaCard";
import { newsAndMediaData } from "@/data/data";
import React from "react";

function Blog() {
  return (
    <main>
      <section className="w-full h-full py-[7.5rem]">
        <div className="container-lg">
          {/* Contents & News  Category */}
          <ul className="flex gap-4 mb-10">
            <li className="text-[#29292f] text-2xl font-semibold">Contents</li>
          </ul>
          {/* Contents & News  List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {newsAndMediaData.map((item, index) => (
              <NewsMediaCard key={index} data={item} className="mb-[8rem]" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;
