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
            <p className="menu">
              {"["} MENU {"]"}
            </p>
            <button className="nav-link" onClick={() => scrollTo(workDiv)}>
              {"["} WORK {"]"}
            </button>
            <Link href={"/contact"} className="nav-link">
              {"["} CONTACT {"]"}
            </Link>
          </div>
        </div>
      </nav>

      <div className="background"></div>
      <div className="background-overlay"></div>

      <div className="containerHolder">
        <div className="containerTitle">
          <div className="notification">
            <div className="blink">
              <div className="blinking-dot"></div>
              <div className="blinking-glow"></div>
            </div>
            <p style={{ fontSize: "clamp(18px, 2vw, 22px)" }}>
              AVAILABLE FOR FREELANCE
            </p>
          </div>
          <h1 className="title">
            3D ARTIST
            <br />
            PRODUCT DESIGNER
          </h1>
          <div className="cardHolder">
            <div className="card-title">
              <div>
                <p>01</p>
                <h2>
                  <br />
                  3D Modeling
                </h2>
              </div>
            </div>
            <div className="card-title">
              <div>
                <p>02</p>
                <h2>
                  <br />
                  Product Design
                </h2>
              </div>
            </div>
            <div className="card-title">
              <div>
                <p>03</p>
                <h2>
                  <br />
                  Game Assets
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container" style={{ width: "100%" }} ref={workDiv}>
          <div className="cardHolder" style={{ justifyContent: "center" }}>
            <Link className="card" href={"/project"} style={{ opacity: "1" }}>
              <img className="img" src="/1.jpg" />
              <div className="overlay">
                <h1
                  style={{
                    fontSize: "clamp(36px, 6vw, 64px)",
                  }}
                >
                  Keyboard
                </h1>
                <p style={{ fontSize: "clamp(16px, 2vw, 18px)" }}>
                  PRODUCT DESIGN {"["} 2024 {"]"}
                </p>
              </div>
            </Link>
            <Link className="card" href={"/project"} style={{ opacity: "1" }}>
              <img className="img" src="/1.jpg" />
              <div className="overlay">
                <h1
                  style={{
                    fontSize: "clamp(36px, 6vw, 64px)",
                  }}
                >
                  Keyboard
                </h1>
                <p style={{ fontSize: "clamp(16px, 2vw, 18px)" }}>
                  PRODUCT DESIGN {"["} 2024 {"]"}
                </p>
              </div>
            </Link>
          </div>
        </div>

        <footer>
          <div className="footer">
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
                height="20"
                width="16"
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
              href="https://dribbble.com/christiandavenport/shots"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              DRIBBBLE
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="16"
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
              UNREAL MARKET{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="16"
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
              href="https://www.linkedin.com/in/christian-davenport-5228352ba/"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              LINKEDIN{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="16"
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
