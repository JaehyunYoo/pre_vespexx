import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vespexx | Signaling CES",
  description:
    "The perfect way to immortalize your CES 2025 : CES Mirror Selfie Drop ",
  keywords:
    "The perfect way to immortalize your CES 2025 : CES Mirror Selfie Drop ",
};
export default function CesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
