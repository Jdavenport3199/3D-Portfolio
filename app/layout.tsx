import type { Metadata } from "next";
import { work_sans } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Christian Davenport — Portfolio",
    template: "%s — Christian Davenport",
  },
  description: "3D Artist & Digital Designer",
  openGraph: {
    images: "https://www.christiandavenport.studio/opengraph-image.png",
  },
  metadataBase: new URL("https://www.christiandavenport.studio/"),
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={`${work_sans.className} antialiased`}>{children}</body>
      </html>
    </>
  );
}
