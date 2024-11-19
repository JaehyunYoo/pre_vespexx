"use client";

import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";

interface BlogDetailProps {
  recordMap: ExtendedRecordMap;
}

export default function BlogDetail({ recordMap }: BlogDetailProps) {
  return (
    <main className="blog-detail w-full">
      <section className="absolute top-0 left-0 w-full h-full z-20">
        <div className="md:pt-18 xs:pt-16">
          <NotionRenderer
            recordMap={recordMap}
            fullPage={true}
            darkMode={false}
            linkTableTitleProperties={false}
          />
        </div>
      </section>
    </main>
  );
}
