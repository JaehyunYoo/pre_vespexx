import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description: "Vespexx Team Information",
};
export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
