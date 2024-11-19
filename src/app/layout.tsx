import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "@/components/Nav";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

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
    template: "Vespexx | %s",
    default: "Vespexx",
  },
  description: "Stay in Sync with the One you Love",
  icons: {
    icon: "/ico/favicon.png",
  },
  openGraph: {
    type: "website",
    title: "Vespexx",
    url: "https://vespexx.com",
    description: "Stay in Sync with the One you Love",
    siteName: "Vespexx | Signaling",
    locale: "en_US",
    images: [
      {
        url: `/images/og/og_image.png`,
        width: 1200,
        height: 600,
      },
    ],
  },
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
