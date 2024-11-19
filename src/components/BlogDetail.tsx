"use client";

import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";
import Footer from "./Footer";
import { BlogHeader } from "./header/BlogHeader";
import dynamic from "next/dist/shared/lib/dynamic";

// 클라이언트 사이드에서만 렌더링되도록 dynamic import 사용
const NotionContent = dynamic(
  () => import("react-notion-x").then((mod) => mod.NotionRenderer),
  { ssr: false } // 서버 사이드 렌더링 비활성화
);

interface BlogDetailProps {
  recordMap: ExtendedRecordMap;
}

export default function BlogDetail({ recordMap }: BlogDetailProps) {
  return (
    <main className="blog-detail w-full h-full relative">
      <div className="absolute top-0 left-0 w-full h-full z-20">
        <BlogHeader />
        <NotionContent
          recordMap={recordMap}
          fullPage={true}
          darkMode={false}
          pageTitle={false}
        />
        <Footer />
      </div>
    </main>
  );
}
