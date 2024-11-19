import React from "react";

interface BlogDetailProps {
  params: { id: string };
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { id } = await params;
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
      About | {id}
    </div>
  );
}
