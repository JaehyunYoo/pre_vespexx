import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & News",
  description: "Vespexx Blog & News Information",
};
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
