"use client";

import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";
import Footer from "../Footer";
import { CommonHeader } from "../header/CommonHeader";
import dynamic from "next/dynamic";

const NotionContent = dynamic(
  () =>
    import("react-notion-x").then(
      (mod) => mod.NotionRenderer
    ),
  { ssr: false }
);

interface BlogDetailProps {
  recordMap: ExtendedRecordMap;
}

export default function BlogDetail({
  recordMap,
}: BlogDetailProps) {
  return (
    <main className='blog-detail w-full h-full relative'>
      <CommonHeader />
      <NotionContent
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        pageTitle={false}
      />
      <Footer />
    </main>
  );
}
