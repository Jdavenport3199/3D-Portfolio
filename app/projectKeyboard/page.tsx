"use client";
import Link from "next/link";

export default function Project() {
  return (
    <main>
      <div className="logo">
        <Link href={"/"}>BACK</Link>
      </div>

      <video
        className="background"
        src="background.mov"
        width="1920"
        height="1080"
        autoPlay
        loop
        playsInline
        muted
        style={{
          maskImage: "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />
      <div className="background-overlay"></div>

      <div className="containerHolder">
        <div className="containerDescription">
          <div>
            <h1>KEYBOARD ADVERTISEMENT</h1>
            <br />
            <span>
              PRODUCT DESIGN {"["} 2024 {"]"}
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
            href="https://www.youtube.com/watch?v=rn_0iXlSWJk"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            VIEW THE FULL VIDEO{" "}
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
            <video
              className="img"
              src="KeyboardExport.mp4"
              width="1920"
              height="1080"
              autoPlay
              loop
              playsInline
              muted
              style={{ border: "1px solid #7C7C7C" }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
