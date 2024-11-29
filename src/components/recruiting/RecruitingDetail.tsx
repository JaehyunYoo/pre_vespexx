"use client";
import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";

interface RecruitingDetailProps {
  recordMap: ExtendedRecordMap;
}

export default function RecruitingDetail({ recordMap }: RecruitingDetailProps) {
  return (
    <div className="notion-container">
      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
    </div>
  );
}
