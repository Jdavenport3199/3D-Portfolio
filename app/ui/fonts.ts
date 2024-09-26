import { Work_Sans } from "next/font/google";
import localFont from "next/font/local";

export const work_sans = Work_Sans({ subsets: ["latin"] });

export const clash_display = localFont({
  src: [
    {
      path: "./ClashDisplay-Variable.ttf",
      style: "normal",
    },
  ],
});
