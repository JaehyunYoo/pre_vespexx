import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recruiting",
  description: "Join Us in Expanding into the Global Market with Vespexx!",
};
export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
