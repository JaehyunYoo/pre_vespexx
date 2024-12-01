import NotionDetailPage from "@/components/notions_detail/NotionDetails";
import { notionPageId } from "@/data/data";
import { NotionAPI } from "notion-client";
import React from "react";

export default async function CESPage() {
  // Notion 페이지 ID
  const notion = new NotionAPI();
  // Notion 페이지 데이터 가져오기
  const recordMap = await notion.getPage(notionPageId.ces);
  return <NotionDetailPage recordMap={recordMap} />;
}
