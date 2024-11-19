import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Learn more about Signaling and our mission",
};
export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
