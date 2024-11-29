// "use client";
// import React, { Suspense } from "react";
// import { NotionAPI } from "notion-client";
// import dynamic from "next/dynamic";

// // 동적 임포트로 클라이언트 컴포넌트 로드
// const RecruitingDetail = dynamic(
//   () => import("react-notion-x").then((mod) => mod.NotionRenderer),
//   {
//     ssr: false, // 클라이언트 사이드에서만 렌더링
//   }
// );

// async function getNotionData() {
//   const notion = new NotionAPI();
//   try {
//     return await notion.getPage("b6c3a8e3714d4911914771a8b3a98a0b");
//   } catch (error) {
//     console.error("Notion data fetch error:", error);
//     return null;
//   }
// }

// export default async function RecruitingPage() {
//   const recordMap = await getNotionData();

//   if (!recordMap) {
//     return <div>Failed to load data</div>;
//   }

//   return (
//     <div className="container mx-auto">
//       {/* <RecruitingDetail recordMap={recordMap} /> */}
//     </div>
//   );
// }

import React from "react";

export default function RecruitingPage() {
  return <div>page</div>;
}
