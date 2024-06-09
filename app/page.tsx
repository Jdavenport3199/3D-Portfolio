"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Home() {
  const workDiv = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [lastScroll, setLastScroll] = useState(0);
  const nav = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const threshold = 50;
      if (currentScroll <= threshold && nav.current) {
        if (nav.current.style.top !== "0rem") {
          nav.current.style.top = "0rem";
          nav.current.style.height = "6rem";
        }
      } else if (currentScroll < lastScroll && nav.current) {
        nav.current.style.top = "0rem";
        nav.current.style.height = "6rem";
      } else if (currentScroll > lastScroll && nav.current) {
        nav.current.style.top = "-6.25rem";
        nav.current.style.height = "6rem";
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  return (
    <main>
      <nav>
        <div className="nav-dropdown">
          <div className="nav-button">
            <p className="menu">MY WORK</p>
            <button className="nav-link" onClick={() => scrollTo(workDiv)}>
              {"["} KEYBOARD {"]"}
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
            }}
          >
            LET'S TALK{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              width="14"
              viewBox="0 0 448 512"
              fill="white"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </Link>
        </div>
      </nav>

      <div className="background"></div>
      <div className="background-overlay"></div>

      <div className="containerHolder">
        <div className="containerTitle">
          <span>CHRISTIAN DAVENPORT</span>
          <h1 className="title">
            3D ARTIST
            <br />
            DIGITAL DESIGNER
          </h1>
          <div className="cardTitleHolder">
            <div className="card-title">
              <div>
                <span>ABOUT</span>
                <br />
                <p>
                  I'M CHRISTIAN, A 3D ARTIST AND DIGITAL DESIGNER PROFICIENT IN
                  BLENDER, SUBSTANCE PAINTER, AND UNREAL ENGINE. I CREATE
                  VISUALLY STUNNING AND TECHNICALLY SOPHISTICATED ASSETS AND
                  ENVIRONMENTS FOR GAMES, FILMS, AND INTERACTIVE MEDIA.
                  <br />
                  <br />I REGULARLY UTILIZE THE ADOBE SUITE TO ENHANCE MY
                  CREATIVE WORKFLOW, SEAMLESSLY INTEGRATING 2D AND 3D ELEMENTS,
                  INTRICATE TEXTURING, AND COMPELLING VISUAL STORYTELLING.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container" style={{ width: "100%" }} ref={workDiv}>
          <div className="cardHolder" style={{ justifyContent: "center" }}>
            <Link className="card" href={"/project"} style={{ opacity: "1" }}>
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
              <div className="overlay">
                <h1>KEYBOARD</h1>
                <span>
                  PRODUCT DESIGN {"["} 2024 {"]"}
                </span>
              </div>
            </Link>
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
