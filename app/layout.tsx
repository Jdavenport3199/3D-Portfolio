import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Studio",
    template: "%s | Studio",
  },
  description: "Christian Davenport • 3D Artist & Concept Designer",
  keywords: ["3D", "Artist", "Concept", "Designer", "Christian", "Davenport"],
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
