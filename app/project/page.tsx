"use client";
import Link from "next/link";

export default function Project() {
  return (
    <main>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: "url(/background.jpg)",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          position: "fixed",
          opacity: "0.075",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          position: "fixed",
        }}
      ></div>

      <div className="containerHolder">
        <div className="containerBtn">
          <Link href={"/"}>
            {"["} BACK {"]"}
          </Link>
        </div>
        <div className="containerDescription">
          <h1
            style={{ fontSize: "clamp(36px, 6vw, 100px)", lineHeight: "1.4" }}
          >
            Keyboard
          </h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 18px)" }}>
            Product Design, 2024
          </p>
          <span className="description">Description</span>
          <p>
            Augmented Reality (AR) and Virtual Reality (VR) bridge the digital
            And physical worlds. They allow you to take in information and
            Content visually, in the same way you take in the world.
          </p>
        </div>
        <div className="containerImg">
          <div className="cardShowcase">
            <img className="img" src="/anim3.gif" />
          </div>
        </div>
      </div>
    </main>
  );
}
