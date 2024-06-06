"use client";
import Link from "next/link";

export default function Project() {
  return (
    <main>
      <div
        style={{
          position: "fixed",
          left: "2.5%",
          top: "2.5rem",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span>CHRISTIAN DAVENPORT</span>
        <p>3D ARTIST / DIGITAL DESIGNER</p>
        <br />
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
          <div>
            <div className="description">
              <h2>About</h2>
            </div>
            <p>
              THE NEXT-GEN KEYBOARD COMBINES ERGONOMICS AND STYLE, ELEVATING
              YOUR TYPING EXPERIENCE TO NEW HEIGHTS. IT OFFERS PRECISION AND
              COMFORT, TRANSFORMING THE WAY YOU INTERACT WITH YOUR DEVICE.
              <br />
              <br />
              VIEW THE FULL VIDEO BELOW.
            </p>
            <br />
            <Link
              href={"https://www.youtube.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"["} TRAILER {"]"}
            </Link>
          </div>
        </div>
        <div className="containerImg">
          <div className="cardShowcase">
            {/* <img className="img" src="/1.jpg" /> */}
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
