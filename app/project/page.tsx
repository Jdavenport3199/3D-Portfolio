"use client";
import Link from "next/link";

export default function Home() {
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
        <div
          className="containerHolder"
          style={{
            alignItems: "flex-end",
            gap: "1rem",
            marginBlock: "8rem",
            width: "95%",
          }}
        >
          <div
            style={{
              position: "fixed",
              left: "4rem",
              top: "4rem",
            }}
          >
            <Link href={"/"}>Back</Link>
          </div>
          <div
            style={{
              position: "fixed",
              left: "4rem",
              top: "12rem",
              display: "flex",
              flexDirection: "column",
              width: "30%",
            }}
          >
            <h1 style={{ fontSize: "clamp(36px, 8vw, 100px)" }}>3D Model</h1>
            <p>Expand Your Universe</p>
            <h2
              style={{
                paddingTop: "4rem",
              }}
            >
              About
            </h2>
            <p>
              Augmented Reality (AR) and Virtual Reality (VR) bridge the digital
              And physical worlds. They allow you to take in information and
              Content visually, in the same way you take in the world.
            </p>
          </div>
          <div className="cardShowcase">
            <img className="img" src="/1.jpg" />
          </div>
          <div className="cardShowcase">
            <img className="img" src="/1.jpg" />
          </div>
        </div>
      </div>
    </main>
  );
}
