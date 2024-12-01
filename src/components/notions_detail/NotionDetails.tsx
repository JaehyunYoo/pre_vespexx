"use client";

import React from "react";
import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";
import Footer from "../Footer";
import { CommonHeader } from "../header/CommonHeader";

const NotionDetailPage = ({
  recordMap,
}: {
  recordMap: ExtendedRecordMap;
}) => {
  return (
    <main className='blog-detail w-full h-full relative'>
      <div className=''>
        <CommonHeader />
        {recordMap && (
          <NotionRenderer
            recordMap={recordMap}
            fullPage={true}
            darkMode={false}
            pageTitle={false}
          />
        )}
      </div>
      <Footer />
    </main>
  );
};

export default NotionDetailPage;
