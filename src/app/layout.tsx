import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "@/components/Nav";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import { metaDataLayout } from "@/utils/constants";

const pretendard = localFont({
  src: [
    {
      path: "../fonts/PretendardJP-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/PretendardJP-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/PretendardJP-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/PretendardJP-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/PretendardJP-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-pretendard",
});

/*Metadata*/
export const metadata: Metadata = {
  title: {
    template: `${metaDataLayout.title} | %s`,
    default: metaDataLayout.title,
  },
  description: metaDataLayout.description,
  icons: {
    icon: metaDataLayout.icon,
  },
  keywords: metaDataLayout.keywords,
  openGraph: metaDataLayout.openGraph,
};
/*Viewport*/
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <LenisProvider>
          <Nav />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
