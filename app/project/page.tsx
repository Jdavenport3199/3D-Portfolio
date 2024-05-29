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
          {/* <div style={{ display: "flex", gap: "0.4rem", marginTop: "0.6rem" }}>
            <p
              style={{
                color: "black",
                borderRadius: "100rem",
                border: "1px solid #f5f5f580",
                width: "fit-content",
                padding: "0.8rem",
                paddingBlock: "0.2rem",
                fontWeight: "400",
                fontSize: "16px",
                background: "whitesmoke",
              }}
            >
              Product Design
            </p>
            <p
              style={{
                color: "black",
                borderRadius: "100rem",
                border: "1px solid #f5f5f580",
                width: "fit-content",
                padding: "0.8rem",
                paddingBlock: "0.2rem",
                fontWeight: "400",
                fontSize: "16px",
                background: "whitesmoke",
              }}
            >
              2024
            </p>
          </div> */}
          <span className="description">Description</span>
          <p>
            Augmented Reality (AR) and Virtual Reality (VR) bridge the digital
            And physical worlds. They allow you to take in information and
            Content visually, in the same way you take in the world.
          </p>
        </div>
        <div className="containerImg">
          <div className="cardShowcase">
            <img className="img" src="/anim1.gif" />
          </div>
          <div className="cardShowcase">
            <img className="img" src="/anim2.gif" />
          </div>
          <div className="cardShowcase">
            <img className="img" src="/anim3.gif" />
          </div>
        </div>
      </div>
    </main>
  );
}
