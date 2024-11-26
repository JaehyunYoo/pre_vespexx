"use client";

import React from "react";
import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";

const CareerDetail = ({
  recordMap,
}: {
  recordMap: ExtendedRecordMap;
}) => {
  return (
    <main className='blog-detail w-full h-full relative'>
      <div className='absolute top-0 left-0 w-full h-full z-20'>
        {recordMap && (
          <NotionRenderer
            recordMap={recordMap}
            fullPage={true}
            darkMode={false}
            pageTitle={false}
          />
        )}
      </div>
    </main>
  );
};

export default CareerDetail;
