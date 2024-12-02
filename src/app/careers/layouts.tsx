import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Vespexx Careers",
};
export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
