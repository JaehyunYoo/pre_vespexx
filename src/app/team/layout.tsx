import { metaDataLayout } from "@/utils/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description: metaDataLayout.description,
};
export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
