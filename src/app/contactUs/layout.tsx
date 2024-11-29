import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Vespexx Contact Us Your Feedback",
};
export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
