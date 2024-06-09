"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { BeatLoader } from "react-spinners";

const Scene = dynamic(() => import("../components/PistolScene"), {
  ssr: false,
  loading: () => <BeatLoader color="#ffffff80" />,
});

export default function Project() {
  return (
    <main>
      <div className="logo">
        <Link href={"/"}>BACK</Link>
      </div>

      <div className="containerHolder">
        <div className="containerDescription">
          <div>
            <h1>STEAMPUNK PISTOL</h1>
            <br />
            <span>
              GAME ASSET {"["} 2024 {"]"}
            </span>
          </div>
          <div className="description">
            <p>
              THE NEXT-GEN KEYBOARD COMBINES ERGONOMICS AND STYLE, ELEVATING
              YOUR TYPING EXPERIENCE TO NEW HEIGHTS. IT OFFERS PRECISION AND
              COMFORT, TRANSFORMING THE WAY YOU INTERACT WITH YOUR DEVICE.
            </p>
          </div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://sketchfab.com/3d-models/steampunk-weapon-4acd86492f214750bc2d5f180b5373bc"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            DOWNLOAD ASSET{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              width="14"
              viewBox="0 0 448 512"
              fill="white"
              style={{ transform: "rotate(-45deg)" }}
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </Link>
        </div>
        <div className="containerImg">
          <div className="cardShowcase">
            <Scene />
          </div>
        </div>
      </div>
    </main>
  );
}