"use client";
import Link from "next/link";

export default function Project() {
  return (
    <main>
      <div className="logo">
        <Link href={"/"}>
          {"["} BACK {"]"}
        </Link>
      </div>

      <div className="background"></div>
      <div className="background-overlay"></div>

      <div className="containerHolder">
        <div className="containerDescription">
          <div>
            <h1 style={{ fontSize: "clamp(48px, 6vw, 100px)" }}>Keyboard</h1>
            <br />
            <p>
              PRODUCT DESIGN {"["} 2024 {"]"}
            </p>
          </div>
          <div className="description">
            <p>
              THE NEXT-GEN KEYBOARD COMBINES ERGONOMICS AND STYLE, ELEVATING
              YOUR TYPING EXPERIENCE TO NEW HEIGHTS. IT OFFERS PRECISION AND
              COMFORT, TRANSFORMING THE WAY YOU INTERACT WITH YOUR DEVICE.
              <br />
              <br />
              VIEW THE FULL&nbsp;
            </p>
            <Link
              href={"https://www.youtube.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"["} VIDEO {"]"}
            </Link>
          </div>
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
            />
          </div>
        </div>
      </div>
    </main>
  );
}
