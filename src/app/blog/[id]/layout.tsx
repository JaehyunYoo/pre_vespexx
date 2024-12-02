import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & News Detail",
  description: "Vespexx Blog & News Detail Information",
};
export default function BlogDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
