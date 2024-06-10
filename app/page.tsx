"use client";
import { useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { BeatLoader } from "react-spinners";

export default function Home() {
  const pistolDiv = useRef<HTMLDivElement>(null);
  const guitarDiv = useRef<HTMLDivElement>(null);
  const keyboardDiv = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const GuitarScene = dynamic(() => import("./components/GuitarScene"), {
    ssr: false,
    loading: () => <BeatLoader color="#ffffff80" />,
  });

  const PistolScene = dynamic(() => import("./components/PistolScene"), {
    ssr: false,
    loading: () => <BeatLoader color="#ffffff80" />,
  });

  return (
    <main>
      <nav>
        <div className="nav-dropdown">
          <div className="nav-button">
            <p className="menu">WORKS</p>
            <button className="nav-link" onClick={() => scrollTo(pistolDiv)}>
              STEAMPUNK PISTOL
            </button>
            <button className="nav-link" onClick={() => scrollTo(guitarDiv)}>
              SOULEATER GUITAR
            </button>
            <button className="nav-link" onClick={() => scrollTo(keyboardDiv)}>
              KEYBOARD ADVERTISEMENT
            </button>
          </div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:christiandavenport.studio@gmail.com"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.4rem",
              position: "absolute",
              right: "2.5%",
            }}
          >
            CONTACT{" "}
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
      </nav>

      <div className="containerHolder">
        <div className="containerTitle">
          {/* <span style={{ fontSize: "clamp(16px, 2vw, 28px)" }}>
            CHRISTIAN DAVENPORT
          </span> */}
          <h1 className="title">
            3D ARTIST
            <br />
            DIGITAL DESIGNER
          </h1>
          <div className="cardTitleHolder">
            <div className="card-title">
              {/* <span>About</span> */}
              <p>
                I&apos;M CHRISTIAN, A 3D ARTIST AND DIGITAL DESIGNER PROFICIENT
                IN BLENDER, SUBSTANCE PAINTER, AND UNREAL ENGINE. I CREATE
                VISUALLY STUNNING AND TECHNICALLY SOPHISTICATED ASSETS AND
                ENVIRONMENTS FOR GAMES, FILMS, AND INTERACTIVE MEDIA.
              </p>
            </div>
          </div>
        </div>

        <div className="container" style={{ width: "100%" }} ref={pistolDiv}>
          <div className="cardHolder">
            <div style={{ width: "95%", textAlign: "center" }}>
              <Link
                className="card"
                href={"/projectPistol"}
                style={{ opacity: "1", marginBottom: "1rem" }}
              >
                <PistolScene />
              </Link>
              <span>GAME ASSET</span>
              <br />
              <h1>STEAMPUNK PISTOL</h1>
            </div>
          </div>
        </div>

        <div
          className="container"
          style={{ width: "100%", marginTop: "1rem" }}
          ref={guitarDiv}
        >
          <div className="cardHolder">
            <div style={{ width: "95%", textAlign: "center" }}>
              <Link
                className="card"
                href={"/projectGuitar"}
                style={{ opacity: "1", marginBottom: "1rem" }}
              >
                <GuitarScene />
              </Link>
              <span>GAME ASSET</span>
              <br />
              <h1>SOULEATER GUITAR</h1>
            </div>
          </div>
        </div>

        <div
          className="container"
          style={{ width: "100%", marginTop: "1rem" }}
          ref={keyboardDiv}
        >
          <div className="cardHolder">
            <div style={{ width: "95%", textAlign: "center" }}>
              <Link
                className="card"
                href={"/projectKeyboard"}
                style={{ opacity: "1", marginBottom: "1rem" }}
              >
                <video
                  className="vid"
                  src="KeyboardExport.mp4"
                  width="0"
                  height="1080"
                  autoPlay
                  loop
                  playsInline
                  muted
                />
              </Link>
              <span>PRODUCT DESIGN</span>
              <br />
              <h1>KEYBOARD ADVERTISEMENT</h1>
            </div>
          </div>
        </div>

        <footer>
          <div className="footer">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/@christiandavenport.studio"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              YOUTUBE{" "}
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
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/christiandavenport.studio/"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              INSTAGRAM{" "}
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
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.unrealengine.com/marketplace/en-US/profile/christiandavenport.studio?count=20&sortBy=effectiveDate&sortDir=DESC&start=0"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              UNREAL MARKETPLACE{" "}
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
        </footer>
      </div>
    </main>
  );
}
