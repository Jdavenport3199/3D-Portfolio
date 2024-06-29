import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const work_sans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "STUDIO ©2024",
    template: "%s | STUDIO ©2024",
  },
  description: "DESIGN STUDIO ©2024",
  // keywords: ["Christian", "Davenport", "3D", "Artist", "Digital", "Designer"],
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

        <body className={work_sans.className}>{children}</body>
      </html>
    </>
  );
}
