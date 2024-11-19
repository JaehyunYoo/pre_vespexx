import React from "react";
import { NotionAPI } from "notion-client";
import BlogDetail from "@/components/BlogDetail";

interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}
// Notion API 인스턴스 생성

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  // Notion 페이지 ID
  const notion = new NotionAPI();
  // Notion 페이지 데이터 가져오기
  const recordMap = await notion.getPage(id);

  return <BlogDetail recordMap={recordMap} />;
}
