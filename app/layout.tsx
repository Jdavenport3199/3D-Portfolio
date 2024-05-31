import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "3D ARTIST / DIGITAL DESIGNER",
    template: "%s | 3D ARTIST / DIGITAL DESIGNER",
  },
  description:
    "I'm Chrisitan, a 3D Artist and Digital Designer proficient in Blender, Substance Painter, and Unreal Engine.",
  keywords: ["Christian", "Davenport", "3D", "Artist", "Digital", "Designer"],
  metadataBase: new URL("https://www.christiandavenport.studio/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head>
          <script
            defer
            src="https://kit.fontawesome.com/5f2bb09986.js"
            crossOrigin="anonymous"
          ></script>
        </head>

        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
