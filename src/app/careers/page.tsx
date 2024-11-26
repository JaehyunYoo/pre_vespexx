import CareerDetail from "@/components/careers/CareerDetail";
import { NotionAPI } from "notion-client";
import React from "react";

export default async function CareersPage() {
  // Notion 페이지 ID
  const notion = new NotionAPI();
  // Notion 페이지 데이터 가져오기
  const recordMap = await notion.getPage(
    "b6c3a8e3714d4911914771a8b3a98a0b"
  );
  return <CareerDetail recordMap={recordMap} />;
}
