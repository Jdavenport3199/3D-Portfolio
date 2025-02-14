import type { Metadata } from "next";
import { work_sans } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Christian Davenport — 3D Artist. Digital Designer.",
    template: "%s — Christian Davenport",
  },
  description:
    "I'm Christian, a 3D Artist and Digital Designer proficient in Blender, Substance Painter, and Unreal Engine. ",
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
