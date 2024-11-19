"use client";

import React from "react";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";
import BlogDetail from "@/components/BlogDetail";

interface BlogDetailPageProps {
  params: { id: string };
}
// Notion API 인스턴스 생성

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  // Notion 페이지 ID
  const pageId = "14223ccd8c2c807bb67dc096922bed31";
  const notion = new NotionAPI();
  // Notion 페이지 데이터 가져오기
  const recordMap = await notion.getPage(pageId);
  const { id } = await params;

  return <BlogDetail recordMap={recordMap} />;
}
