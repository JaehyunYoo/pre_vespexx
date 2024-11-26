import NewsMediaCard from "@/components/NewsMediaCard";
import { newsAndMediaData } from "@/data/data";
import React from "react";

function Blog() {
  return (
    <main>
      <section className='w-full h-full py-c-15'>
        <div className='max-w-1200 mx-auto'>
          {/* Contents & News  List */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24 justify-items-center md:px-0 xs:px-4'>
            {newsAndMediaData.map((item, index) => (
              <NewsMediaCard key={index} data={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;
